import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { PrismaClient } from '../generated/prisma-client/index.js';
import crypto from 'crypto';
import { Resend } from 'resend';
import multer from 'multer';
import path from 'path';
import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { defaultCmsPages, defaultProductSeeds } from '../src/shared/cmsDefaults.js';
import {
  buildAdminOrderUpdateInput,
  buildOrderSortClause,
  buildOrderWhereClause,
  buildOrdersCsv,
  sanitizeOrderQuery,
  serializeOrder,
  serializeOrderListItem,
  validateAdminOrderUpdatePayload
} from './orderAdmin.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const uploadsDir = path.join(projectRoot, 'public', 'uploads');
const adminDataDir = path.join(projectRoot, '.data');
const adminAuthFile = path.join(adminDataDir, 'admin-auth.json');
const distDir = path.join(projectRoot, 'dist');
const distIndexFile = path.join(distDir, 'index.html');

if (!process.env.DATABASE_URL) {
  const sqliteDbPath = path.join(projectRoot, 'prisma', 'dev.db').replace(/\\/g, '/');
  process.env.DATABASE_URL = `file:${sqliteDbPath}`;
}

const app = express();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2023-10-16'
});

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const ADMIN_TOKEN_TTL_MS = 1000 * 60 * 60 * 12;
const MIN_FORM_SUBMISSION_MS = 1500;
const ADMIN_DEFAULT_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || (IS_PRODUCTION ? undefined : 'admin123');
const ADMIN_PASSWORD_MIN_LENGTH = 10;
const STOREFRONT_SETTINGS_KEY = 'storefront-settings';
const DEFAULT_STOREFRONT_SETTINGS = {
  saleEnabled: false,
  saleAnnouncement: 'WYPRZEDAZ AKTYWNA - CENY PROMOCYJNE NA WYBRANYCH MODELACH',
  saleBadgeLabel: 'WYPRZEDAZ',
  announcementEnabled: false,
  announcementText: 'DROP 01 | ZOSTALO MALO'
};

if (IS_PRODUCTION && !process.env.ADMIN_PASSWORD) {
  console.warn('[SECURITY] ADMIN_PASSWORD env var is not set. Default password fallback is disabled in production.');
}
if (IS_PRODUCTION && !process.env.ADMIN_TOKEN_SECRET) {
  console.warn('[SECURITY] ADMIN_TOKEN_SECRET env var is not set. Using ADMIN_PASSWORD as fallback — set a dedicated secret for production.');
}
if (IS_PRODUCTION && !process.env.DROP_TOKEN_SECRET && !process.env.DROP_PASSWORD) {
  console.warn('[SECURITY] Neither DROP_TOKEN_SECRET nor DROP_PASSWORD is set. Drop tokens will use an insecure dev fallback.');
}

const toBase64Url = (value) =>
  Buffer.from(value, 'utf8').toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const fromBase64Url = (value) => {
  const pad = value.length % 4 === 0 ? '' : '='.repeat(4 - (value.length % 4));
  return Buffer.from((value + pad).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
};

const signTokenPayload = (payloadB64, secret) =>
  crypto.createHmac('sha256', secret).update(payloadB64).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const getDropStartMs = () => {
  if (!process.env.DROP_START_AT) return null;
  const timestamp = new Date(process.env.DROP_START_AT).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
};

const isDropLive = () => {
  const dropStartMs = getDropStartMs();
  if (!dropStartMs) return true;
  return Date.now() >= dropStartMs;
};

const createDropToken = () => {
  const startMs = getDropStartMs();
  const exp = startMs ? startMs + 24 * 60 * 60 * 1000 : Date.now() + 24 * 60 * 60 * 1000;
  const payloadB64 = toBase64Url(JSON.stringify({ exp }));
  const signature = signTokenPayload(payloadB64, process.env.DROP_TOKEN_SECRET || process.env.DROP_PASSWORD || 'dev_drop_secret');
  return `${payloadB64}.${signature}`;
};

const isValidDropToken = (token) => {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadB64, signature] = parts;
  const expected = signTokenPayload(payloadB64, process.env.DROP_TOKEN_SECRET || process.env.DROP_PASSWORD || 'dev_drop_secret');

  try {
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
    const payload = JSON.parse(fromBase64Url(payloadB64));
    return Boolean(payload?.exp) && Date.now() <= payload.exp;
  } catch (error) {
    return false;
  }
};

const getBearerToken = (req) => {
  const auth = req.headers.authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) {
    return auth.slice('Bearer '.length).trim();
  }

  return null;
};

const getDropTokenFromReq = (req) => {
  const customHeader = req.headers['x-drop-token'];
  if (typeof customHeader === 'string' && customHeader.trim()) return customHeader.trim();
  return getBearerToken(req);
};

const adminSecret = () => process.env.ADMIN_TOKEN_SECRET || process.env.ADMIN_PASSWORD || 'dev_admin_secret';

const createAdminToken = (username) => {
  const payloadB64 = toBase64Url(JSON.stringify({
    username,
    exp: Date.now() + ADMIN_TOKEN_TTL_MS
  }));

  return `${payloadB64}.${signTokenPayload(payloadB64, adminSecret())}`;
};

const verifyAdminToken = (token) => {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payloadB64, signature] = parts;
  const expected = signTokenPayload(payloadB64, adminSecret());

  try {
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
    const payload = JSON.parse(fromBase64Url(payloadB64));
    if (!payload?.username || !payload?.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch (error) {
    return null;
  }
};

const requireAdmin = (req, res, next) => {
  const token = getBearerToken(req);
  const payload = verifyAdminToken(token);

  if (!payload) {
    return res.status(401).json({ error: 'Brak autoryzacji administratora.' });
  }

  req.adminUser = payload;
  return next();
};

const apiOrigin = (req) => `${req.protocol}://${req.get('host')}`;
const frontendOrigin = () => process.env.FRONTEND_URL || 'http://localhost:5173';

const normalizeStoredAssetUrl = (value) => {
  if (!value) return value;

  const normalized = String(value).trim().replace(/\\/g, '/');
  if (!normalized || normalized.startsWith('data:')) return normalized;

  try {
    const parsed = new URL(normalized);
    if (parsed.pathname.startsWith('/uploads/')) {
      return parsed.pathname;
    }
    return normalized;
  } catch (error) {
    // Not an absolute URL, continue with path normalization.
  }

  const uploadsSegmentIndex = normalized.toLowerCase().lastIndexOf('/uploads/');
  if (uploadsSegmentIndex >= 0) {
    return normalized.slice(uploadsSegmentIndex);
  }

  if (normalized.startsWith('uploads/')) return `/${normalized}`;
  return normalized;
};

const toAbsoluteAssetUrl = (req, value) => {
  const normalized = normalizeStoredAssetUrl(value);
  if (!normalized) return normalized;
  if (normalized.startsWith('data:') || normalized.startsWith('http://') || normalized.startsWith('https://')) return normalized;
  if (normalized.startsWith('/')) return `${apiOrigin(req)}${normalized}`;
  return `${apiOrigin(req)}/${normalized}`;
};

const parseJsonArray = (value, fallback = []) => {
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    return fallback;
  }
};

const parseJsonObject = (value, fallback = {}) => {
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed : fallback;
  } catch (error) {
    return fallback;
  }
};

const stringifyJson = (value) => JSON.stringify(value ?? null);

const escapeHtml = (value) => String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const reportDebugServerEvent = () => {};
const reportAdminMonitorEvent = () => {};

const hashPassword = (password, salt = crypto.randomBytes(16).toString('hex')) => {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
};

const verifyPasswordHash = (password, storedHash) => {
  if (!storedHash) return false;
  const [algorithm, salt, hash] = String(storedHash).split(':');
  if (algorithm !== 'scrypt' || !salt || !hash) return false;

  const nextHash = crypto.scryptSync(password, salt, 64);
  const storedBuffer = Buffer.from(hash, 'hex');
  if (storedBuffer.length !== nextHash.length) return false;
  return crypto.timingSafeEqual(nextHash, storedBuffer);
};

const readAdminAuthStore = async () => {
  try {
    const raw = await fsPromises.readFile(adminAuthFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || !parsed.passwordHash) {
      return null;
    }
    return parsed;
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
};

const writeAdminAuthStore = async (payload) => {
  await fsPromises.mkdir(adminDataDir, { recursive: true });
  await fsPromises.writeFile(adminAuthFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  return payload;
};

const getAdminUsername = async () => {
  const stored = await readAdminAuthStore();
  return stored?.username || ADMIN_DEFAULT_USERNAME;
};

const verifyAdminPassword = async (password) => {
  const stored = await readAdminAuthStore();
  if (stored?.passwordHash) {
    return verifyPasswordHash(password, stored.passwordHash);
  }
  if (!ADMIN_DEFAULT_PASSWORD) return false;
  return password === ADMIN_DEFAULT_PASSWORD;
};

const normalizeSlug = (input) =>
  String(input || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);

const computeDiscountPercent = (price, salePrice) => {
  if (!salePrice || salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
};

const normalizeStorefrontSettings = (customData = {}) => ({
  saleEnabled: Boolean(customData.saleEnabled),
  saleAnnouncement: String(customData.saleAnnouncement || DEFAULT_STOREFRONT_SETTINGS.saleAnnouncement).trim() || DEFAULT_STOREFRONT_SETTINGS.saleAnnouncement,
  saleBadgeLabel: String(customData.saleBadgeLabel || DEFAULT_STOREFRONT_SETTINGS.saleBadgeLabel).trim() || DEFAULT_STOREFRONT_SETTINGS.saleBadgeLabel,
  announcementEnabled: Boolean(customData.announcementEnabled),
  announcementText: String(customData.announcementText || DEFAULT_STOREFRONT_SETTINGS.announcementText).trim() || DEFAULT_STOREFRONT_SETTINGS.announcementText
});

const getStorefrontSettings = async () => {
  const page = await prisma.cmsPage.findUnique({ where: { key: STOREFRONT_SETTINGS_KEY } });
  return normalizeStorefrontSettings(parseJsonObject(page?.customData, DEFAULT_STOREFRONT_SETTINGS));
};

const serializeProduct = (req, product, options = {}) => {
  const useStorefrontPricing = Boolean(options.storefrontSettings);
  const storefrontSettings = useStorefrontPricing ? normalizeStorefrontSettings(options.storefrontSettings) : DEFAULT_STOREFRONT_SETTINGS;
  const colors = parseJsonArray(product.colors);
  const sizes = parseJsonArray(product.sizes);
  const detailsPl = parseJsonArray(product.details);
  const detailsEn = parseJsonArray(product.detailsEn);
  const images = [...product.images].sort((a, b) => a.position - b.position);
  const hasValidSalePrice = Number.isFinite(product.salePrice) && product.salePrice > 0 && product.salePrice < product.price;
  const saleActive = useStorefrontPricing ? storefrontSettings.saleEnabled && hasValidSalePrice : hasValidSalePrice;
  const effectiveSalePrice = hasValidSalePrice ? product.salePrice : null;

  return {
    id: product.id,
    externalId: product.externalId || product.id,
    slug: product.slug,
    sku: product.sku,
    category: product.category,
    categoryTitle: {
      pl: product.categoryLabel || product.category,
      en: product.categoryLabelEn || product.categoryLabel || product.category
    },
    title: {
      pl: product.name,
      en: product.nameEn || product.name
    },
    shortDescription: {
      pl: product.shortDescription,
      en: product.shortDescriptionEn || product.shortDescription
    },
    description: {
      pl: product.description,
      en: product.descriptionEn || product.description
    },
    material: {
      pl: product.material || '',
      en: product.materialEn || product.material || ''
    },
    details: {
      pl: detailsPl,
      en: detailsEn.length ? detailsEn : detailsPl
    },
    price: `${product.price.toFixed(2)} ${product.currency}`,
    priceValue: product.price,
    salePrice: saleActive && effectiveSalePrice ? `${effectiveSalePrice.toFixed(2)} ${product.currency}` : null,
    salePriceValue: saleActive ? effectiveSalePrice : null,
    discountPercent: saleActive && effectiveSalePrice ? computeDiscountPercent(product.price, effectiveSalePrice) : 0,
    saleActive,
    saleBadgeLabel: useStorefrontPricing && saleActive ? storefrontSettings.saleBadgeLabel : null,
    currency: product.currency,
    vatRate: product.vatRate,
    stock: product.stock,
    sizeStock: parseJsonObject(product.sizeStock),
    weight: product.weight,
    dimensions: {
      width: product.width,
      height: product.height,
      depth: product.depth
    },
    colors,
    sizes,
    status: product.status,
    isArchived: product.isArchived,
    featured: product.featured,
    dropFeatured: product.dropFeatured,
    seoTitle: product.seoTitle,
    metaDescription: product.metaDescription,
    images: images.map((image) => toAbsoluteAssetUrl(req, image.url)),
    imageObjects: images.map((image) => ({
      id: image.id,
      url: toAbsoluteAssetUrl(req, image.url),
      alt: image.alt || '',
      position: image.position,
      isThumbnail: image.isThumbnail
    })),
    createdAt: product.createdAt,
    updatedAt: product.updatedAt
  };
};

const serializePage = (page) => ({
  id: page.id,
  key: page.key,
  title: page.title,
  slug: page.slug,
  seoTitle: page.seoTitle,
  metaDescription: page.metaDescription,
  bodyHtml: page.bodyHtml,
  customData: parseJsonObject(page.customData),
  currentVersion: page.currentVersion,
  createdAt: page.createdAt,
  updatedAt: page.updatedAt,
  isArchived: page.isArchived
});

const buildStorefrontCategories = (req, products, storefrontSettings) => {
  const grouped = new Map();

  products.forEach((product) => {
    const serialized = serializeProduct(req, product, { storefrontSettings });
    if (!grouped.has(product.category)) {
      grouped.set(product.category, {
        id: product.category,
        title: serialized.categoryTitle,
        products: []
      });
    }

    grouped.get(product.category).products.push(serialized);
  });

  return Array.from(grouped.values()).sort((a, b) => a.id.localeCompare(b.id));
};

const buildProductInput = (body, existingProduct = null) => {
  const slug = normalizeSlug(body.slug || body.name || existingProduct?.slug || '');
  const colors = Array.isArray(body.colors) ? body.colors : [];
  const sizes = Array.isArray(body.sizes) ? body.sizes : [];
  const detailsPl = Array.isArray(body.detailsPl) ? body.detailsPl : [];
  const detailsEn = Array.isArray(body.detailsEn) ? body.detailsEn : [];

  const images = Array.isArray(body.images)
    ? body.images
        .map((image, index) => ({
          url: normalizeStoredAssetUrl(image?.url || ''),
          alt: image?.alt || '',
          position: Number.isFinite(Number(image?.position)) ? Number(image.position) : index,
          isThumbnail: Boolean(image?.isThumbnail) || index === 0
        }))
        .filter((image) => image.url)
        .sort((a, b) => a.position - b.position)
    : [];

  return {
    values: {
      externalId: body.externalId || existingProduct?.externalId || null,
      name: String(body.name || '').trim(),
      nameEn: String(body.nameEn || '').trim() || null,
      slug,
      sku: String(body.sku || '').trim(),
      category: String(body.category || '').trim(),
      categoryLabel: String(body.categoryLabel || body.category || '').trim() || null,
      categoryLabelEn: String(body.categoryLabelEn || body.categoryLabel || body.category || '').trim() || null,
      shortDescription: String(body.shortDescription || '').trim(),
      shortDescriptionEn: String(body.shortDescriptionEn || '').trim() || null,
      description: String(body.description || '').trim(),
      descriptionEn: String(body.descriptionEn || '').trim() || null,
      material: String(body.material || '').trim() || null,
      materialEn: String(body.materialEn || '').trim() || null,
      details: stringifyJson(detailsPl),
      detailsEn: stringifyJson(detailsEn),
      price: Number(body.price),
      salePrice: body.salePrice === '' || body.salePrice === null || body.salePrice === undefined ? null : Number(body.salePrice),
      currency: String(body.currency || 'PLN').trim() || 'PLN',
      vatRate: Number(body.vatRate ?? 23),
      stock: Number(body.stock ?? 0),
      weight: body.weight === '' || body.weight === null || body.weight === undefined ? null : Number(body.weight),
      width: body.width === '' || body.width === null || body.width === undefined ? null : Number(body.width),
      height: body.height === '' || body.height === null || body.height === undefined ? null : Number(body.height),
      depth: body.depth === '' || body.depth === null || body.depth === undefined ? null : Number(body.depth),
      status: String(body.status || 'available').trim(),
      isArchived: Boolean(body.isArchived),
      featured: Boolean(body.featured),
      dropFeatured: Boolean(body.dropFeatured),
      colors: stringifyJson(colors),
      sizes: stringifyJson(sizes),
      sizeStock: body.sizeStock != null ? stringifyJson(body.sizeStock) : undefined,
      seoTitle: String(body.seoTitle || '').trim() || null,
      metaDescription: String(body.metaDescription || '').trim() || null
    },
    images
  };
};

const validateProductPayload = (body) => {
  const errors = {};

  if (!String(body.name || '').trim()) errors.name = 'Nazwa produktu jest wymagana.';
  if (!String(body.sku || '').trim()) errors.sku = 'SKU jest wymagane.';
  if (!String(body.category || '').trim()) errors.category = 'Kategoria jest wymagana.';
  if (!String(body.shortDescription || '').trim()) errors.shortDescription = 'Opis glowny jest wymagany.';
  if (!String(body.description || '').trim()) errors.description = 'Opis szczegolowy jest wymagany.';

  const price = Number(body.price);
  if (!Number.isFinite(price) || price < 0) errors.price = 'Cena bazowa musi byc liczba dodatnia.';

  const salePrice = body.salePrice === '' || body.salePrice === null || body.salePrice === undefined ? null : Number(body.salePrice);
  if (salePrice !== null && (!Number.isFinite(salePrice) || salePrice < 0)) errors.salePrice = 'Cena promocyjna musi byc liczba dodatnia.';

  const vatRate = Number(body.vatRate ?? 23);
  if (!Number.isFinite(vatRate) || vatRate < 0) errors.vatRate = 'Stawka VAT musi byc poprawna.';

  const stock = Number(body.stock ?? 0);
  if (!Number.isInteger(stock) || stock < 0) errors.stock = 'Stan magazynowy musi byc liczba calkowita >= 0.';

  const images = Array.isArray(body.images) ? body.images.filter((image) => image?.url) : [];
  if (!images.length) errors.images = 'Dodaj przynajmniej jedno zdjecie produktu.';

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

const validatePagePayload = (body) => {
  const errors = {};

  if (!String(body.title || '').trim()) errors.title = 'Tytul strony jest wymagany.';
  if (!normalizeSlug(body.slug || body.title)) errors.slug = 'Adres URL jest wymagany.';
  if (!String(body.bodyHtml || '').trim()) errors.bodyHtml = 'Tresc strony jest wymagana.';

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

const validatePasswordChangePayload = (body) => {
  const errors = {};
  const currentPassword = String(body.currentPassword || '');
  const nextPassword = String(body.newPassword || '');
  const confirmPassword = String(body.confirmPassword || '');

  if (!currentPassword) errors.currentPassword = 'Aktualne haslo jest wymagane.';
  if (!nextPassword) errors.newPassword = 'Nowe haslo jest wymagane.';
  if (nextPassword && nextPassword.length < ADMIN_PASSWORD_MIN_LENGTH) {
    errors.newPassword = `Nowe haslo musi miec co najmniej ${ADMIN_PASSWORD_MIN_LENGTH} znakow.`;
  }
  if (nextPassword && currentPassword && nextPassword === currentPassword) {
    errors.newPassword = 'Nowe haslo musi roznic sie od aktualnego.';
  }
  if (nextPassword !== confirmPassword) {
    errors.confirmPassword = 'Nowe hasla musza byc identyczne.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

const ensureUniqueConstraintMessage = (error) => {
  if (error?.code === 'P2002') {
    const target = Array.isArray(error.meta?.target) ? error.meta.target.join(', ') : 'unikalnych pol';
    return `Wartosc dla pola ${target} musi byc unikalna.`;
  }

  return null;
};

const createUniqueProductField = async (field, baseValue) => {
  const normalizedBaseValue = String(baseValue || '').trim();
  let candidate = normalizedBaseValue;
  let attempt = 1;

  while (true) {
    const existing = await prisma.product.findFirst({
      where: {
        [field]: candidate
      },
      select: { id: true }
    });

    if (!existing) {
      return candidate;
    }

    attempt += 1;
    if (field === 'slug') {
      candidate = `${normalizedBaseValue}-copy-${attempt - 1}`;
    } else if (field === 'sku') {
      candidate = `${normalizedBaseValue}-COPY-${attempt - 1}`;
    } else {
      candidate = `${normalizedBaseValue} Copy ${attempt - 1}`;
    }
  }
};

const cloneProduct = async ({ productId, author }) => {
  const sourceProduct = await prisma.product.findUnique({
    where: { id: productId },
    include: { images: true }
  });

  if (!sourceProduct) {
    return null;
  }

  const sourceSlugBase = normalizeSlug(sourceProduct.slug || sourceProduct.name || 'product-copy') || 'product-copy';
  const uniqueSlug = await createUniqueProductField('slug', `${sourceSlugBase}-copy`);
  const uniqueSku = await createUniqueProductField('sku', `${sourceProduct.sku}-COPY`);
  const clonedName = `${sourceProduct.name} (Kopia)`;
  const clonedNameEn = sourceProduct.nameEn ? `${sourceProduct.nameEn} (Copy)` : null;

  const cloned = await prisma.product.create({
    data: {
      externalId: null,
      name: clonedName,
      nameEn: clonedNameEn,
      slug: uniqueSlug,
      sku: uniqueSku,
      category: sourceProduct.category,
      categoryLabel: sourceProduct.categoryLabel,
      categoryLabelEn: sourceProduct.categoryLabelEn,
      shortDescription: sourceProduct.shortDescription,
      shortDescriptionEn: sourceProduct.shortDescriptionEn,
      description: sourceProduct.description,
      descriptionEn: sourceProduct.descriptionEn,
      material: sourceProduct.material,
      materialEn: sourceProduct.materialEn,
      details: sourceProduct.details,
      detailsEn: sourceProduct.detailsEn,
      price: sourceProduct.price,
      salePrice: sourceProduct.salePrice,
      currency: sourceProduct.currency,
      vatRate: sourceProduct.vatRate,
      stock: sourceProduct.stock,
      weight: sourceProduct.weight,
      width: sourceProduct.width,
      height: sourceProduct.height,
      depth: sourceProduct.depth,
      status: sourceProduct.status,
      isArchived: false,
      deletedAt: null,
      featured: sourceProduct.featured,
      dropFeatured: sourceProduct.dropFeatured,
      colors: sourceProduct.colors,
      sizes: sourceProduct.sizes,
      seoTitle: sourceProduct.seoTitle ? `${sourceProduct.seoTitle} | Kopia` : null,
      metaDescription: sourceProduct.metaDescription,
      images: {
        create: sourceProduct.images.map((image) => ({
          url: image.url,
          alt: image.alt,
          position: image.position,
          isThumbnail: image.isThumbnail
        }))
      }
    },
    include: { images: true }
  });

  await writeProductHistory({
    productId: cloned.id,
    author,
    action: 'cloned',
    snapshot: cloned
  });

  await writeProductHistory({
    productId: sourceProduct.id,
    author,
    action: `cloned_to:${cloned.id}`,
    snapshot: sourceProduct
  });

  return cloned;
};

const writeProductHistory = async ({ productId, author, action, snapshot }) => {
  await prisma.productHistory.create({
    data: {
      productId,
      author,
      action,
      snapshot: JSON.stringify(snapshot)
    }
  });
};

const saveProductWithHistory = async ({ body, productId = null, author }) => {
  const { values, images } = buildProductInput(body);
  const imageCreate = images.map((image) => ({
    url: image.url,
    alt: image.alt,
    position: image.position,
    isThumbnail: image.isThumbnail
  }));

  if (productId) {
    const updated = await prisma.product.update({
      where: { id: productId },
      data: {
        ...values,
        images: {
          deleteMany: {},
          create: imageCreate
        }
      },
      include: { images: true }
    });

    await writeProductHistory({
      productId: updated.id,
      author,
      action: 'updated',
      snapshot: updated
    });

    return updated;
  }

  const created = await prisma.product.create({
    data: {
      ...values,
      images: {
        create: imageCreate
      }
    },
    include: { images: true }
  });

  await writeProductHistory({
    productId: created.id,
    author,
    action: 'created',
    snapshot: created
  });

  return created;
};

const buildPageInput = (body) => ({
  title: String(body.title || '').trim(),
  slug: normalizeSlug(body.slug || body.title || ''),
  seoTitle: String(body.seoTitle || '').trim() || null,
  metaDescription: String(body.metaDescription || '').trim() || null,
  bodyHtml: String(body.bodyHtml || '').trim(),
  customData: stringifyJson(body.customData || {})
});

const ensureCmsSeedData = async () => {
  const existingProductCount = await prisma.product.count();
  if (existingProductCount === 0) {
    for (const product of defaultProductSeeds) {
      const created = await prisma.product.create({
        data: {
          externalId: product.id,
          name: product.namePl,
          nameEn: product.nameEn,
          slug: product.slug,
          sku: product.sku,
          category: product.category,
          categoryLabel: product.categoryLabelPl,
          categoryLabelEn: product.categoryLabelEn,
          shortDescription: product.shortDescriptionPl,
          shortDescriptionEn: product.shortDescriptionEn,
          description: product.descriptionPl,
          descriptionEn: product.descriptionEn,
          material: product.materialPl,
          materialEn: product.materialEn,
          details: stringifyJson(product.detailsPl),
          detailsEn: stringifyJson(product.detailsEn),
          price: product.price,
          salePrice: product.salePrice,
          currency: product.currency,
          vatRate: product.vatRate,
          stock: product.stock,
          weight: product.weight,
          width: product.width,
          height: product.height,
          depth: product.depth,
          status: product.status,
          featured: product.featured,
          dropFeatured: product.dropFeatured,
          colors: stringifyJson(product.colors),
          sizes: stringifyJson(product.sizes),
          seoTitle: `${product.namePl} | TatraGrail`,
          metaDescription: product.shortDescriptionPl,
          images: {
            create: product.images.map((image) => ({
              url: image.url,
              alt: image.alt,
              position: image.position,
              isThumbnail: image.isThumbnail
            }))
          }
        },
        include: { images: true }
      });

      await writeProductHistory({
        productId: created.id,
        author: 'system',
        action: 'seeded',
        snapshot: created
      });
    }
  }
};

const ensureCmsPages = async () => {
  for (const page of defaultCmsPages) {
    const existing = await prisma.cmsPage.findUnique({ where: { key: page.key } });
    if (existing) continue;

    const created = await prisma.cmsPage.create({
      data: {
        key: page.key,
        title: page.title,
        slug: page.slug,
        seoTitle: page.seoTitle,
        metaDescription: page.metaDescription,
        bodyHtml: page.bodyHtml,
        customData: stringifyJson(page.customData),
        currentVersion: 1,
        isArchived: Boolean(page.isArchived)
      }
    });

    await prisma.cmsPageVersion.create({
      data: {
        pageId: created.id,
        version: 1,
        title: page.title,
        slug: page.slug,
        seoTitle: page.seoTitle,
        metaDescription: page.metaDescription,
        bodyHtml: page.bodyHtml,
        customData: stringifyJson(page.customData),
        author: 'system'
      }
    });
  }
};

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      await fsPromises.mkdir(uploadsDir, { recursive: true });
      cb(null, uploadsDir);
    } catch (error) {
      cb(error, uploadsDir);
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    const safeName = normalizeSlug(path.basename(file.originalname || 'plik', ext)) || 'media';
    cb(null, `${safeName}-${Date.now()}-${crypto.randomInt(1000, 9999)}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 10 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Dozwolone sa wylacznie pliki graficzne.'));
    }

    return cb(null, true);
  }
});

await fsPromises.mkdir(uploadsDir, { recursive: true });

// Stripe webhook needs raw body before JSON middleware.
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    return res.status(400).send('Webhook secret not configured');
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
  } catch (error) {
    console.error(`Webhook Error: ${error.message}`);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;

    try {
      const order = await prisma.order.update({
        where: { id: orderId },
        data: {
          paymentStatus: 'paid',
          paymentProvider: 'stripe'
        },
        include: { items: true }
      });

      // Webhook tylko oznacza platnosc jako oplacona — stock byl juz odjety przy tworzeniu zamowienia
      try {
        const shipmentData = await createInPostShipment(order);
        await prisma.order.update({
          where: { id: order.id },
          data: {
            shipmentId: shipmentData.shipmentId,
            trackingNumber: shipmentData.trackingNumber,
            shipmentStatus: shipmentData.status
          }
        });
        order.trackingNumber = shipmentData.trackingNumber;
      } catch (shipmentError) {
        console.error(`Failed to create shipment for order ${order.orderNumber}`, shipmentError);
      }

      await sendOrderConfirmationEmail(order);
    } catch (error) {
      console.error('Error updating order on webhook', error);
    }
  }

  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;
    if (orderId) {
      try {
        await prisma.order.update({
          where: { id: orderId },
          data: { paymentStatus: 'failed' }
        });
      } catch (error) {
        console.error('Could not mark order as failed', error);
      }
    }
  }

  return res.send();
});

// --- Security middleware ---
const allowedOrigins = (process.env.CORS_ORIGINS || process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: IS_PRODUCTION ? allowedOrigins : true,
  credentials: true
}));

app.use(helmet({
  contentSecurityPolicy: IS_PRODUCTION ? undefined : false,
  crossOriginEmbedderPolicy: false
}));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Zbyt wiele prob logowania. Sprobuj ponownie za 15 minut.' },
  standardHeaders: true,
  legacyHeaders: false
});

app.use(express.json({ limit: '8mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadsDir));

const resend = new Resend(process.env.RESEND_API_KEY);

const createInPostShipment = async (order) => {
  if (process.env.INPOST_API_TOKEN === 'mock_inpost_token' || !process.env.INPOST_API_TOKEN) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('InPost API not configured. Manual shipment required.');
    }
    return {
      shipmentId: `mock_shipment_${crypto.randomUUID().slice(0, 8)}`,
      trackingNumber: `6${Array.from({length: 23}, () => Math.floor(Math.random() * 10)).join('')}`,
      status: 'created'
    };
  }

  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const size = totalItems > 4 ? 'C' : totalItems > 2 ? 'B' : 'A';
  const baseUrl = process.env.INPOST_ENV === 'production' ? 'https://api.inpost-group.com' : 'https://sandbox-api.inpost-group.com';
  const isLocker = order.deliveryMethod === 'inpost_locker';
  const serviceId = isLocker ? 'inpost_locker_standard' : 'inpost_courier_standard';

  const payload = {
    receiver: {
      first_name: order.firstName,
      last_name: order.lastName,
      email: order.email,
      phone: normalizePhone(order.phone) || '111222333',
      address: isLocker
        ? undefined
        : {
            street: order.street,
            building_number: order.houseNumber,
            city: order.city,
            post_code: order.postalCode,
            country_code: 'PL'
          }
    },
    parcels: [
      {
        dimensions: {
          length: Math.round((order.packageLength || (size === 'A' ? 8 : size === 'B' ? 19 : 41)) * 10),
          width: Math.round((order.packageWidth || 38) * 10),
          height: Math.round((order.packageHeight || 6.4) * 10),
          unit: 'mm'
        },
        weight: {
          amount: order.packageWeight || (size === 'A' ? 1 : size === 'B' ? 3 : 5),
          unit: 'kg'
        }
      }
    ],
    service: serviceId,
    custom_attributes: isLocker ? { target_point: order.inpostPointId } : undefined,
    reference: order.orderNumber
  };

  const response = await fetch(`${baseUrl}/shipping/v2/organizations/${process.env.INPOST_ORG_ID}/shipments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.INPOST_API_TOKEN}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`InPost API error: ${response.status} ${message}`);
  }

  const data = await response.json();
  return {
    shipmentId: data.id,
    trackingNumber: data.tracking_number,
    status: data.status
  };
};

const sendOrderConfirmationEmail = async (order) => {
  const isLocker = order.deliveryMethod === 'inpost_locker';
  const deliveryInfo = isLocker
    ? `Paczkomat InPost: <strong>${escapeHtml(order.inpostPointId)}</strong><br/>${escapeHtml(order.inpostPointAddress)}, ${escapeHtml(order.inpostPointPostalCode)} ${escapeHtml(order.inpostPointCity)}`
    : `Kurier InPost<br/>${escapeHtml(order.street)} ${escapeHtml(order.houseNumber)}, ${escapeHtml(order.postalCode)} ${escapeHtml(order.city)}`;

  await resend.emails.send({
    from: 'TatraGrail <no-reply@tatragrail.pl>',
    to: order.email,
    subject: `Potwierdzenie zamowienia ${escapeHtml(order.orderNumber)}`,
    html: `
      <h1>Dziekujemy za zakupy w TatraGrail!</h1>
      <p>Twoje zamowienie <strong>${escapeHtml(order.orderNumber)}</strong> zostalo oplacone i jest realizowane.</p>
      <p>Kwota zamowienia: <strong>${order.total.toFixed(2)} PLN</strong></p>
      <h3>Dane dostawy</h3>
      <p>${deliveryInfo}</p>
      <p><strong>Ważne:</strong> Status oraz kod odbioru przesyłki znajdziesz wyłącznie w aplikacji InPost Mobile zarejestrowanej na podany przy zamówieniu numer telefonu.</p>
      <p><a href="${frontendOrigin()}/tracking/${order.trackingToken}">Szczegoly zamowienia</a></p>
    `
  });
};

const normalizePhone = (value) => String(value || '').replace(/[^\d+]/g, '').trim();

const roundMetric = (value, fallback = null) => {
  if (!Number.isFinite(value)) return fallback;
  return Math.round(value * 100) / 100;
};

const estimatePackageMetrics = (cart = [], products = []) => {
  const productMap = new Map(products.map((product) => [product.id, product]));
  const totalQuantity = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const defaultWeight = totalQuantity > 0 ? totalQuantity * 0.3 : 0.3;
  const packageWeight = roundMetric(
    cart.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      const unitWeight = Number(product?.weight);
      return sum + (Number.isFinite(unitWeight) && unitWeight > 0 ? unitWeight : 0.3) * Number(item.quantity || 0);
    }, 0),
    roundMetric(defaultWeight, 0.3)
  );

  const packageWidth = roundMetric(
    cart.reduce((max, item) => {
      const product = productMap.get(item.productId);
      const width = Number(product?.width);
      return Number.isFinite(width) && width > max ? width : max;
    }, 30),
    30
  );

  const packageLength = roundMetric(
    cart.reduce((max, item) => {
      const product = productMap.get(item.productId);
      const depth = Number(product?.depth);
      return Number.isFinite(depth) && depth > max ? depth : max;
    }, 35),
    35
  );

  const packageHeight = roundMetric(
    cart.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      const height = Number(product?.height);
      const unitHeight = Number.isFinite(height) && height > 0 ? Math.max(height * 0.2, 0.5) : 0.8;
      return sum + unitHeight * Number(item.quantity || 0);
    }, 0),
    4
  );

  return {
    packageWeight: packageWeight || 0.3,
    packageWidth: packageWidth || 30,
    packageLength: packageLength || 35,
    packageHeight: packageHeight || 4
  };
};

const buildCheckoutCustomer = (customer = {}, delivery = {}) => {
  const checkoutMode = customer.checkoutMode === 'quick' ? 'quick' : 'standard';
  const phone = normalizePhone(customer.phone);

  if (checkoutMode === 'quick') {
    const point = delivery?.point || {};
    return {
      checkoutMode,
      values: {
        email: String(customer.email || '').trim(),
        phone,
        firstName: 'Klient',
        lastName: 'Szybki checkout',
        country: 'Polska',
        city: String(point.city || '').trim() || 'Paczkomat InPost',
        postalCode: String(point.postalCode || '').trim() || '00-000',
        street: String(point.address || '').trim() || 'Paczkomat InPost',
        houseNumber: String(point.id || '').trim() || 'InPost',
        companyName: null,
        nip: null
      }
    };
  }

  return {
    checkoutMode,
    values: {
      email: String(customer.email || '').trim(),
      phone,
      firstName: String(customer.firstName || '').trim(),
      lastName: String(customer.lastName || '').trim(),
      country: String(customer.country || '').trim(),
      city: String(customer.city || '').trim(),
      postalCode: String(customer.postalCode || '').trim(),
      street: String(customer.street || '').trim(),
      houseNumber: String(customer.houseNumber || '').trim(),
      companyName: String(customer.companyName || '').trim() || null,
      nip: String(customer.nip || '').trim() || null
    }
  };
};

const validateCheckoutPayload = ({ customer = {}, delivery = {} }) => {
  const checkoutMode = customer.checkoutMode === 'quick' ? 'quick' : 'standard';
  const email = String(customer.email || '').trim();
  const phone = normalizePhone(customer.phone);
  const errors = {};

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Podaj poprawny adres email.';
  }

  if (checkoutMode === 'quick') {
    if (!phone || phone.length < 9) {
      errors.phone = 'Podaj poprawny numer telefonu.';
    }
    if (delivery?.method !== 'inpost_locker' || !delivery?.point?.id) {
      errors.delivery = 'Szybki checkout wymaga wyboru paczkomatu InPost.';
    }
    return { valid: Object.keys(errors).length === 0, errors };
  }

  if (!String(customer.firstName || '').trim()) errors.firstName = 'Imie jest wymagane.';
  if (!String(customer.lastName || '').trim()) errors.lastName = 'Nazwisko jest wymagane.';
  if (!String(customer.street || '').trim()) errors.street = 'Ulica jest wymagana.';
  if (!String(customer.houseNumber || '').trim()) errors.houseNumber = 'Numer domu lub lokalu jest wymagany.';
  if (!String(customer.postalCode || '').trim()) errors.postalCode = 'Kod pocztowy jest wymagany.';
  if (!String(customer.city || '').trim()) errors.city = 'Miasto jest wymagane.';
  if (!String(customer.country || '').trim()) errors.country = 'Kraj jest wymagany.';
  if (delivery?.method === 'inpost_locker' && !delivery?.point?.id) {
    errors.delivery = 'Wybierz paczkomat InPost.';
  }

  return { valid: Object.keys(errors).length === 0, errors };
};

app.get('/api/drop/status', (req, res) => {
  res.json({ live: isDropLive(), dropStartAt: process.env.DROP_START_AT || null });
});

app.post('/api/drop/unlock', (req, res) => {
  const { password } = req.body || {};
  if (!process.env.DROP_PASSWORD) return res.status(400).json({ error: 'DROP_PASSWORD not configured' });
  if (!password || password !== process.env.DROP_PASSWORD) return res.status(401).json({ error: 'Invalid password' });
  return res.json({ ok: true, token: createDropToken() });
});

app.post('/api/discount/validate', async (req, res) => {
  const { code, cartTotal } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Code is required' });

  try {
    const promo = await prisma.promoCode.findUnique({ where: { code } });
    if (!promo) return res.status(404).json({ error: 'Code not found' });
    if (!promo.active) return res.status(400).json({ error: 'Code is inactive' });
    if (promo.expiration && promo.expiration < new Date()) return res.status(400).json({ error: 'Code expired' });
    if (promo.usageLimit && promo.usageCount >= promo.usageLimit) return res.status(400).json({ error: 'Usage limit exceeded' });
    if (promo.minimumCartValue && cartTotal < promo.minimumCartValue) return res.status(400).json({ error: `Minimum cart value is ${promo.minimumCartValue}` });

    return res.json({ success: true, promo });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/create-payment-intent', async (req, res) => {
  const { cart, customer, promoCode, delivery } = req.body || {};

  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  const dropToken = getDropTokenFromReq(req);
  if (!isDropLive() && !isValidDropToken(dropToken)) {
    return res.status(403).json({ error: 'Drop is locked' });
  }

  if (delivery?.method === 'inpost_locker' && !delivery?.point?.id) {
    return res.status(400).json({ error: 'Nalezy wybrac paczkomat InPost' });
  }

  const checkoutValidation = validateCheckoutPayload({ customer, delivery });
  if (!checkoutValidation.valid) {
    return res.status(400).json({ errors: checkoutValidation.errors });
  }

  const normalizedCustomer = buildCheckoutCustomer(customer, delivery);

  try {
    // --- Server-side price lookup (never trust client prices) ---
    const productIds = Array.from(new Set(cart.map((item) => item.productId).filter(Boolean)));
    const products = await prisma.product.findMany({
      where: { id: { in: productIds }, deletedAt: null }
    });
    const productMap = new Map(products.map((p) => [p.id, p]));
    const storefrontSettings = await getStorefrontSettings();

    // Validate every cart item exists and calculate server-side prices
    const resolvedCart = [];
    const stockErrors = [];
    for (const item of cart) {
      const product = productMap.get(item.productId);
      if (!product) {
        return res.status(400).json({ error: `Produkt "${String(item.productName || item.productId).slice(0, 60)}" nie istnieje.` });
      }
      if (product.status === 'discontinued' || product.isArchived) {
        return res.status(400).json({ error: `Produkt "${product.name}" jest niedostepny.` });
      }
      const quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));

      // Sprawdz dostepnosc konkretnego rozmiaru
      if (item.size && product.sizeStock) {
        try {
          const sizeStock = JSON.parse(product.sizeStock);
          if (typeof sizeStock === 'object' && sizeStock !== null && item.size in sizeStock) {
            const sizeQty = Number(sizeStock[item.size] ?? 0);
            if (sizeQty < quantity) {
              stockErrors.push(`"${product.name}" rozmiar ${item.size} — dostepne: ${sizeQty}, zamowione: ${quantity}`);
            }
          }
        } catch (_) { /* ignoruj blad parsowania */ }
      }

      if (product.stock < quantity) {
        stockErrors.push(`"${product.name}" — dostepne: ${product.stock}, zamowione: ${quantity}`);
      }
      // Use sale price if storefront sale is enabled and product has valid sale price
      const hasSale = storefrontSettings.saleEnabled && Number.isFinite(product.salePrice) && product.salePrice > 0 && product.salePrice < product.price;
      const serverUnitPrice = hasSale ? product.salePrice : product.price;
      resolvedCart.push({
        productId: product.id,
        variantId: item.variantId || null,
        size: item.size || null,
        quantity,
        unitPrice: serverUnitPrice,
        currency: product.currency || 'PLN',
        image: item.image || null,
        productName: product.name
      });
    }

    if (stockErrors.length > 0) {
      return res.status(400).json({ error: `Niewystarczajacy stan magazynowy: ${stockErrors.join('; ')}` });
    }

    const subtotal = resolvedCart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    let discount = 0;
    let appliedCode = null;
    let partnerId = null;

    // --- Atomic promo code validation + increment via transaction ---
    if (promoCode) {
      const promoResult = await prisma.$transaction(async (tx) => {
        const promo = await tx.promoCode.findUnique({ where: { code: promoCode } });
        if (!promo || !promo.active) return null;
        if (promo.expiration && promo.expiration < new Date()) return null;
        if (promo.usageLimit && promo.usageCount >= promo.usageLimit) return null;
        if (promo.minimumCartValue && subtotal < promo.minimumCartValue) return null;

        await tx.promoCode.update({
          where: { code: promo.code },
          data: { usageCount: { increment: 1 } }
        });

        return promo;
      });

      if (promoResult) {
        const rawDiscount = promoResult.type === 'percentage'
          ? subtotal * (promoResult.value / 100)
          : promoResult.value;
        discount = Math.min(Math.max(0, rawDiscount), subtotal);
        appliedCode = promoResult.code;
        partnerId = promoResult.partnerId;
      }
    }

    const shipping = 15;
    const total = Math.max(0, subtotal - discount + shipping);
    const orderNumber = `TG-${new Date().getFullYear()}-${crypto.randomInt(100000, 999999)}`;
    const packageMetrics = estimatePackageMetrics(resolvedCart, products);

    // --- Atomic order creation + stock decrement (per rozmiar i ogolnie) ---
    const order = await prisma.$transaction(async (tx) => {
      // Decrement stock for each product (total + per-size)
      for (const item of resolvedCart) {
        // 1. Sprawdz i obniz ogolny stock
        const updated = await tx.product.updateMany({
          where: { id: item.productId, stock: { gte: item.quantity } },
          data: { stock: { decrement: item.quantity } }
        });
        if (updated.count === 0) {
          throw new Error(`Produkt "${item.productName}" - brak wystarczajacego stanu magazynowego.`);
        }

        // 2. Obniz sizeStock dla konkretnego rozmiaru (jesli istnieje)
        if (item.size) {
          const product = await tx.product.findUnique({ where: { id: item.productId } });
          if (product?.sizeStock) {
            try {
              const sizeStock = JSON.parse(product.sizeStock);
              if (typeof sizeStock === 'object' && sizeStock !== null && item.size in sizeStock) {
                sizeStock[item.size] = Math.max(0, (Number(sizeStock[item.size]) || 0) - item.quantity);
                await tx.product.update({
                  where: { id: item.productId },
                  data: { sizeStock: JSON.stringify(sizeStock) }
                });
              }
            } catch (_) { /* ignoruj blad parsowania */ }
          }
        }
      }

      return tx.order.create({
        data: {
          orderNumber,
          email: normalizedCustomer.values.email,
          phone: normalizedCustomer.values.phone,
          checkoutMode: normalizedCustomer.checkoutMode,
          firstName: normalizedCustomer.values.firstName,
          lastName: normalizedCustomer.values.lastName,
          country: normalizedCustomer.values.country,
          city: normalizedCustomer.values.city,
          postalCode: normalizedCustomer.values.postalCode,
          street: normalizedCustomer.values.street,
          houseNumber: normalizedCustomer.values.houseNumber,
          companyName: normalizedCustomer.values.companyName,
          nip: normalizedCustomer.values.nip,
          subtotal,
          discount,
          shipping,
          total,
          goodsValue: subtotal,
          appliedCode,
          partnerId,
          courierCompany: 'inpost',
          packageWeight: packageMetrics.packageWeight,
          packageLength: packageMetrics.packageLength,
          packageWidth: packageMetrics.packageWidth,
          packageHeight: packageMetrics.packageHeight,
          orderNotes: String(customer?.orderNotes || '').trim() || null,
          deliveryMethod: delivery?.method || 'inpost_courier',
          inpostPointId: delivery?.point?.id || null,
          inpostPointName: delivery?.point?.name || null,
          inpostPointAddress: delivery?.point?.address || null,
          inpostPointCity: delivery?.point?.city || null,
          inpostPointPostalCode: delivery?.point?.postalCode || null,
          items: {
            create: resolvedCart.map((item) => ({
              productId: item.productId,
              variantId: item.variantId,
              size: item.size,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              currency: item.currency,
              image: item.image,
              productName: item.productName
            }))
          }
        }
      });
    });

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_mock') {
      return res.json({
        clientSecret: 'mock_secret_client',
        orderId: order.id,
        trackingToken: order.trackingToken,
        mockUrl: `${apiOrigin(req)}/api/mock-stripe/${order.id}`
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency: 'pln',
      automatic_payment_methods: { enabled: true },
      metadata: { orderId: order.id }
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripePaymentIntentId: paymentIntent.id }
    });

    return res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id,
      trackingToken: order.trackingToken
    });
  } catch (error) {
    console.error('Create PaymentIntent error:', error);
    return res.status(500).json({ error: `Failed: ${error.message}` });
  }
});

app.get('/api/order/:trackingToken', async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { trackingToken: req.params.trackingToken },
      include: { items: true }
    });

    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.json(serializeOrder(order));
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/mock-stripe/:orderId', async (req, res) => {
  if (IS_PRODUCTION) return res.status(404).send('Not available in production');
  const order = await prisma.order.findUnique({ where: { id: req.params.orderId } });
  if (!order) return res.status(404).send('Order not found');

  return res.send(`
    <html>
      <head>
        <title>Mock Stripe Checkout - TatraGrail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body { font-family: Arial, sans-serif; background: #0a0a0a; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; color: white; }
          .card { background: #111; padding: 40px; border: 1px solid #333; max-width: 420px; width: 100%; text-align: center; }
          button { width: 100%; margin-top: 24px; padding: 16px; cursor: pointer; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Stripe Test Payment</h2>
          <p>Zamowienie: <strong>${order.orderNumber}</strong></p>
          <p>${order.total.toFixed(2)} PLN</p>
          <form method="POST" action="/api/mock-stripe/${order.id}/pay">
            <button type="submit">ZAPLAC (MOCK)</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post('/api/mock-stripe/:orderId/pay', async (req, res) => {
  if (IS_PRODUCTION) return res.status(404).send('Not available in production');
  const order = await prisma.order.findUnique({
    where: { id: req.params.orderId },
    include: { items: true }
  });

  if (!order) return res.status(404).send('Order not found');

  await prisma.order.update({
    where: { id: order.id },
    data: {
      paymentStatus: 'paid',
      paymentProvider: 'mock_stripe'
    }
  });

  try {
    const shipmentData = await createInPostShipment(order);
    await prisma.order.update({
      where: { id: order.id },
      data: {
        shipmentId: shipmentData.shipmentId,
        trackingNumber: shipmentData.trackingNumber,
        shipmentStatus: shipmentData.status
      }
    });
    order.trackingNumber = shipmentData.trackingNumber;
  } catch (error) {
    console.error('Mock shipment error:', error);
  }

  await sendOrderConfirmationEmail(order);
  return res.redirect(`${frontendOrigin()}/tracking/${order.trackingToken}?success=true`);
});

app.get('/api/products/storefront', async (req, res) => {
  const storefrontSettings = await getStorefrontSettings();
  const products = await prisma.product.findMany({
    where: {
      deletedAt: null,
      isArchived: false
    },
    include: { images: true },
    orderBy: [{ category: 'asc' }, { createdAt: 'asc' }]
  });

  return res.json({
    categories: buildStorefrontCategories(req, products, storefrontSettings),
    storefrontSettings
  });
});

app.get('/api/products/:identifier', async (req, res) => {
  const { identifier } = req.params;
  const storefrontSettings = await getStorefrontSettings();
  const product = await prisma.product.findFirst({
    where: {
      deletedAt: null,
      OR: [
        { id: identifier },
        { externalId: identifier },
        { slug: identifier },
        { sku: identifier }
      ]
    },
    include: { images: true }
  });

  if (!product) return res.status(404).json({ error: 'Product not found' });
  return res.json({ product: serializeProduct(req, product, { storefrontSettings }), storefrontSettings });
});

app.get('/api/pages/by-path', async (req, res) => {
  const incomingPath = String(req.query.path || '/').trim();
  const slug = normalizeSlug(incomingPath.replace(/^\//, ''));
  if (!slug) return res.status(404).json({ error: 'Page not found' });

  const page = await prisma.cmsPage.findFirst({
    where: {
      slug,
      isArchived: false,
      key: { not: STOREFRONT_SETTINGS_KEY }
    }
  });

  if (!page) return res.status(404).json({ error: 'Page not found' });
  return res.json({ page: serializePage(page) });
});

app.get('/api/pages/key/:key', async (req, res) => {
  const page = await prisma.cmsPage.findUnique({ where: { key: req.params.key } });
  if (!page) return res.status(404).json({ error: 'Page not found' });
  return res.json({ page: serializePage(page) });
});

const serveBuiltFrontend = async (req, res, next) => {
  try {
    await fsPromises.access(distIndexFile);
    return res.sendFile(distIndexFile);
  } catch (error) {
    return next();
  }
};

app.post('/api/contact-submissions', async (req, res) => {
  const { name, email, phone, message, website, formStartedAt } = req.body || {};

  if (website) return res.status(400).json({ error: 'Spam detected.' });
  if (!name || !email || !message) return res.status(400).json({ error: 'Wszystkie wymagane pola musza byc uzupelnione.' });
  if (Date.now() - Number(formStartedAt || 0) < MIN_FORM_SUBMISSION_MS) {
    return res.status(400).json({ error: 'Formularz zostal wyslany zbyt szybko.' });
  }

  const submission = await prisma.contactSubmission.create({
    data: {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone || '').trim() || null,
      message: String(message).trim()
    }
  });

  // Powiadomienie dla admina
  await resend.emails.send({
    from: 'TatraGrail <no-reply@tatragrail.pl>',
    to: 'kontakt@tatragrail.pl',
    subject: `Nowa wiadomość od ${escapeHtml(submission.name)}`,
    html: `
      <h2>Nowe zgłoszenie z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${escapeHtml(submission.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></p>
      ${submission.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(submission.phone)}</p>` : ''}
      <p><strong>Wiadomość:</strong></p>
      <blockquote style="border-left:3px solid #ccc;margin:0;padding:0 1em;color:#555">${escapeHtml(submission.message).replace(/\n/g, '<br/>')}</blockquote>
    `
  }).catch((err) => console.error('[resend] contact notification failed:', err));

  return res.json({ success: true });
});

app.post('/api/return-requests', async (req, res) => {
  const { orderNumber, fullName, email, reason, details, website, formStartedAt } = req.body || {};

  if (website) return res.status(400).json({ error: 'Spam detected.' });
  if (!orderNumber || !fullName || !email || !reason) {
    return res.status(400).json({ error: 'Uzupelnij wymagane pola formularza zwrotu.' });
  }
  if (Date.now() - Number(formStartedAt || 0) < MIN_FORM_SUBMISSION_MS) {
    return res.status(400).json({ error: 'Formularz zostal wyslany zbyt szybko.' });
  }

  await prisma.returnRequest.create({
    data: {
      orderNumber: String(orderNumber).trim(),
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      reason: String(reason).trim(),
      details: String(details || '').trim() || null
    }
  });

  return res.json({ success: true });
});

app.post('/api/admin/login', loginLimiter, async (req, res) => {
  const configuredUsername = await getAdminUsername();
  const providedUsername = String(req.body?.username || '').trim() || configuredUsername;
  const password = String(req.body?.password || '');

  // #region debug-point E:admin-login
  reportDebugServerEvent('E', 'admin login attempt', { username: providedUsername, hasPassword: Boolean(password) });
  // #endregion

  if (providedUsername !== configuredUsername || !(await verifyAdminPassword(password))) {
    // #region debug-point E:admin-login-fail
    reportDebugServerEvent('E', 'admin login rejected', { username: providedUsername });
    // #endregion
    return res.status(401).json({ error: 'Nieprawidlowe haslo administratora.' });
  }

  // #region debug-point E:admin-login-success
  reportDebugServerEvent('E', 'admin login success', { username: configuredUsername });
  // #endregion
  return res.json({
    token: createAdminToken(configuredUsername),
    user: { username: configuredUsername }
  });
});

app.get('/api/admin/session', requireAdmin, (req, res) => {
  // #region debug-point E:admin-session
  reportDebugServerEvent('E', 'admin session success', { username: req.adminUser.username });
  // #endregion
  return res.json({
    user: {
      username: req.adminUser.username
    }
  });
});

app.post('/api/admin/password', requireAdmin, async (req, res) => {
  const validation = validatePasswordChangePayload(req.body || {});
  if (!validation.valid) {
    reportAdminMonitorEvent('password change validation failed', {
      username: req.adminUser.username,
      errorKeys: Object.keys(validation.errors)
    });
    return res.status(400).json({ errors: validation.errors });
  }

  const currentPassword = String(req.body?.currentPassword || '');
  const newPassword = String(req.body?.newPassword || '');

  try {
    const passwordMatches = await verifyAdminPassword(currentPassword);
    if (!passwordMatches) {
      reportAdminMonitorEvent('password change rejected', {
        username: req.adminUser.username,
        reason: 'invalid_current_password'
      });
      return res.status(400).json({
        errors: {
          currentPassword: 'Aktualne haslo jest nieprawidlowe.'
        }
      });
    }

    await writeAdminAuthStore({
      username: req.adminUser.username || ADMIN_DEFAULT_USERNAME,
      passwordHash: hashPassword(newPassword),
      updatedAt: new Date().toISOString()
    });

    reportDebugServerEvent('E', 'admin password changed', { username: req.adminUser.username });
    return res.json({ success: true });
  } catch (error) {
    reportAdminMonitorEvent('password change failed', {
      username: req.adminUser.username,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie zmienic hasla administratora.' });
  }
});

app.get('/api/admin/dashboard', requireAdmin, async (req, res) => {
  const [products, pages, contacts, returns, orders] = await Promise.all([
    prisma.product.count({ where: { deletedAt: null } }),
    prisma.cmsPage.count(),
    prisma.contactSubmission.count(),
    prisma.returnRequest.count(),
    prisma.order.count()
  ]);

  return res.json({ products, pages, contacts, returns, orders });
});

app.get('/api/admin/orders', requireAdmin, async (req, res) => {
  const filters = sanitizeOrderQuery(req.query || {});
  const where = buildOrderWhereClause(filters);

  try {
    const [total, orders] = await Promise.all([
      prisma.order.count({ where }),
      prisma.order.findMany({
        where,
        include: { items: true },
        orderBy: buildOrderSortClause(filters),
        skip: (filters.page - 1) * filters.pageSize,
        take: filters.pageSize
      })
    ]);

    const totalPages = Math.max(1, Math.ceil(total / filters.pageSize));

    return res.json({
      orders: orders.map(serializeOrderListItem),
      meta: {
        total,
        totalPages,
        page: filters.page,
        pageSize: filters.pageSize,
        sortBy: filters.sortBy,
        sortDirection: filters.sortDirection
      }
    });
  } catch (error) {
    reportAdminMonitorEvent('orders list failed', {
      username: req.adminUser.username,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie pobrac listy zamowien.' });
  }
});

app.get('/api/admin/orders/export', requireAdmin, async (req, res) => {
  const filters = sanitizeOrderQuery(req.query || {});
  const where = buildOrderWhereClause(filters);

  try {
    const orders = await prisma.order.findMany({
      where,
      include: { items: true },
      orderBy: buildOrderSortClause(filters),
      take: 1000
    });

    const csv = buildOrdersCsv(orders);
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="orders-${new Date().toISOString().slice(0, 10)}.csv"`);
    return res.send(csv);
  } catch (error) {
    reportAdminMonitorEvent('orders export failed', {
      username: req.adminUser.username,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie wyeksportowac zamowien.' });
  }
});

app.get('/api/admin/orders/:id', requireAdmin, async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: { items: true }
    });

    if (!order) {
      return res.status(404).json({ error: 'Nie znaleziono zamowienia.' });
    }

    return res.json({ order: serializeOrder(order) });
  } catch (error) {
    reportAdminMonitorEvent('order details failed', {
      username: req.adminUser.username,
      orderId: req.params.id,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie pobrac szczegolow zamowienia.' });
  }
});

app.patch('/api/admin/orders/:id', requireAdmin, async (req, res) => {
  const validation = validateAdminOrderUpdatePayload(req.body || {});
  if (!validation.valid) {
    reportAdminMonitorEvent('order update validation failed', {
      username: req.adminUser.username,
      orderId: req.params.id,
      errorKeys: Object.keys(validation.errors)
    });
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const updated = await prisma.order.update({
      where: { id: req.params.id },
      data: buildAdminOrderUpdateInput(req.body || {}),
      include: { items: true }
    });

    return res.json({ order: serializeOrder(updated) });
  } catch (error) {
    reportAdminMonitorEvent('order update failed', {
      username: req.adminUser.username,
      orderId: req.params.id,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie zapisac zamowienia.' });
  }
});

app.get('/api/admin/products', requireAdmin, async (req, res) => {
  const {
    search = '',
    category = '',
    minPrice = '',
    maxPrice = '',
    stock = '',
    status = '',
    archived = ''
  } = req.query;

  const where = {
    deletedAt: null,
    ...(category ? { category: String(category) } : {}),
    ...(status ? { status: String(status) } : {}),
    ...(archived ? { isArchived: archived === 'true' } : {}),
    ...(search
      ? {
          OR: [
            { name: { contains: String(search) } },
            { nameEn: { contains: String(search) } },
            { sku: { contains: String(search) } }
          ]
        }
      : {}),
    ...(minPrice || maxPrice
      ? {
          price: {
            ...(minPrice ? { gte: Number(minPrice) } : {}),
            ...(maxPrice ? { lte: Number(maxPrice) } : {})
          }
        }
      : {}),
    ...(stock === 'in'
      ? { stock: { gt: 0 } }
      : stock === 'out'
        ? { stock: { lte: 0 } }
        : {})
  };

  const products = await prisma.product.findMany({
    where,
    include: { images: true },
    orderBy: { updatedAt: 'desc' }
  });

  return res.json({
    products: products.map((product) => serializeProduct(req, product))
  });
});

app.post('/api/admin/products', requireAdmin, async (req, res) => {
  // #region debug-point E:product-create-start
  reportDebugServerEvent('E', 'product create start', { username: req.adminUser.username, sku: req.body?.sku || null, slug: req.body?.slug || null });
  // #endregion
  const validation = validateProductPayload(req.body || {});
  if (!validation.valid) {
    // #region debug-point E:product-create-validation
    reportDebugServerEvent('E', 'product create validation failed', { errors: validation.errors });
    // #endregion
    reportAdminMonitorEvent('product create validation failed', {
      username: req.adminUser.username,
      errorKeys: Object.keys(validation.errors)
    });
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const product = await saveProductWithHistory({
      body: req.body,
      author: req.adminUser.username
    });

    // #region debug-point E:product-create-success
    reportDebugServerEvent('E', 'product create success', { productId: product.id, sku: product.sku });
    // #endregion
    return res.status(201).json({ product: serializeProduct(req, product) });
  } catch (error) {
    const uniqueMessage = ensureUniqueConstraintMessage(error);
    if (uniqueMessage) {
      // #region debug-point E:product-create-conflict
      reportDebugServerEvent('E', 'product create conflict', { message: uniqueMessage });
      // #endregion
      reportAdminMonitorEvent('product create conflict', {
        username: req.adminUser.username,
        message: uniqueMessage
      });
      return res.status(409).json({ error: uniqueMessage });
    }
    // #region debug-point E:product-create-error
    reportDebugServerEvent('E', 'product create error', { message: error?.message || 'unknown' });
    // #endregion
    reportAdminMonitorEvent('product create failed', {
      username: req.adminUser.username,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie zapisac produktu.' });
  }
});

app.put('/api/admin/products/:id', requireAdmin, async (req, res) => {
  // #region debug-point E:product-update-start
  reportDebugServerEvent('E', 'product update start', { username: req.adminUser.username, productId: req.params.id, sku: req.body?.sku || null, slug: req.body?.slug || null });
  // #endregion
  const validation = validateProductPayload(req.body || {});
  if (!validation.valid) {
    // #region debug-point E:product-update-validation
    reportDebugServerEvent('E', 'product update validation failed', { productId: req.params.id, errors: validation.errors });
    // #endregion
    reportAdminMonitorEvent('product update validation failed', {
      username: req.adminUser.username,
      productId: req.params.id,
      errorKeys: Object.keys(validation.errors)
    });
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const product = await saveProductWithHistory({
      body: req.body,
      productId: req.params.id,
      author: req.adminUser.username
    });

    // #region debug-point E:product-update-success
    reportDebugServerEvent('E', 'product update success', { productId: product.id, sku: product.sku });
    // #endregion
    return res.json({ product: serializeProduct(req, product) });
  } catch (error) {
    const uniqueMessage = ensureUniqueConstraintMessage(error);
    if (uniqueMessage) {
      // #region debug-point E:product-update-conflict
      reportDebugServerEvent('E', 'product update conflict', { productId: req.params.id, message: uniqueMessage });
      // #endregion
      reportAdminMonitorEvent('product update conflict', {
        username: req.adminUser.username,
        productId: req.params.id,
        message: uniqueMessage
      });
      return res.status(409).json({ error: uniqueMessage });
    }
    // #region debug-point E:product-update-error
    reportDebugServerEvent('E', 'product update error', { productId: req.params.id, message: error?.message || 'unknown' });
    // #endregion
    reportAdminMonitorEvent('product update failed', {
      username: req.adminUser.username,
      productId: req.params.id,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie zaktualizowac produktu.' });
  }
});

app.patch('/api/admin/products/:id/stock', requireAdmin, async (req, res) => {
  const { sizeStock } = req.body || {};
  if (!sizeStock || typeof sizeStock !== 'object') {
    return res.status(400).json({ error: 'Pole sizeStock jest wymagane i musi byc obiektem.' });
  }

  // Ensure all values are non-negative integers
  const sanitized = {};
  for (const [size, qty] of Object.entries(sizeStock)) {
    const num = parseInt(qty, 10);
    if (!Number.isFinite(num) || num < 0) {
      return res.status(400).json({ error: `Nieprawidlowa ilosc dla rozmiaru ${size}.` });
    }
    sanitized[size] = num;
  }

  const totalStock = Object.values(sanitized).reduce((s, v) => s + v, 0);

  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: {
      sizeStock: stringifyJson(sanitized),
      stock: totalStock
    },
    include: { images: true }
  });

  return res.json({ product: serializeProduct(req, product) });
});

app.post('/api/admin/products/:id/clone', requireAdmin, async (req, res) => {
  try {
    const cloned = await cloneProduct({
      productId: req.params.id,
      author: req.adminUser.username
    });

    if (!cloned) {
      return res.status(404).json({ error: 'Nie znaleziono produktu do sklonowania.' });
    }

    return res.status(201).json({ product: serializeProduct(req, cloned) });
  } catch (error) {
    const uniqueMessage = ensureUniqueConstraintMessage(error);
    if (uniqueMessage) return res.status(409).json({ error: uniqueMessage });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie sklonowac produktu.' });
  }
});

app.post('/api/admin/products/:id/archive', requireAdmin, async (req, res) => {
  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: { isArchived: true, status: 'discontinued' },
    include: { images: true }
  });

  await writeProductHistory({
    productId: product.id,
    author: req.adminUser.username,
    action: 'archived',
    snapshot: product
  });

  return res.json({ product: serializeProduct(req, product) });
});

app.post('/api/admin/products/:id/restore', requireAdmin, async (req, res) => {
  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: { isArchived: false, status: 'available' },
    include: { images: true }
  });

  await writeProductHistory({
    productId: product.id,
    author: req.adminUser.username,
    action: 'restored',
    snapshot: product
  });

  return res.json({ product: serializeProduct(req, product) });
});

app.delete('/api/admin/products/:id', requireAdmin, async (req, res) => {
  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: { deletedAt: new Date(), isArchived: true, status: 'discontinued' },
    include: { images: true }
  });

  await writeProductHistory({
    productId: product.id,
    author: req.adminUser.username,
    action: 'deleted',
    snapshot: product
  });

  return res.json({ success: true });
});

app.get('/api/admin/products/:id/history', requireAdmin, async (req, res) => {
  const history = await prisma.productHistory.findMany({
    where: { productId: req.params.id },
    orderBy: { createdAt: 'desc' }
  });

  return res.json({
    history: history.map((entry) => ({
      id: entry.id,
      author: entry.author,
      action: entry.action,
      createdAt: entry.createdAt,
      snapshot: parseJsonObject(entry.snapshot)
    }))
  });
});

app.post('/api/admin/upload', requireAdmin, upload.array('files', 10), async (req, res) => {
  const files = Array.isArray(req.files) ? req.files : [];
  return res.json({
    files: files.map((file, index) => ({
      url: `/uploads/${file.filename}`,
      alt: file.originalname,
      position: index,
      isThumbnail: index === 0
    }))
  });
});

app.get('/api/admin/db/download', requireAdmin, (req, res) => {
  const dbUrl = process.env.DATABASE_URL || `file:${path.join(projectRoot, 'prisma', 'dev.db')}`;
  const relativeDbPath = dbUrl.replace(/^file:/, '');
  const absoluteDbPath = path.resolve(projectRoot, 'prisma', relativeDbPath);
  res.download(absoluteDbPath, 'dev.db');
});

app.post('/api/admin/db/upload', requireAdmin, upload.single('dbfile'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Brak pliku' });
  const dbUrl = process.env.DATABASE_URL || `file:${path.join(projectRoot, 'prisma', 'dev.db')}`;
  const relativeDbPath = dbUrl.replace(/^file:/, '');
  const absoluteDbPath = path.resolve(projectRoot, 'prisma', relativeDbPath);
  
  try {
    await fsPromises.copyFile(req.file.path, absoluteDbPath);
    res.json({ success: true, message: 'Baza danych wgrana pomyślnie. Serwer uruchomi się ponownie za chwilę...' });
    setTimeout(() => {
      process.exit(0); // Force restart to reconnect Prisma
    }, 1500);
  } catch (error) {
    console.error('Błąd wgrywania bazy:', error);
    res.status(500).json({ error: 'Nie udało się wgrać bazy danych' });
  }
});

app.get('/api/admin/pages', requireAdmin, async (req, res) => {
  const pages = await prisma.cmsPage.findMany({ orderBy: { key: 'asc' } });
  return res.json({ pages: pages.map(serializePage) });
});

app.put('/api/admin/pages/:id', requireAdmin, async (req, res) => {
  // #region debug-point E:page-update-start
  reportDebugServerEvent('E', 'page update start', { username: req.adminUser.username, pageId: req.params.id, slug: req.body?.slug || null });
  // #endregion
  const validation = validatePagePayload(req.body || {});
  if (!validation.valid) {
    // #region debug-point E:page-update-validation
    reportDebugServerEvent('E', 'page update validation failed', { pageId: req.params.id, errors: validation.errors });
    // #endregion
    reportAdminMonitorEvent('page update validation failed', {
      username: req.adminUser.username,
      pageId: req.params.id,
      errorKeys: Object.keys(validation.errors)
    });
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const existing = await prisma.cmsPage.findUnique({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: 'Nie znaleziono strony.' });

    const input = buildPageInput(req.body);
    const nextVersion = existing.currentVersion + 1;
    const updated = await prisma.cmsPage.update({
      where: { id: req.params.id },
      data: {
        ...input,
        currentVersion: nextVersion
      }
    });

    await prisma.cmsPageVersion.create({
      data: {
        pageId: updated.id,
        version: nextVersion,
        title: updated.title,
        slug: updated.slug,
        seoTitle: updated.seoTitle,
        metaDescription: updated.metaDescription,
        bodyHtml: updated.bodyHtml,
        customData: updated.customData,
        author: req.adminUser.username
      }
    });

    // #region debug-point E:page-update-success
    reportDebugServerEvent('E', 'page update success', { pageId: updated.id, slug: updated.slug, version: updated.currentVersion });
    // #endregion
    return res.json({ page: serializePage(updated) });
  } catch (error) {
    const uniqueMessage = ensureUniqueConstraintMessage(error);
    if (uniqueMessage) {
      // #region debug-point E:page-update-conflict
      reportDebugServerEvent('E', 'page update conflict', { pageId: req.params.id, message: uniqueMessage });
      // #endregion
      reportAdminMonitorEvent('page update conflict', {
        username: req.adminUser.username,
        pageId: req.params.id,
        message: uniqueMessage
      });
      return res.status(409).json({ error: uniqueMessage });
    }
    // #region debug-point E:page-update-error
    reportDebugServerEvent('E', 'page update error', { pageId: req.params.id, message: error?.message || 'unknown' });
    // #endregion
    reportAdminMonitorEvent('page update failed', {
      username: req.adminUser.username,
      pageId: req.params.id,
      message: error?.message || 'unknown'
    });
    console.error(error);
    return res.status(500).json({ error: 'Nie udalo sie zapisac strony.' });
  }
});

app.get('/api/admin/pages/:id/versions', requireAdmin, async (req, res) => {
  const versions = await prisma.cmsPageVersion.findMany({
    where: { pageId: req.params.id },
    orderBy: { version: 'desc' }
  });

  return res.json({
    versions: versions.map((entry) => ({
      id: entry.id,
      version: entry.version,
      title: entry.title,
      slug: entry.slug,
      seoTitle: entry.seoTitle,
      metaDescription: entry.metaDescription,
      bodyHtml: entry.bodyHtml,
      customData: parseJsonObject(entry.customData),
      author: entry.author,
      createdAt: entry.createdAt
    }))
  });
});

app.get('/api/admin/submissions', requireAdmin, async (req, res) => {
  const [contacts, returns] = await Promise.all([
    prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
    prisma.returnRequest.findMany({ orderBy: { createdAt: 'desc' }, take: 50 })
  ]);

  return res.json({ contacts, returns });
});

app.use(express.static(distDir));
app.get(/^\/(?!api\/).*/, serveBuiltFrontend);

const serverReady = (async () => {
  await ensureCmsSeedData();
  await ensureCmsPages();
  return app;
})();

export { app, prisma, serverReady };

if (process.env.NODE_ENV !== 'test') {
  await serverReady;
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
