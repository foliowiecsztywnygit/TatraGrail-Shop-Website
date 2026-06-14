import React, { useEffect, useMemo, useState } from 'react'
import { Archive, Copy, FileClock, Files, Filter, LayoutDashboard, LogOut, Mail, Package2, Plus, RefreshCw, Save, Search, Send, Trash2, Upload } from 'lucide-react'
import RichTextEditor from '../components/RichTextEditor'
import AdminOrdersPanel from '../components/admin/AdminOrdersPanel'
import { apiFetch, apiFormData, apiJson, clearAdminToken, getAdminToken, getApiBaseUrl, setAdminToken } from '../lib/api'

const pageLabels = {
  'shipping-returns': 'Wysylka i zwroty',
  terms: 'Regulamin',
  'privacy-policy': 'Polityka prywatnosci',
  contact: 'Kontakt',
  'storefront-settings': 'Ustawienia sklepu'
}

const productStatuses = [
  { value: 'available', label: 'Dostepny' },
  { value: 'unavailable', label: 'Niedostepny' },
  { value: 'discontinued', label: 'Wycofany' }
]

const createEmptyProduct = () => ({
  id: null,
  name: '',
  nameEn: '',
  sku: '',
  slug: '',
  category: '',
  categoryLabel: '',
  categoryLabelEn: '',
  shortDescription: '',
  shortDescriptionEn: '',
  description: '',
  descriptionEn: '',
  material: '',
  materialEn: '',
  detailsPlText: '',
  detailsEnText: '',
  price: '0',
  salePrice: '',
  currency: 'PLN',
  vatRate: '23',
  stock: '0',
  weight: '',
  width: '',
  height: '',
  depth: '',
  status: 'available',
  featured: false,
  dropFeatured: false,
  seoTitle: '',
  metaDescription: '',
  colorsText: '',
  sizesText: '',
  images: []
})

const mapProductToForm = (product) => ({
  id: product.id,
  name: product.title?.pl || '',
  nameEn: product.title?.en || '',
  sku: product.sku || '',
  slug: product.slug || '',
  category: product.category || '',
  categoryLabel: product.categoryTitle?.pl || '',
  categoryLabelEn: product.categoryTitle?.en || '',
  shortDescription: product.shortDescription?.pl || '',
  shortDescriptionEn: product.shortDescription?.en || '',
  description: product.description?.pl || '',
  descriptionEn: product.description?.en || '',
  material: product.material?.pl || '',
  materialEn: product.material?.en || '',
  detailsPlText: (product.details?.pl || []).join('\n'),
  detailsEnText: (product.details?.en || []).join('\n'),
  price: String(product.priceValue ?? 0),
  salePrice: product.salePriceValue === null || product.salePriceValue === undefined ? '' : String(product.salePriceValue),
  currency: product.currency || 'PLN',
  vatRate: String(product.vatRate ?? 23),
  stock: String(product.stock ?? 0),
  weight: product.weight === null || product.weight === undefined ? '' : String(product.weight),
  width: product.dimensions?.width === null || product.dimensions?.width === undefined ? '' : String(product.dimensions.width),
  height: product.dimensions?.height === null || product.dimensions?.height === undefined ? '' : String(product.dimensions.height),
  depth: product.dimensions?.depth === null || product.dimensions?.depth === undefined ? '' : String(product.dimensions.depth),
  status: product.status || 'available',
  featured: Boolean(product.featured),
  dropFeatured: Boolean(product.dropFeatured),
  seoTitle: product.seoTitle || '',
  metaDescription: product.metaDescription || '',
  colorsText: (product.colors || []).join(', '),
  sizesText: (product.sizes || []).join(', '),
  images: product.imageObjects || []
})

const createPageForm = (page) => ({
  id: page.id,
  key: page.key,
  title: page.title || '',
  slug: page.slug || '',
  seoTitle: page.seoTitle || '',
  metaDescription: page.metaDescription || '',
  bodyHtml: page.bodyHtml || '',
  customData: page.customData || {}
})

const parseList = (text) =>
  String(text || '')
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean)

const orderPaymentStatuses = ['pending', 'paid', 'failed', 'canceled', 'refunded', 'expired']
const orderFulfillmentStatuses = ['processing', 'packed', 'shipped', 'delivered', 'returned', 'canceled']
const orderShipmentStatuses = ['unknown', 'created', 'confirmed', 'sent', 'delivered', 'returned', 'failed']
const orderDeliveryMethods = ['inpost_courier', 'inpost_locker']

const createOrderFilters = () => ({
  search: '',
  paymentStatus: '',
  fulfillmentStatus: '',
  shipmentStatus: '',
  courierCompany: '',
  deliveryMethod: '',
  createdFrom: '',
  createdTo: '',
  sortBy: 'createdAt',
  sortDirection: 'desc',
  pageSize: 20,
  attentionOnly: false
})

const createOrderMeta = () => ({
  total: 0,
  totalPages: 1,
  page: 1,
  pageSize: 20,
  sortBy: 'createdAt',
  sortDirection: 'desc'
})

const mapOrderToForm = (order) => ({
  ...order,
  email: order.email || '',
  phone: order.phone || '',
  firstName: order.firstName || '',
  lastName: order.lastName || '',
  country: order.country || '',
  city: order.city || '',
  postalCode: order.postalCode || '',
  street: order.street || '',
  houseNumber: order.houseNumber || '',
  companyName: order.companyName || '',
  nip: order.nip || '',
  courierCompany: order.courierCompany || 'inpost',
  deliveryMethod: order.deliveryMethod || 'inpost_courier',
  paymentStatus: order.paymentStatus || 'pending',
  fulfillmentStatus: order.fulfillmentStatus || 'processing',
  shipmentStatus: order.shipmentStatus || 'unknown',
  trackingNumber: order.trackingNumber || '',
  inpostPointId: order.inpostPointId || '',
  inpostPointName: order.inpostPointName || '',
  inpostPointAddress: order.inpostPointAddress || '',
  inpostPointCity: order.inpostPointCity || '',
  inpostPointPostalCode: order.inpostPointPostalCode || '',
  packageWeight: order.packageWeight === null || order.packageWeight === undefined ? '' : String(order.packageWeight),
  packageLength: order.packageLength === null || order.packageLength === undefined ? '' : String(order.packageLength),
  packageWidth: order.packageWidth === null || order.packageWidth === undefined ? '' : String(order.packageWidth),
  packageHeight: order.packageHeight === null || order.packageHeight === undefined ? '' : String(order.packageHeight),
  goodsValue: order.goodsValue === null || order.goodsValue === undefined ? '' : String(order.goodsValue),
  orderNotes: order.orderNotes || '',
  adminNotes: order.adminNotes || '',
  needsAttention: Boolean(order.needsAttention),
  formatted: order.formatted || { subtotal: '0.00 PLN', discount: '0.00 PLN', shipping: '0.00 PLN', total: '0.00 PLN', goodsValue: '0.00 PLN' },
  items: order.items || []
})

const adminTabs = ['dashboard', 'products', 'pages', 'orders', 'submissions']
const ADMIN_CONTEXT_KEY = 'tatragrail-admin-context'

const sanitizeTab = (value) => (adminTabs.includes(value) ? value : 'dashboard')

const readAdminContext = () => {
  const fallback = { tab: 'dashboard', productId: null, pageId: null, orderId: null }
  let storedContext = null

  try {
    const raw = localStorage.getItem(ADMIN_CONTEXT_KEY)
    storedContext = raw ? JSON.parse(raw) : null
  } catch {
    storedContext = null
  }

  const params = new URLSearchParams(window.location.search)

  return {
    tab: sanitizeTab(params.get('tab') || storedContext?.tab || fallback.tab),
    productId: params.get('productId') || storedContext?.productId || fallback.productId,
    pageId: params.get('pageId') || storedContext?.pageId || fallback.pageId,
    orderId: params.get('orderId') || storedContext?.orderId || fallback.orderId
  }
}

const persistAdminContext = (context) => {
  const nextContext = {
    tab: sanitizeTab(context.tab),
    productId: context.productId || null,
    pageId: context.pageId || null,
    orderId: context.orderId || null
  }

  localStorage.setItem(ADMIN_CONTEXT_KEY, JSON.stringify(nextContext))

  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  params.set('tab', nextContext.tab)

  if (nextContext.productId) {
    params.set('productId', nextContext.productId)
  } else {
    params.delete('productId')
  }

  if (nextContext.pageId) {
    params.set('pageId', nextContext.pageId)
  } else {
    params.delete('pageId')
  }

  if (nextContext.orderId) {
    params.set('orderId', nextContext.orderId)
  } else {
    params.delete('orderId')
  }

  const nextSearch = params.toString()
  const nextUrl = `${url.pathname}${nextSearch ? `?${nextSearch}` : ''}`
  window.history.replaceState(window.history.state || {}, '', nextUrl)
}

const firstFieldErrorMessage = (payload) => {
  if (!payload?.errors || typeof payload.errors !== 'object') return null
  return Object.values(payload.errors).find((value) => typeof value === 'string' && value.trim()) || null
}

const resolveAdminErrorMessage = (error, fallbackMessage) => {
  if (error?.message && error.message !== 'Request failed') return error.message
  return firstFieldErrorMessage(error?.payload) || fallbackMessage
}

const __dbgAdmin = () => {}
const reportAdminMonitorEvent = () => {}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-5">
      <div className="mb-4 flex items-center justify-between text-zinc-400">
        <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
        <Icon size={18} />
      </div>
      <div className="text-3xl font-black text-white">{value}</div>
    </div>
  )
}

function SectionTitle({ icon: Icon, title, action }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon className="text-zinc-300" size={18} />
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-white">{title}</h2>
      </div>
      {action}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
      <span>{label}</span>
      {children}
    </label>
  )
}

function Input(props) {
  return <input {...props} className={`w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white ${props.className || ''}`} />
}

function TextArea(props) {
  return <textarea {...props} className={`min-h-28 w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white ${props.className || ''}`} />
}

function Select(props) {
  return <select {...props} className={`w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white ${props.className || ''}`} />
}

function PageCustomFields({ form, onChange }) {
  const customData = form.customData || {}

  const updateCustomData = (key, value) => {
    onChange({
      ...form,
      customData: {
        ...customData,
        [key]: value
      }
    })
  }

  if (form.key === 'shipping-returns') {
    const shippingMethods = customData.shippingMethods || []
    return (
      <div className="space-y-4 border border-zinc-800 p-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Moduly wysylki i zwrotow</h3>
        <div className="space-y-3">
          {shippingMethods.map((method, index) => (
            <div key={`${method.name}-${index}`} className="grid gap-3 md:grid-cols-3">
              <Input value={method.name || ''} onChange={(event) => updateCustomData('shippingMethods', shippingMethods.map((entry, currentIndex) => currentIndex === index ? { ...entry, name: event.target.value } : entry))} placeholder="Nazwa metody" />
              <Input value={method.price || ''} onChange={(event) => updateCustomData('shippingMethods', shippingMethods.map((entry, currentIndex) => currentIndex === index ? { ...entry, price: event.target.value } : entry))} placeholder="Cena" />
              <Input value={method.eta || ''} onChange={(event) => updateCustomData('shippingMethods', shippingMethods.map((entry, currentIndex) => currentIndex === index ? { ...entry, eta: event.target.value } : entry))} placeholder="Czas dostawy" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => updateCustomData('shippingMethods', [...shippingMethods, { name: '', price: '', eta: '' }])} className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white">
          Dodaj metode dostawy
        </button>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Liczba dni na zwrot">
            <Input value={customData.returnWindowDays || ''} onChange={(event) => updateCustomData('returnWindowDays', event.target.value)} />
          </Field>
          <Field label="Email do zwrotow">
            <Input value={customData.returnEmail || ''} onChange={(event) => updateCustomData('returnEmail', event.target.value)} />
          </Field>
        </div>
        <Field label="Instrukcja zwrotu">
          <TextArea value={customData.returnInstructions || ''} onChange={(event) => updateCustomData('returnInstructions', event.target.value)} />
        </Field>
        <Field label="Instrukcja reklamacji">
          <TextArea value={customData.complaintsInstructions || ''} onChange={(event) => updateCustomData('complaintsInstructions', event.target.value)} />
        </Field>
      </div>
    )
  }

  if (form.key === 'storefront-settings') {
    return (
      <div className="space-y-4 border border-zinc-800 p-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Globalna wyprzedaz</h3>
        <label className="flex items-center justify-between gap-4 border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
          <div>
            <p className="font-bold uppercase tracking-[0.16em] text-white">Wlacz ceny promocyjne w storefrontcie</p>
            <p className="mt-1 text-xs text-zinc-500">Po wlaczeniu storefront pokazuje ceny promocyjne, badge rabatow i pasek wyprzedazy.</p>
          </div>
          <input
            type="checkbox"
            checked={Boolean(customData.saleEnabled)}
            onChange={(event) => updateCustomData('saleEnabled', event.target.checked)}
          />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Tekst paska wyprzedazy">
            <Input value={customData.saleAnnouncement || ''} onChange={(event) => updateCustomData('saleAnnouncement', event.target.value)} />
          </Field>
          <Field label="Etykieta badge">
            <Input value={customData.saleBadgeLabel || ''} onChange={(event) => updateCustomData('saleBadgeLabel', event.target.value)} />
          </Field>
        </div>
      </div>
    )
  }

  if (form.key === 'contact') {
    const workingHours = customData.workingHours || []
    return (
      <div className="space-y-4 border border-zinc-800 p-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Dane kontaktowe</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Nazwa firmy">
            <Input value={customData.companyName || ''} onChange={(event) => updateCustomData('companyName', event.target.value)} />
          </Field>
          <Field label="Email">
            <Input value={customData.email || ''} onChange={(event) => updateCustomData('email', event.target.value)} />
          </Field>
          <Field label="Telefon">
            <Input value={customData.phone || ''} onChange={(event) => updateCustomData('phone', event.target.value)} />
          </Field>
          <Field label="Adres">
            <Input value={customData.address || ''} onChange={(event) => updateCustomData('address', event.target.value)} />
          </Field>
        </div>
        <Field label="URL osadzonej mapy">
          <Input value={customData.mapEmbedUrl || ''} onChange={(event) => updateCustomData('mapEmbedUrl', event.target.value)} />
        </Field>
        <div className="space-y-3">
          {workingHours.map((entry, index) => (
            <div key={`${entry.label}-${index}`} className="grid gap-3 md:grid-cols-2">
              <Input value={entry.label || ''} onChange={(event) => updateCustomData('workingHours', workingHours.map((item, currentIndex) => currentIndex === index ? { ...item, label: event.target.value } : item))} placeholder="Dzien" />
              <Input value={entry.value || ''} onChange={(event) => updateCustomData('workingHours', workingHours.map((item, currentIndex) => currentIndex === index ? { ...item, value: event.target.value } : item))} placeholder="Godziny" />
            </div>
          ))}
        </div>
        <button type="button" onClick={() => updateCustomData('workingHours', [...workingHours, { label: '', value: '' }])} className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white">
          Dodaj godziny pracy
        </button>
      </div>
    )
  }

  if (form.key === 'privacy-policy') {
    const consentLinks = customData.consentLinks || []
    return (
      <div className="space-y-4 border border-zinc-800 p-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Linki do zarzadzania zgodami</h3>
        {consentLinks.map((link, index) => (
          <div key={`${link.label}-${index}`} className="grid gap-3 md:grid-cols-2">
            <Input value={link.label || ''} onChange={(event) => updateCustomData('consentLinks', consentLinks.map((entry, currentIndex) => currentIndex === index ? { ...entry, label: event.target.value } : entry))} placeholder="Etykieta" />
            <Input value={link.url || ''} onChange={(event) => updateCustomData('consentLinks', consentLinks.map((entry, currentIndex) => currentIndex === index ? { ...entry, url: event.target.value } : entry))} placeholder="URL" />
          </div>
        ))}
        <button type="button" onClick={() => updateCustomData('consentLinks', [...consentLinks, { label: '', url: '' }])} className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white">
          Dodaj link
        </button>
      </div>
    )
  }

  if (form.key === 'terms') {
    const updates = customData.updates || []
    return (
      <div className="space-y-4 border border-zinc-800 p-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Historia zmian regulaminu</h3>
        {updates.map((update, index) => (
          <div key={`${update.label}-${index}`} className="grid gap-3 md:grid-cols-2">
            <Input value={update.label || ''} onChange={(event) => updateCustomData('updates', updates.map((entry, currentIndex) => currentIndex === index ? { ...entry, label: event.target.value } : entry))} placeholder="Opis zmiany" />
            <Input value={update.publishedAt || ''} onChange={(event) => updateCustomData('updates', updates.map((entry, currentIndex) => currentIndex === index ? { ...entry, publishedAt: event.target.value } : entry))} placeholder="Data publikacji" />
          </div>
        ))}
        <button type="button" onClick={() => updateCustomData('updates', [...updates, { label: '', publishedAt: '' }])} className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white">
          Dodaj wpis historii
        </button>
      </div>
    )
  }

  return null
}

export default function AdminPage() {
  const [tab, setTab] = useState(() => readAdminContext().tab)
  const [authReady, setAuthReady] = useState(false)
  const [user, setUser] = useState(null)
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: '' })
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)
  const [dashboard, setDashboard] = useState({ products: 0, pages: 0, contacts: 0, returns: 0, orders: 0 })
  const [products, setProducts] = useState([])
  const [pages, setPages] = useState([])
  const [orders, setOrders] = useState([])
  const [ordersMeta, setOrdersMeta] = useState(createOrderMeta())
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState('')
  const [submissions, setSubmissions] = useState({ contacts: [], returns: [] })
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    stock: '',
    status: ''
  })
  const [orderFilters, setOrderFilters] = useState(createOrderFilters())
  const [productForm, setProductForm] = useState(createEmptyProduct())
  const [selectedProductId, setSelectedProductId] = useState(() => readAdminContext().productId)
  const [productHistory, setProductHistory] = useState([])
  const [productErrors, setProductErrors] = useState({})
  const [pageForm, setPageForm] = useState(null)
  const [selectedPageId, setSelectedPageId] = useState(() => readAdminContext().pageId)
  const [selectedOrderId, setSelectedOrderId] = useState(() => readAdminContext().orderId)
  const [orderForm, setOrderForm] = useState(null)
  const [orderErrors, setOrderErrors] = useState({})
  const [pageVersions, setPageVersions] = useState([])
  const [pageErrors, setPageErrors] = useState({})
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordErrors, setPasswordErrors] = useState({})
  const [feedback, setFeedback] = useState(null)

  const categories = useMemo(() => Array.from(new Set(products.map((product) => product.category).filter(Boolean))), [products])
  const setSuccessFeedback = (message) => setFeedback({ type: 'success', message })
  const setErrorFeedback = (message) => setFeedback({ type: 'error', message })

  const loadDashboard = async () => {
    const data = await apiFetch('/api/admin/dashboard', { includeAdmin: true })
    setDashboard(data)
    return data
  }

  const loadProducts = async (customFilters = filters) => {
    const params = new URLSearchParams()
    Object.entries(customFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const data = await apiFetch(`/api/admin/products?${params.toString()}`, { includeAdmin: true })
    const nextProducts = data.products || []
    setProducts(nextProducts)
    return nextProducts
  }

  const loadPages = async () => {
    const data = await apiFetch('/api/admin/pages', { includeAdmin: true })
    const nextPages = data.pages || []
    setPages(nextPages)
    return nextPages
  }

  const loadOrders = async (customFilters = orderFilters, page = ordersMeta.page) => {
    setOrdersLoading(true)
    setOrdersError('')
    const params = new URLSearchParams()
    Object.entries(customFilters).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined || value === false) return
      params.set(key, String(value))
    })
    params.set('page', String(page))
    params.set('pageSize', String(customFilters.pageSize || ordersMeta.pageSize || 20))

    try {
      const data = await apiFetch(`/api/admin/orders?${params.toString()}`, { includeAdmin: true })
      setOrders(data.orders || [])
      setOrdersMeta(data.meta || createOrderMeta())
      return data.orders || []
    } catch (error) {
      setOrdersError(resolveAdminErrorMessage(error, 'Nie udalo sie pobrac zamowien.'))
      throw error
    } finally {
      setOrdersLoading(false)
    }
  }

  const loadSubmissions = async () => {
    const data = await apiFetch('/api/admin/submissions', { includeAdmin: true })
    setSubmissions(data)
    return data
  }

  const loadProductHistory = async (productId) => {
    const data = await apiFetch(`/api/admin/products/${productId}/history`, { includeAdmin: true })
    setProductHistory(data.history || [])
    return data.history || []
  }

  const loadPageVersions = async (pageId) => {
    const data = await apiFetch(`/api/admin/pages/${pageId}/versions`, { includeAdmin: true })
    setPageVersions(data.versions || [])
    return data.versions || []
  }

  const loadOrderDetails = async (orderId) => {
    const data = await apiFetch(`/api/admin/orders/${orderId}`, { includeAdmin: true })
    setOrderForm(mapOrderToForm(data.order))
    return data.order
  }

  const resetProductEditor = () => {
    setSelectedProductId(null)
    setProductForm(createEmptyProduct())
    setProductHistory([])
  }

  const openProductEditor = async (product) => {
    setTab('products')
    setSelectedProductId(product.id)
    setProductForm(mapProductToForm(product))
    setPageErrors({})
    await loadProductHistory(product.id)
  }

  const openPageEditor = async (page) => {
    setTab('pages')
    setSelectedPageId(page.id)
    setPageForm(createPageForm(page))
    setProductErrors({})
    await loadPageVersions(page.id)
  }

  const openOrderEditor = async (orderId) => {
    setTab('orders')
    setSelectedOrderId(orderId)
    setOrderErrors({})
    await loadOrderDetails(orderId)
  }

  const bootstrap = async () => {
    // #region debug-point B:bootstrap-start
    __dbgAdmin('B', 'bootstrap start', { pathname: window.location.pathname, tokenPresent: Boolean(getAdminToken()) })
    // #endregion
    const context = readAdminContext()
    setTab(context.tab)

    const [, loadedProducts, loadedPages, loadedOrders] = await Promise.all([loadDashboard(), loadProducts(), loadPages(), loadOrders(orderFilters, 1), loadSubmissions()])

    if (context.productId) {
      const matchingProduct = loadedProducts.find((product) => product.id === context.productId)
      if (matchingProduct) {
        setSelectedProductId(matchingProduct.id)
        setProductForm(mapProductToForm(matchingProduct))
        if (context.tab === 'products') {
          await loadProductHistory(matchingProduct.id)
        }
      } else {
        resetProductEditor()
      }
    } else {
      resetProductEditor()
    }

    if (context.pageId) {
      const matchingPage = loadedPages.find((page) => page.id === context.pageId)
      if (matchingPage) {
        setSelectedPageId(matchingPage.id)
        setPageForm(createPageForm(matchingPage))
        if (context.tab === 'pages') {
          await loadPageVersions(matchingPage.id)
        }
      } else {
        setSelectedPageId(null)
        setPageForm(null)
        setPageVersions([])
      }
    } else {
      setSelectedPageId(null)
      setPageForm(null)
      setPageVersions([])
    }
    if (context.orderId) {
      const matchingOrder = loadedOrders.find((order) => order.id === context.orderId)
      if (matchingOrder) {
        setSelectedOrderId(matchingOrder.id)
        if (context.tab === 'orders') {
          await loadOrderDetails(matchingOrder.id)
        }
      } else {
        setSelectedOrderId(null)
        setOrderForm(null)
        setOrderErrors({})
      }
    } else if (context.tab === 'orders' && loadedOrders[0]) {
      setSelectedOrderId(loadedOrders[0].id)
      await loadOrderDetails(loadedOrders[0].id)
    } else {
      setSelectedOrderId(null)
      setOrderForm(null)
      setOrderErrors({})
    }
    // #region debug-point B:bootstrap-success
    __dbgAdmin('B', 'bootstrap success', { pathname: window.location.pathname, restoredTab: context.tab, restoredProductId: context.productId, restoredPageId: context.pageId, restoredOrderId: context.orderId })
    // #endregion
  }

  useEffect(() => {
    const token = getAdminToken()
    // #region debug-point B:session-check-start
    __dbgAdmin('B', 'session check start', { pathname: window.location.pathname, tokenPresent: Boolean(token) })
    // #endregion
    if (!token) {
      setAuthReady(true)
      return
    }

    apiFetch('/api/admin/session', { includeAdmin: true })
      .then(async (data) => {
        // #region debug-point B:session-check-success
        __dbgAdmin('B', 'session check success', { pathname: window.location.pathname, user: data?.user?.username || null })
        // #endregion
        setUser(data.user)
        setAuthReady(true)
        await bootstrap()
      })
      .catch((error) => {
        // #region debug-point B:session-check-fail
        __dbgAdmin('B', 'session check failed', { pathname: window.location.pathname, message: error?.message || 'unknown' })
        // #endregion
        clearAdminToken()
        setAuthReady(true)
      })
  }, [])

  useEffect(() => {
    persistAdminContext({
      tab,
      productId: selectedProductId,
      pageId: selectedPageId,
      orderId: selectedOrderId
    })
  }, [tab, selectedProductId, selectedPageId, selectedOrderId])

  useEffect(() => {
    if (tab === 'pages' && !pageForm && pages.length) {
      const fallbackPage = pages[0]
      setSelectedPageId(fallbackPage.id)
      setPageForm(createPageForm(fallbackPage))
      loadPageVersions(fallbackPage.id).catch(() => {})
    }
  }, [tab, pageForm, pages])

  useEffect(() => {
    if (tab === 'orders' && !selectedOrderId && orders.length) {
      openOrderEditor(orders[0].id).catch(() => {})
    }
  }, [tab, selectedOrderId, orders])

  useEffect(() => {
    // #region debug-point C:admin-state
    __dbgAdmin('C', 'admin state changed', { pathname: window.location.pathname, authReady, hasUser: Boolean(user), tab, productId: selectedProductId, pageId: selectedPageId, orderId: selectedOrderId, search: window.location.search })
    // #endregion
  }, [authReady, user, tab, selectedProductId, selectedPageId, selectedOrderId])

  useEffect(() => {
    if (tab !== 'orders' || !user) return undefined

    const intervalId = window.setInterval(() => {
      loadOrders(orderFilters, ordersMeta.page).catch(() => {})
      if (selectedOrderId) {
        loadOrderDetails(selectedOrderId).catch(() => {})
      }
    }, 30000)

    return () => window.clearInterval(intervalId)
  }, [tab, user, orderFilters, ordersMeta.page, selectedOrderId])

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoginError('')
    setLoading(true)
    // #region debug-point A:login-submit
    __dbgAdmin('A', 'login submit', { pathname: window.location.pathname, username: loginForm.username })
    // #endregion
    try {
      const data = await apiJson('/api/admin/login', 'POST', loginForm)
      setAdminToken(data.token)
      setUser(data.user)
      setFeedback(null)
      await bootstrap()
    } catch (error) {
      // #region debug-point A:login-fail
      __dbgAdmin('A', 'login failed', { pathname: window.location.pathname, message: error?.message || 'unknown' })
      // #endregion
      setLoginError(error.message)
    } finally {
      setLoading(false)
      setAuthReady(true)
    }
  }

  const logout = () => {
    clearAdminToken()
    setUser(null)
    setFeedback(null)
  }

  const handleProductSubmit = async (event) => {
    event.preventDefault()
    setProductErrors({})
    setFeedback(null)
    const payload = {
      name: productForm.name,
      nameEn: productForm.nameEn,
      sku: productForm.sku,
      slug: productForm.slug,
      category: productForm.category,
      categoryLabel: productForm.categoryLabel,
      categoryLabelEn: productForm.categoryLabelEn,
      shortDescription: productForm.shortDescription,
      shortDescriptionEn: productForm.shortDescriptionEn,
      description: productForm.description,
      descriptionEn: productForm.descriptionEn,
      material: productForm.material,
      materialEn: productForm.materialEn,
      detailsPl: parseList(productForm.detailsPlText),
      detailsEn: parseList(productForm.detailsEnText),
      price: Number(productForm.price),
      salePrice: productForm.salePrice === '' ? null : Number(productForm.salePrice),
      currency: productForm.currency,
      vatRate: Number(productForm.vatRate),
      stock: Number(productForm.stock),
      weight: productForm.weight === '' ? null : Number(productForm.weight),
      width: productForm.width === '' ? null : Number(productForm.width),
      height: productForm.height === '' ? null : Number(productForm.height),
      depth: productForm.depth === '' ? null : Number(productForm.depth),
      status: productForm.status,
      featured: productForm.featured,
      dropFeatured: productForm.dropFeatured,
      seoTitle: productForm.seoTitle,
      metaDescription: productForm.metaDescription,
      colors: parseList(productForm.colorsText),
      sizes: parseList(productForm.sizesText),
      images: productForm.images
    }

    try {
      // #region debug-point A:product-save-start
      __dbgAdmin('A', 'product save start', { pathname: window.location.pathname, productId: productForm.id || null, sku: payload.sku, slug: payload.slug })
      // #endregion
      if (productForm.id) {
        const data = await apiJson(`/api/admin/products/${productForm.id}`, 'PUT', payload, { includeAdmin: true })
        // #region debug-point A:product-save-success
        __dbgAdmin('A', 'product update success', { pathname: window.location.pathname, productId: data?.product?.id || productForm.id, sku: data?.product?.sku || payload.sku })
        // #endregion
        setSelectedProductId(data.product.id)
        setProductForm(mapProductToForm(data.product))
        setSuccessFeedback('Produkt zostal zaktualizowany.')
        await loadProductHistory(data.product.id)
      } else {
        const data = await apiJson('/api/admin/products', 'POST', payload, { includeAdmin: true })
        // #region debug-point A:product-save-success
        __dbgAdmin('A', 'product create success', { pathname: window.location.pathname, productId: data?.product?.id || null, sku: data?.product?.sku || payload.sku })
        // #endregion
        setSelectedProductId(data.product.id)
        setProductForm(mapProductToForm(data.product))
        setSuccessFeedback('Produkt zostal utworzony.')
        await loadProductHistory(data.product.id)
      }
      await loadProducts()
      await loadDashboard()
    } catch (error) {
      // #region debug-point D:product-save-fail
      __dbgAdmin('D', 'product save failed', { pathname: window.location.pathname, productId: productForm.id || null, message: error?.message || 'unknown', status: error?.status || null, payload: error?.payload || null })
      // #endregion
      reportAdminMonitorEvent('product save failed', {
        productId: productForm.id || null,
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setProductErrors(error.payload?.errors || {})
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie zapisac produktu.'))
    }
  }

  const handlePageSubmit = async (event) => {
    event.preventDefault()
    if (!pageForm) return
    setPageErrors({})
    setFeedback(null)

    try {
      // #region debug-point A:page-save-start
      __dbgAdmin('A', 'page save start', { pathname: window.location.pathname, pageId: pageForm.id, key: pageForm.key, slug: pageForm.slug })
      // #endregion
      const data = await apiJson(`/api/admin/pages/${pageForm.id}`, 'PUT', pageForm, { includeAdmin: true })
      // #region debug-point A:page-save-success
      __dbgAdmin('A', 'page save success', { pathname: window.location.pathname, pageId: data?.page?.id || pageForm.id, slug: data?.page?.slug || pageForm.slug })
      // #endregion
      setSelectedPageId(data.page.id)
      setPageForm(createPageForm(data.page))
      setSuccessFeedback('Strona CMS zostala zapisana.')
      await loadPages()
      await loadDashboard()
      await loadPageVersions(data.page.id)
    } catch (error) {
      // #region debug-point D:page-save-fail
      __dbgAdmin('D', 'page save failed', { pathname: window.location.pathname, pageId: pageForm.id, message: error?.message || 'unknown', status: error?.status || null, payload: error?.payload || null })
      // #endregion
      reportAdminMonitorEvent('page save failed', {
        pageId: pageForm.id,
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setPageErrors(error.payload?.errors || {})
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie zapisac strony CMS.'))
    }
  }

  const handleOrderSubmit = async (event) => {
    event.preventDefault()
    if (!selectedOrderId || !orderForm) return
    setOrderErrors({})
    setFeedback(null)

    const payload = {
      email: orderForm.email,
      phone: orderForm.phone,
      firstName: orderForm.firstName,
      lastName: orderForm.lastName,
      country: orderForm.country,
      city: orderForm.city,
      postalCode: orderForm.postalCode,
      street: orderForm.street,
      houseNumber: orderForm.houseNumber,
      companyName: orderForm.companyName || null,
      nip: orderForm.nip || null,
      courierCompany: orderForm.courierCompany,
      deliveryMethod: orderForm.deliveryMethod,
      paymentStatus: orderForm.paymentStatus,
      fulfillmentStatus: orderForm.fulfillmentStatus,
      shipmentStatus: orderForm.shipmentStatus === 'unknown' ? null : orderForm.shipmentStatus,
      trackingNumber: orderForm.trackingNumber || null,
      inpostPointId: orderForm.inpostPointId || null,
      inpostPointName: orderForm.inpostPointName || null,
      inpostPointAddress: orderForm.inpostPointAddress || null,
      inpostPointCity: orderForm.inpostPointCity || null,
      inpostPointPostalCode: orderForm.inpostPointPostalCode || null,
      packageWeight: orderForm.packageWeight === '' ? null : Number(orderForm.packageWeight),
      packageLength: orderForm.packageLength === '' ? null : Number(orderForm.packageLength),
      packageWidth: orderForm.packageWidth === '' ? null : Number(orderForm.packageWidth),
      packageHeight: orderForm.packageHeight === '' ? null : Number(orderForm.packageHeight),
      goodsValue: orderForm.goodsValue === '' ? null : Number(orderForm.goodsValue),
      orderNotes: orderForm.orderNotes || null,
      adminNotes: orderForm.adminNotes || null,
      needsAttention: orderForm.needsAttention
    }

    try {
      const data = await apiJson(`/api/admin/orders/${selectedOrderId}`, 'PATCH', payload, { includeAdmin: true })
      setOrderForm(mapOrderToForm(data.order))
      setSuccessFeedback('Zamowienie zostalo zaktualizowane.')
      await loadOrders(orderFilters, ordersMeta.page)
      await loadDashboard()
    } catch (error) {
      reportAdminMonitorEvent('order update failed', {
        orderId: selectedOrderId,
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setOrderErrors(error.payload?.errors || {})
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie zapisac zamowienia.'))
    }
  }

  const handleOrdersExport = async () => {
    const params = new URLSearchParams()
    Object.entries(orderFilters).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined || value === false) return
      params.set(key, String(value))
    })

    const response = await fetch(`${getApiBaseUrl()}/api/admin/orders/export?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${getAdminToken()}`
      }
    })

    if (!response.ok) {
      const message = await response.text()
      throw new Error(message || 'Nie udalo sie pobrac eksportu CSV.')
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `zamowienia-${new Date().toISOString().slice(0, 10)}.csv`
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
    setSuccessFeedback('Eksport CSV zostal przygotowany.')
  }

  const copyToClipboard = async (value, successMessage) => {
    await navigator.clipboard.writeText(value)
    setSuccessFeedback(successMessage)
  }

  const copyOrderAddress = async () => {
    if (!orderForm) return
    const lines = [
      `${orderForm.firstName} ${orderForm.lastName}`.trim(),
      orderForm.companyName || '',
      `${orderForm.street} ${orderForm.houseNumber}`.trim(),
      `${orderForm.postalCode} ${orderForm.city}`.trim(),
      orderForm.country,
      orderForm.phone || '',
      orderForm.email || '',
      orderForm.deliveryMethod === 'inpost_locker' ? `Paczkomat: ${orderForm.inpostPointId}` : ''
    ].filter(Boolean)
    await copyToClipboard(lines.join('\n'), 'Dane adresowe zostaly skopiowane.')
  }

  const copyShipmentSummary = async () => {
    if (!orderForm) return
    const lines = [
      orderForm.orderNumber,
      `Odbiorca: ${`${orderForm.firstName} ${orderForm.lastName}`.trim()}`,
      `Email: ${orderForm.email}`,
      orderForm.phone ? `Telefon: ${orderForm.phone}` : '',
      `Kurier: ${orderForm.courierCompany}`,
      `Metoda: ${orderForm.deliveryMethod}`,
      orderForm.trackingNumber ? `Tracking: ${orderForm.trackingNumber}` : '',
      `Waga: ${orderForm.packageWeight || '-'} kg`,
      `Gabaryty: ${orderForm.packageLength || '-'} x ${orderForm.packageWidth || '-'} x ${orderForm.packageHeight || '-'} cm`,
      `Towar: ${orderForm.formatted.goodsValue}`,
      `Pozycje: ${orderForm.items.map((item) => `${item.productName} x${item.quantity}`).join(', ')}`
    ].filter(Boolean)
    await copyToClipboard(lines.join('\n'), 'Dane wysylki zostaly skopiowane.')
  }

  const uploadImages = async (fileList) => {
    try {
      const formData = new FormData()
      Array.from(fileList).forEach((file) => formData.append('files', file))
      const data = await apiFormData('/api/admin/upload', formData, { includeAdmin: true })
      setProductForm((prev) => ({
        ...prev,
        images: [...prev.images, ...(data.files || [])].map((image, index) => ({
          ...image,
          position: index,
          isThumbnail: index === 0 ? true : Boolean(image.isThumbnail)
        }))
      }))
      setSuccessFeedback('Zdjecia zostaly dodane do formularza.')
    } catch (error) {
      reportAdminMonitorEvent('upload failed', {
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie przeslac zdjec.'))
    }
  }

  const handleCloneProduct = async () => {
    if (!productForm.id) return

    try {
      const data = await apiFetch(`/api/admin/products/${productForm.id}/clone`, {
        method: 'POST',
        includeAdmin: true
      })
      setSelectedProductId(data.product.id)
      setProductForm(mapProductToForm(data.product))
      await loadProducts()
      await loadDashboard()
      await loadProductHistory(data.product.id)
      setSuccessFeedback('Produkt zostal sklonowany.')
    } catch (error) {
      reportAdminMonitorEvent('product clone failed', {
        productId: productForm.id,
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie sklonowac produktu.'))
    }
  }

  const handlePasswordSubmit = async (event) => {
    event.preventDefault()
    setPasswordErrors({})
    setFeedback(null)

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordErrors({ confirmPassword: 'Nowe hasla musza byc identyczne.' })
      setErrorFeedback('Nowe hasla musza byc identyczne.')
      return
    }

    try {
      await apiJson('/api/admin/password', 'POST', passwordForm, { includeAdmin: true })
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
      setSuccessFeedback('Haslo administratora zostalo zmienione.')
    } catch (error) {
      reportAdminMonitorEvent('password change failed', {
        status: error?.status || null,
        message: error?.message || 'unknown'
      })
      setPasswordErrors(error.payload?.errors || {})
      setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie zmienic hasla administratora.'))
    }
  }

  if (!authReady) {
    return <div className="min-h-screen bg-[#0a0a0a] px-4 pt-40 text-center text-zinc-400">Ladowanie panelu administracyjnego...</div>
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] px-4 pt-32 text-white">
        <div className="mx-auto max-w-md border border-zinc-800 bg-black/70 p-8">
          <h1 className="mb-2 text-2xl font-black uppercase tracking-[0.25em]">Panel CMS</h1>
          <p className="mb-6 text-sm text-zinc-400">Zaloguj sie, aby zarzadzac katalogiem produktow i tresciami sklepu.</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <Field label="Login administratora">
              <Input value={loginForm.username} onChange={(event) => setLoginForm((prev) => ({ ...prev, username: event.target.value }))} />
            </Field>
            <Field label="Haslo">
              <Input type="password" value={loginForm.password} onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))} />
            </Field>
            {loginError ? <p className="text-sm text-red-400">{loginError}</p> : null}
            <button type="submit" disabled={loading} className="w-full border border-white bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white disabled:opacity-50">
              {loading ? 'Logowanie...' : 'Zaloguj'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20 pt-32 text-white md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col gap-4 border border-zinc-800 bg-black/70 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Zalogowano jako {user.username}</p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-[0.25em]">CMS TatraGrail</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ['dashboard', 'Dashboard', LayoutDashboard],
              ['products', 'Produkty', Package2],
              ['pages', 'Strony', Files],
              ['orders', 'Zamowienia', Send],
              ['submissions', 'Formularze', Mail]
            ].map(([value, label, Icon]) => (
              <button key={value} type="button" onClick={() => setTab(value)} className={`inline-flex items-center gap-2 border px-4 py-3 text-xs uppercase tracking-[0.2em] transition ${tab === value ? 'border-white bg-white text-black' : 'border-zinc-700 text-zinc-200 hover:border-white'}`}>
                <Icon size={14} />
                {label}
              </button>
            ))}
            <button type="button" onClick={logout} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-red-400 hover:text-red-300">
              <LogOut size={14} />
              Wyloguj
            </button>
          </div>
        </div>

        {feedback ? (
          <div className={`mb-6 border px-4 py-3 text-sm ${feedback.type === 'error' ? 'border-red-500/50 bg-red-950/20 text-red-200' : 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'}`}>
            {feedback.message}
          </div>
        ) : null}

        {tab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <StatCard icon={Package2} label="Produkty" value={dashboard.products} />
              <StatCard icon={Files} label="Strony CMS" value={dashboard.pages} />
              <StatCard icon={Send} label="Zamowienia" value={dashboard.orders} />
              <StatCard icon={Mail} label="Wiadomosci" value={dashboard.contacts} />
              <StatCard icon={Archive} label="Zwroty" value={dashboard.returns} />
            </div>
            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={LogOut} title="Bezpieczenstwo konta" />
              <form className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" onSubmit={handlePasswordSubmit}>
                <Field label="Aktualne haslo">
                  <Input type="password" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm((prev) => ({ ...prev, currentPassword: event.target.value }))} />
                  {passwordErrors.currentPassword ? <span className="text-red-400">{passwordErrors.currentPassword}</span> : null}
                </Field>
                <Field label="Nowe haslo">
                  <Input type="password" value={passwordForm.newPassword} onChange={(event) => setPasswordForm((prev) => ({ ...prev, newPassword: event.target.value }))} />
                  {passwordErrors.newPassword ? <span className="text-red-400">{passwordErrors.newPassword}</span> : null}
                </Field>
                <Field label="Powtorz nowe haslo">
                  <Input type="password" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm((prev) => ({ ...prev, confirmPassword: event.target.value }))} />
                  {passwordErrors.confirmPassword ? <span className="text-red-400">{passwordErrors.confirmPassword}</span> : null}
                </Field>
                <div className="md:col-span-2 xl:col-span-3 flex flex-wrap items-center justify-between gap-3 border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-400">
                  <p>Ustaw nowe haslo administratora o dlugosci co najmniej 10 znakow.</p>
                  <button type="submit" className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
                    <Save size={14} />
                    Zmien haslo
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}

        {tab === 'products' && (
          <div className="grid gap-6 xl:grid-cols-[1.1fr_1.3fr]">
            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Filter} title="Lista produktow" action={
                <button type="button" onClick={resetProductEditor} className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                  <Plus size={14} />
                  Nowy produkt
                </button>
              } />
              <div className="grid gap-3 md:grid-cols-2">
                <Input value={filters.search} onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))} placeholder="Szukaj po nazwie lub SKU" />
                <Input value={filters.category} onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))} placeholder="Kategoria" />
                <Input value={filters.minPrice} onChange={(event) => setFilters((prev) => ({ ...prev, minPrice: event.target.value }))} placeholder="Cena od" />
                <Input value={filters.maxPrice} onChange={(event) => setFilters((prev) => ({ ...prev, maxPrice: event.target.value }))} placeholder="Cena do" />
                <Select value={filters.stock} onChange={(event) => setFilters((prev) => ({ ...prev, stock: event.target.value }))}>
                  <option value="">Stan magazynowy</option>
                  <option value="in">Na stanie</option>
                  <option value="out">Brak stanu</option>
                </Select>
                <Select value={filters.status} onChange={(event) => setFilters((prev) => ({ ...prev, status: event.target.value }))}>
                  <option value="">Status</option>
                  {productStatuses.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </Select>
              </div>
              <div className="mt-4 flex gap-3">
                <button type="button" onClick={() => loadProducts()} className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
                  <Search size={14} />
                  Filtruj
                </button>
                <button type="button" onClick={() => { const next = { search: '', category: '', minPrice: '', maxPrice: '', stock: '', status: '' }; setFilters(next); loadProducts(next) }} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                  <RefreshCw size={14} />
                  Reset
                </button>
              </div>
              <div className="mt-6 max-h-[700px] space-y-3 overflow-y-auto pr-1">
                {products.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => openProductEditor(product)}
                    className={`w-full border p-4 text-left transition ${selectedProductId === product.id ? 'border-white bg-zinc-950' : 'border-zinc-800 bg-black hover:border-zinc-500'}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">{product.title?.pl}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-400">{product.sku}</p>
                        <p className="mt-2 text-xs text-zinc-500">{product.category} • {product.status} • stan {product.stock}</p>
                      </div>
                      <div className="text-sm text-zinc-300">{product.salePrice || product.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Package2} title={productForm.id ? 'Edycja produktu' : 'Nowy produkt'} />
              <form className="space-y-6" onSubmit={handleProductSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Nazwa produktu PL">
                    <Input value={productForm.name} onChange={(event) => setProductForm((prev) => ({ ...prev, name: event.target.value }))} />
                    {productErrors.name ? <span className="text-red-400">{productErrors.name}</span> : null}
                  </Field>
                  <Field label="Nazwa produktu EN">
                    <Input value={productForm.nameEn} onChange={(event) => setProductForm((prev) => ({ ...prev, nameEn: event.target.value }))} />
                  </Field>
                  <Field label="SKU">
                    <Input value={productForm.sku} onChange={(event) => setProductForm((prev) => ({ ...prev, sku: event.target.value }))} />
                    {productErrors.sku ? <span className="text-red-400">{productErrors.sku}</span> : null}
                  </Field>
                  <Field label="Adres URL produktu">
                    <Input value={productForm.slug} onChange={(event) => setProductForm((prev) => ({ ...prev, slug: event.target.value }))} />
                  </Field>
                  <Field label="Kategoria">
                    <Input list="product-categories" value={productForm.category} onChange={(event) => setProductForm((prev) => ({ ...prev, category: event.target.value }))} />
                    <datalist id="product-categories">
                      {categories.map((category) => <option key={category} value={category} />)}
                    </datalist>
                    {productErrors.category ? <span className="text-red-400">{productErrors.category}</span> : null}
                  </Field>
                  <Field label="Status">
                    <Select value={productForm.status} onChange={(event) => setProductForm((prev) => ({ ...prev, status: event.target.value }))}>
                      {productStatuses.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Nazwa kategorii PL">
                    <Input value={productForm.categoryLabel} onChange={(event) => setProductForm((prev) => ({ ...prev, categoryLabel: event.target.value }))} />
                  </Field>
                  <Field label="Nazwa kategorii EN">
                    <Input value={productForm.categoryLabelEn} onChange={(event) => setProductForm((prev) => ({ ...prev, categoryLabelEn: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Opis glowny PL">
                    <TextArea value={productForm.shortDescription} onChange={(event) => setProductForm((prev) => ({ ...prev, shortDescription: event.target.value }))} />
                    {productErrors.shortDescription ? <span className="text-red-400">{productErrors.shortDescription}</span> : null}
                  </Field>
                  <Field label="Opis glowny EN">
                    <TextArea value={productForm.shortDescriptionEn} onChange={(event) => setProductForm((prev) => ({ ...prev, shortDescriptionEn: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Opis szczegolowy PL">
                    <TextArea value={productForm.description} onChange={(event) => setProductForm((prev) => ({ ...prev, description: event.target.value }))} className="min-h-36" />
                    {productErrors.description ? <span className="text-red-400">{productErrors.description}</span> : null}
                  </Field>
                  <Field label="Opis szczegolowy EN">
                    <TextArea value={productForm.descriptionEn} onChange={(event) => setProductForm((prev) => ({ ...prev, descriptionEn: event.target.value }))} className="min-h-36" />
                  </Field>
                  <Field label="Material PL">
                    <TextArea value={productForm.material} onChange={(event) => setProductForm((prev) => ({ ...prev, material: event.target.value }))} />
                  </Field>
                  <Field label="Material EN">
                    <TextArea value={productForm.materialEn} onChange={(event) => setProductForm((prev) => ({ ...prev, materialEn: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Detale PL (kazdy w nowej linii)">
                    <TextArea value={productForm.detailsPlText} onChange={(event) => setProductForm((prev) => ({ ...prev, detailsPlText: event.target.value }))} />
                  </Field>
                  <Field label="Detale EN (kazdy w nowej linii)">
                    <TextArea value={productForm.detailsEnText} onChange={(event) => setProductForm((prev) => ({ ...prev, detailsEnText: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <Field label="Cena bazowa">
                    <Input type="number" step="0.01" value={productForm.price} onChange={(event) => setProductForm((prev) => ({ ...prev, price: event.target.value }))} />
                    {productErrors.price ? <span className="text-red-400">{productErrors.price}</span> : null}
                  </Field>
                  <Field label="Cena promocyjna">
                    <Input type="number" step="0.01" value={productForm.salePrice} onChange={(event) => setProductForm((prev) => ({ ...prev, salePrice: event.target.value }))} />
                  </Field>
                  <Field label="Waluta">
                    <Input value={productForm.currency} onChange={(event) => setProductForm((prev) => ({ ...prev, currency: event.target.value }))} />
                  </Field>
                  <Field label="VAT">
                    <Input type="number" step="0.01" value={productForm.vatRate} onChange={(event) => setProductForm((prev) => ({ ...prev, vatRate: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <Field label="Stan magazynowy">
                    <Input type="number" value={productForm.stock} onChange={(event) => setProductForm((prev) => ({ ...prev, stock: event.target.value }))} />
                    {productErrors.stock ? <span className="text-red-400">{productErrors.stock}</span> : null}
                  </Field>
                  <Field label="Waga (kg)">
                    <Input type="number" step="0.01" value={productForm.weight} onChange={(event) => setProductForm((prev) => ({ ...prev, weight: event.target.value }))} />
                  </Field>
                  <Field label="Szerokosc">
                    <Input type="number" step="0.01" value={productForm.width} onChange={(event) => setProductForm((prev) => ({ ...prev, width: event.target.value }))} />
                  </Field>
                  <Field label="Wysokosc / Glebokosc">
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="number" step="0.01" value={productForm.height} onChange={(event) => setProductForm((prev) => ({ ...prev, height: event.target.value }))} placeholder="H" />
                      <Input type="number" step="0.01" value={productForm.depth} onChange={(event) => setProductForm((prev) => ({ ...prev, depth: event.target.value }))} placeholder="D" />
                    </div>
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Kolory (przecinkami)">
                    <Input value={productForm.colorsText} onChange={(event) => setProductForm((prev) => ({ ...prev, colorsText: event.target.value }))} />
                  </Field>
                  <Field label="Rozmiary (przecinkami)">
                    <Input value={productForm.sizesText} onChange={(event) => setProductForm((prev) => ({ ...prev, sizesText: event.target.value }))} />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="SEO title">
                    <Input value={productForm.seoTitle} onChange={(event) => setProductForm((prev) => ({ ...prev, seoTitle: event.target.value }))} />
                  </Field>
                  <Field label="Meta description">
                    <TextArea value={productForm.metaDescription} onChange={(event) => setProductForm((prev) => ({ ...prev, metaDescription: event.target.value }))} />
                  </Field>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={productForm.featured} onChange={(event) => setProductForm((prev) => ({ ...prev, featured: event.target.checked }))} />
                    Produkt wyrozniony
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={productForm.dropFeatured} onChange={(event) => setProductForm((prev) => ({ ...prev, dropFeatured: event.target.checked }))} />
                    Promowany w dropie
                  </label>
                </div>

                <div className="space-y-4 border border-zinc-800 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Zdjecia produktowe</h3>
                    <label className="inline-flex cursor-pointer items-center gap-2 border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white">
                      <Upload size={14} />
                      Dodaj pliki
                      <input type="file" multiple accept="image/*" className="hidden" onChange={(event) => event.target.files?.length ? uploadImages(event.target.files) : null} />
                    </label>
                  </div>
                  {productErrors.images ? <p className="text-sm text-red-400">{productErrors.images}</p> : null}
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {productForm.images.map((image, index) => (
                      <div key={`${image.url}-${index}`} className="border border-zinc-800 bg-zinc-950 p-3">
                        <div className="aspect-square overflow-hidden border border-zinc-800 bg-black">
                          <img src={image.url} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="mt-3 space-y-2">
                          <Input value={image.alt || ''} onChange={(event) => setProductForm((prev) => ({ ...prev, images: prev.images.map((entry, currentIndex) => currentIndex === index ? { ...entry, alt: event.target.value } : entry) }))} placeholder="Opis alt" />
                          <div className="flex items-center justify-between gap-3">
                            <label className="text-xs text-zinc-400">
                              <input type="radio" checked={index === 0} onChange={() => setProductForm((prev) => ({ ...prev, images: prev.images.map((entry, currentIndex) => ({ ...entry, position: currentIndex === index ? 0 : currentIndex >= 0 && currentIndex < index ? currentIndex + 1 : currentIndex })) }))} />
                              <span className="ml-2">Miniatura</span>
                            </label>
                            <button type="button" onClick={() => setProductForm((prev) => ({ ...prev, images: prev.images.filter((_, currentIndex) => currentIndex !== index).map((entry, currentIndex) => ({ ...entry, position: currentIndex, isThumbnail: currentIndex === 0 })) }))} className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-red-400">
                              <Trash2 size={14} />
                              Usun
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
                    <Save size={14} />
                    Zapisz produkt
                  </button>
                  {productForm.id ? (
                    <>
                      <button type="button" onClick={handleCloneProduct} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                        <Copy size={14} />
                        Klonuj
                      </button>
                      <button type="button" onClick={async () => {
                        try {
                          await apiFetch(`/api/admin/products/${productForm.id}/archive`, { method: 'POST', includeAdmin: true })
                          await loadProducts()
                          await loadDashboard()
                          setSuccessFeedback('Produkt zostal zarchiwizowany.')
                        } catch (error) {
                          reportAdminMonitorEvent('product archive failed', { productId: productForm.id, status: error?.status || null, message: error?.message || 'unknown' })
                          setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie zarchiwizowac produktu.'))
                        }
                      }} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                        <Archive size={14} />
                        Archiwizuj
                      </button>
                      <button type="button" onClick={async () => {
                        try {
                          await apiFetch(`/api/admin/products/${productForm.id}/restore`, { method: 'POST', includeAdmin: true })
                          await loadProducts()
                          await loadDashboard()
                          setSuccessFeedback('Produkt zostal przywrocony.')
                        } catch (error) {
                          reportAdminMonitorEvent('product restore failed', { productId: productForm.id, status: error?.status || null, message: error?.message || 'unknown' })
                          setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie przywrocic produktu.'))
                        }
                      }} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                        <RefreshCw size={14} />
                        Przywroc
                      </button>
                      <button type="button" onClick={async () => {
                        try {
                          await apiFetch(`/api/admin/products/${productForm.id}`, { method: 'DELETE', includeAdmin: true })
                          resetProductEditor()
                          await loadProducts()
                          await loadDashboard()
                          setSuccessFeedback('Produkt zostal usuniety logicznie.')
                        } catch (error) {
                          reportAdminMonitorEvent('product delete failed', { productId: productForm.id, status: error?.status || null, message: error?.message || 'unknown' })
                          setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie usunac produktu.'))
                        }
                      }} className="inline-flex items-center gap-2 border border-red-500/50 px-4 py-3 text-xs uppercase tracking-[0.2em] text-red-300 transition hover:border-red-400">
                        <Trash2 size={14} />
                        Usun
                      </button>
                    </>
                  ) : null}
                </div>
              </form>

              {productHistory.length ? (
                <div className="mt-8 border-t border-zinc-800 pt-6">
                  <SectionTitle icon={FileClock} title="Historia zmian produktu" />
                  <div className="space-y-3">
                    {productHistory.map((entry) => (
                      <div key={entry.id} className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                        <p className="font-bold uppercase tracking-[0.14em] text-white">{entry.action}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{entry.author} • {new Date(entry.createdAt).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          </div>
        )}

        {tab === 'pages' && pageForm && (
          <div className="grid gap-6 xl:grid-cols-[0.8fr_1.4fr]">
            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Files} title="Sekcje edytowalne" />
              <div className="space-y-3">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => openPageEditor(page)}
                    className={`w-full border p-4 text-left transition ${selectedPageId === page.id ? 'border-white bg-zinc-950' : 'border-zinc-800 bg-black hover:border-zinc-500'}`}
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">{pageLabels[page.key] || page.title}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">/{page.slug}</p>
                    <p className="mt-2 text-xs text-zinc-400">Wersja {page.currentVersion}</p>
                  </button>
                ))}
              </div>

              {pageVersions.length ? (
                <div className="mt-6 border-t border-zinc-800 pt-6">
                  <SectionTitle icon={FileClock} title="Archiwum wersji" />
                  <div className="space-y-3">
                    {pageVersions.map((version) => (
                      <div key={version.id} className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                        <p className="font-bold text-white">Wersja {version.version}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{version.author} • {new Date(version.createdAt).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Files} title={`Edycja strony: ${pageLabels[pageForm.key] || pageForm.title}`} />
              <form className="space-y-6" onSubmit={handlePageSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Tytul">
                    <Input value={pageForm.title} onChange={(event) => setPageForm((prev) => ({ ...prev, title: event.target.value }))} />
                    {pageErrors.title ? <span className="text-red-400">{pageErrors.title}</span> : null}
                  </Field>
                  <Field label="Adres URL">
                    <Input value={pageForm.slug} onChange={(event) => setPageForm((prev) => ({ ...prev, slug: event.target.value }))} />
                    {pageErrors.slug ? <span className="text-red-400">{pageErrors.slug}</span> : null}
                  </Field>
                  <Field label="SEO title">
                    <Input value={pageForm.seoTitle} onChange={(event) => setPageForm((prev) => ({ ...prev, seoTitle: event.target.value }))} />
                  </Field>
                  <Field label="Meta description">
                    <TextArea value={pageForm.metaDescription} onChange={(event) => setPageForm((prev) => ({ ...prev, metaDescription: event.target.value }))} />
                  </Field>
                </div>
                <Field label="Tresc strony (WYSIWYG)">
                  <RichTextEditor value={pageForm.bodyHtml} onChange={(value) => setPageForm((prev) => ({ ...prev, bodyHtml: value }))} />
                  {pageErrors.bodyHtml ? <span className="text-red-400">{pageErrors.bodyHtml}</span> : null}
                </Field>
                <PageCustomFields form={pageForm} onChange={setPageForm} />
                <button type="submit" className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
                  <Save size={14} />
                  Zapisz strone
                </button>
              </form>
            </section>
          </div>
        )}

        {tab === 'orders' && (
          <AdminOrdersPanel
            filters={orderFilters}
            setFilters={setOrderFilters}
            paymentStatuses={orderPaymentStatuses}
            fulfillmentStatuses={orderFulfillmentStatuses}
            shipmentStatuses={orderShipmentStatuses}
            deliveryMethods={orderDeliveryMethods}
            orders={orders}
            meta={ordersMeta}
            selectedOrderId={selectedOrderId}
            ordersLoading={ordersLoading}
            ordersError={ordersError}
            orderForm={orderForm}
            orderErrors={orderErrors}
            onFilter={async (page = 1) => {
              try {
                const nextOrders = await loadOrders(orderFilters, page)
                if (!selectedOrderId && nextOrders[0]?.id) {
                  await openOrderEditor(nextOrders[0].id)
                }
              } catch (error) {
                setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie pobrac zamowien.'))
              }
            }}
            onResetFilters={async () => {
              const next = createOrderFilters()
              setOrderFilters(next)
              try {
                await loadOrders(next, 1)
              } catch (error) {
                setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie pobrac zamowien.'))
              }
            }}
            onRefresh={async () => {
              try {
                await loadOrders(orderFilters, ordersMeta.page)
                if (selectedOrderId) {
                  await loadOrderDetails(selectedOrderId)
                }
              } catch (error) {
                setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie odswiezyc zamowien.'))
              }
            }}
            onExport={async () => {
              try {
                await handleOrdersExport()
              } catch (error) {
                setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie wyeksportowac zamowien.'))
              }
            }}
            onSelectOrder={async (orderId) => {
              try {
                await openOrderEditor(orderId)
              } catch (error) {
                setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie pobrac szczegolow zamowienia.'))
              }
            }}
            onOrderSubmit={handleOrderSubmit}
            setOrderForm={setOrderForm}
            onCopyAddress={() => copyOrderAddress().catch((error) => setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie skopiowac adresu.')))}
            onCopyShipmentSummary={() => copyShipmentSummary().catch((error) => setErrorFeedback(resolveAdminErrorMessage(error, 'Nie udalo sie skopiowac danych wysylki.')))}
          />
        )}

        {tab === 'submissions' && (
          <div className="grid gap-6 xl:grid-cols-2">
            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Mail} title="Wiadomosci kontaktowe" />
              <div className="space-y-3">
                {submissions.contacts.map((contact) => (
                  <div key={contact.id} className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                    <p className="font-bold text-white">{contact.name}</p>
                    <p className="mt-1 text-zinc-400">{contact.email}{contact.phone ? ` • ${contact.phone}` : ''}</p>
                    <p className="mt-3 whitespace-pre-line">{contact.message}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">{new Date(contact.createdAt).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-zinc-800 bg-black/70 p-6">
              <SectionTitle icon={Archive} title="Zgloszenia zwrotow" />
              <div className="space-y-3">
                {submissions.returns.map((entry) => (
                  <div key={entry.id} className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                    <p className="font-bold text-white">{entry.orderNumber}</p>
                    <p className="mt-1 text-zinc-400">{entry.fullName} • {entry.email}</p>
                    <p className="mt-3"><span className="font-bold text-white">Powod:</span> {entry.reason}</p>
                    {entry.details ? <p className="mt-2 whitespace-pre-line">{entry.details}</p> : null}
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">{new Date(entry.createdAt).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
