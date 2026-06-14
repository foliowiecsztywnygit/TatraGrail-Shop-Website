export const tshirtFront = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240' fill='none' stroke='%23333' stroke-width='1.5'%3E%3Cpath d='M 60 20 Q 100 40 140 20 L 190 35 L 180 95 L 150 85 L 150 220 L 50 220 L 50 85 L 20 95 L 10 35 Z' fill='%23050505'/%3E%3C/svg%3E";
export const tshirtBack = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240' fill='none' stroke='%23333' stroke-width='1.5'%3E%3Cpath d='M 60 20 Q 100 20 140 20 L 190 35 L 180 95 L 150 85 L 150 220 L 50 220 L 50 85 L 20 95 L 10 35 Z' fill='%23050505'/%3E%3Ctext x='100' y='130' font-family='sans-serif' font-size='12' fill='%23333' text-anchor='middle' font-weight='bold' letter-spacing='0.2em'%3EBACK%3C/text%3E%3C/svg%3E";

const defaultDetailsPl = [
  'Lekko oversize fit',
  'Druk DTF',
  'Wzmocnione szycie'
];

const defaultDetailsEn = [
  'Relaxed oversized fit',
  'DTF print',
  'Reinforced seams'
];

const defaultDescriptionPl = 'Limitowany produkt TatraGrail zaprojektowany z mysla o codziennym noszeniu i wyrazistym charakterze.';
const defaultDescriptionEn = 'Limited TatraGrail product designed for everyday wear with a strong visual identity.';

const defaultMaterialPl = '100% bawelna 280 GSM. Prac w 30 stopniach po lewej stronie. Nie prasowac nadruku.';
const defaultMaterialEn = '100% cotton 280 GSM. Wash at 30C inside out. Do not iron the print.';

const createProduct = ({
  id,
  sku,
  slug,
  category,
  categoryLabelPl,
  categoryLabelEn,
  namePl,
  nameEn,
  price,
  salePrice = null,
  colors,
  sizes,
  featured = false,
  dropFeatured = false
}) => ({
  id,
  sku,
  slug,
  category,
  categoryLabelPl,
  categoryLabelEn,
  namePl,
  nameEn,
  shortDescriptionPl: defaultDescriptionPl,
  shortDescriptionEn: defaultDescriptionEn,
  descriptionPl: `${defaultDescriptionPl} Produkt sprawdza sie w miejskich i outdoorowych stylizacjach.`,
  descriptionEn: `${defaultDescriptionEn} It works equally well in urban and outdoor inspired looks.`,
  materialPl: defaultMaterialPl,
  materialEn: defaultMaterialEn,
  detailsPl: defaultDetailsPl,
  detailsEn: defaultDetailsEn,
  price,
  salePrice,
  currency: 'PLN',
  vatRate: 23,
  stock: 20,
  weight: 0.3,
  width: 30,
  height: 4,
  depth: 24,
  colors,
  sizes,
  status: 'available',
  featured,
  dropFeatured,
  images: [
    { url: tshirtFront, alt: `${namePl} front`, isThumbnail: true, position: 0 },
    { url: tshirtBack, alt: `${namePl} back`, isThumbnail: false, position: 1 }
  ]
});

export const defaultProductSeeds = [
  createProduct({
    id: 'drop-01-tee-1',
    sku: 'TG-DROP01-TEE-01',
    slug: 'tatragrail-tee-01',
    category: 'drop01',
    categoryLabelPl: 'DROP 01',
    categoryLabelEn: 'DROP 01',
    namePl: 'TatraGrail TEE 01',
    nameEn: 'TatraGrail TEE 01',
    price: 199,
    colors: ['#000000', '#FFFFFF'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    dropFeatured: true
  }),
  createProduct({
    id: 'drop-01-tee-2',
    sku: 'TG-DROP01-TEE-02',
    slug: 'tatragrail-tee-02',
    category: 'drop01',
    categoryLabelPl: 'DROP 01',
    categoryLabelEn: 'DROP 01',
    namePl: 'TatraGrail TEE 02',
    nameEn: 'TatraGrail TEE 02',
    price: 199,
    salePrice: 179,
    colors: ['#0F0F0F', '#FFFFFF'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    dropFeatured: true
  }),
  createProduct({
    id: 'drop-01-tee-3',
    sku: 'TG-DROP01-TEE-03',
    slug: 'tatragrail-tee-03',
    category: 'drop01',
    categoryLabelPl: 'DROP 01',
    categoryLabelEn: 'DROP 01',
    namePl: 'TatraGrail TEE 03',
    nameEn: 'TatraGrail TEE 03',
    price: 199,
    colors: ['#1A1A1A', '#4A4A4A'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    dropFeatured: true
  }),
  createProduct({
    id: '1',
    sku: 'TG-ORG-TEE-01',
    slug: 'koszulka-tatragrail-original',
    category: 'originals',
    categoryLabelPl: 'KOLEKCJA TATRAGRAIL',
    categoryLabelEn: 'TATRAGRAIL COLLECTION',
    namePl: 'Koszulka TATRAGRAIL ORIGINAL',
    nameEn: 'TATRAGRAIL ORIGINAL Tee',
    price: 90,
    colors: ['#000000', '#FFFFFF'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  })
];

export const defaultCmsPages = [
  {
    key: 'shipping-returns',
    slug: 'shipping-returns',
    title: 'Wysylka i zwroty',
    seoTitle: 'Wysylka i zwroty | TatraGrail',
    metaDescription: 'Informacje o dostawie, zwrotach i reklamacjach w sklepie TatraGrail.',
    bodyHtml: `
      <h2>Metody dostawy</h2>
      <p>Wysylamy zamowienia na terenie Polski i Unii Europejskiej. Wszystkie przesylki sa monitorowane.</p>
      <h2>Zwroty i reklamacje</h2>
      <p>Na zwrot masz 30 dni. Reklamacje obslugujemy w trybie indywidualnym, z aktualizacja statusu sprawy na adres e-mail klienta.</p>
    `.trim(),
    customData: {
      shippingMethods: [
        { name: 'Kurier InPost', price: '15.00', eta: '1-2 dni robocze' },
        { name: 'Paczkomat InPost', price: '13.00', eta: '1-2 dni robocze' },
        { name: 'Dostawa UE', price: '39.00', eta: '3-5 dni roboczych' }
      ],
      returnWindowDays: 30,
      returnEmail: 'returns@tatragrail.com',
      returnInstructions: 'Wypelnij formularz zwrotu, podaj numer zamowienia i opisz powod. Otrzymasz dalsze instrukcje na e-mail.',
      complaintsInstructions: 'W reklamacji opisz problem i dolacz zdjecia produktu, jesli to mozliwe.'
    }
  },
  {
    key: 'terms',
    slug: 'terms',
    title: 'Regulamin',
    seoTitle: 'Regulamin sklepu | TatraGrail',
    metaDescription: 'Aktualny regulamin sklepu internetowego TatraGrail.',
    bodyHtml: `
      <h2>Postanowienia ogolne</h2>
      <p>Niniejszy regulamin okresla zasady korzystania ze sklepu internetowego TatraGrail.</p>
      <h2>Zamowienia i platnosci</h2>
      <p>Zamowienia mozna skladac przez 24 godziny na dobe. Ceny prezentowane sa w PLN i zawieraja podatek VAT.</p>
    `.trim(),
    customData: {
      updates: [
        { label: 'Wersja poczatkowa', publishedAt: '2026-06-13' }
      ]
    }
  },
  {
    key: 'privacy-policy',
    slug: 'privacy-policy',
    title: 'Polityka prywatnosci',
    seoTitle: 'Polityka prywatnosci | TatraGrail',
    metaDescription: 'Informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
    bodyHtml: `
      <h2>Administrator danych</h2>
      <p>Administratorem danych jest TatraGrail. Dane przetwarzamy w celu realizacji zamowien, obslugi kontaktu i roszczen.</p>
      <h2>Prawa uzytkownika</h2>
      <p>Masz prawo do dostepu, sprostowania, usuniecia i ograniczenia przetwarzania danych. Mozesz tez wniesc sprzeciw oraz skarge do UODO.</p>
    `.trim(),
    customData: {
      consentLinks: [
        { label: 'Ustawienia cookies', url: '#cookies' },
        { label: 'Zarzadzanie zgodami marketingowymi', url: '#consents' }
      ]
    }
  },
  {
    key: 'contact',
    slug: 'contact',
    title: 'Kontakt',
    seoTitle: 'Kontakt | TatraGrail',
    metaDescription: 'Dane kontaktowe TatraGrail, formularz kontaktowy i godziny pracy.',
    bodyHtml: `
      <h2>Skontaktuj sie z nami</h2>
      <p>Odpowiadamy na zapytania dotyczace zamowien, wspolpracy i obslugi posprzedazowej.</p>
    `.trim(),
    customData: {
      companyName: 'TatraGrail',
      email: 'kontakt@tatragrail.com',
      phone: '+48 600 700 800',
      address: 'ul. Gorska 12, 34-500 Zakopane',
      mapEmbedUrl: 'https://www.google.com/maps?q=Zakopane&output=embed',
      workingHours: [
        { label: 'Pon-Pt', value: '09:00 - 17:00' },
        { label: 'Sobota', value: '10:00 - 14:00' },
        { label: 'Niedziela', value: 'Nieczynne' }
      ]
    }
  },
  {
    key: 'storefront-settings',
    slug: 'storefront-settings',
    title: 'Ustawienia storefrontu',
    seoTitle: 'Ustawienia storefrontu | TatraGrail',
    metaDescription: 'Techniczne ustawienia storefrontu i globalnej wyprzedazy.',
    bodyHtml: '<p>Techniczne ustawienia storefrontu.</p>',
    isArchived: true,
    customData: {
      saleEnabled: false,
      saleAnnouncement: 'WYPRZEDAZ AKTYWNA - CENY PROMOCYJNE NA WYBRANYCH MODELACH',
      saleBadgeLabel: 'WYPRZEDAZ'
    }
  }
];

export const buildLegacyCategories = () => {
  const grouped = new Map();

  defaultProductSeeds.forEach((product) => {
    if (!grouped.has(product.category)) {
      grouped.set(product.category, {
        id: product.category,
        title: {
          pl: product.categoryLabelPl,
          en: product.categoryLabelEn
        },
        products: []
      });
    }

    grouped.get(product.category).products.push({
      id: product.id,
      slug: product.slug,
      sku: product.sku,
      title: {
        pl: product.namePl,
        en: product.nameEn
      },
      price: `${product.price.toFixed(2)} ${product.currency}`,
      priceValue: product.price,
      salePrice: product.salePrice ? `${product.salePrice.toFixed(2)} ${product.currency}` : null,
      salePriceValue: product.salePrice ?? null,
      discountPercent: product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0,
      images: product.images.map((image) => image.url),
      colors: product.colors,
      sizes: product.sizes,
      description: {
        pl: product.descriptionPl,
        en: product.descriptionEn
      },
      details: {
        pl: product.detailsPl,
        en: product.detailsEn
      },
      material: {
        pl: product.materialPl,
        en: product.materialEn
      },
      category: product.category,
      categoryTitle: {
        pl: product.categoryLabelPl,
        en: product.categoryLabelEn
      },
      stock: product.stock,
      status: product.status,
      dropFeatured: product.dropFeatured
    });
  });

  return Array.from(grouped.values());
};

export const defaultLegacyCategories = buildLegacyCategories();
