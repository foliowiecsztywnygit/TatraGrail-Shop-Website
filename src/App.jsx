import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Drop01Section from './components/Drop01Section'
import ProductGrid from './components/ProductGrid'
import ProductPage from './pages/ProductPage'
import CartDrawer from './components/CartDrawer'
import CheckoutPage from './pages/CheckoutPage'
import TrackingPage from './pages/TrackingPage'
import PaymentStatusPage from './pages/PaymentStatusPage'
import DropGatePage from './pages/DropGatePage'
import CmsContentPage from './pages/CmsContentPage'
import AdminPage from './pages/AdminPage'
import { ViewProvider } from './context/ViewContext'
import { categoriesData, getProductById } from './data/products'
import { apiFetch } from './lib/api'
import { scrollToSection } from './lib/navigation'
import { applyStorefrontPricingToCategories, applyStorefrontPricingToProduct, DEFAULT_STOREFRONT_SETTINGS, normalizeStorefrontSettings } from './lib/storefront'
import { useCartStore } from './store/cartStore'

function CmsRouteView({ path }) {
  const [page, setPage] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let mounted = true
    setPage(null)
    setNotFound(false)

    apiFetch(`/api/pages/by-path?path=${encodeURIComponent(path)}`)
      .then((data) => {
        if (!mounted) return
        setPage(data.page)
      })
      .catch(() => {
        if (!mounted) return
        setNotFound(true)
      })

    return () => {
      mounted = false
    }
  }, [path])

  return <CmsContentPage page={page} notFound={notFound} />
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [dropUnlocked, setDropUnlocked] = useState(() => !!localStorage.getItem('tatragrail-drop-token'))
  const [now, setNow] = useState(Date.now())
  const [catalogCategories, setCatalogCategories] = useState([])
  const [catalogLoaded, setCatalogLoaded] = useState(false)
  const [storefrontSettings, setStorefrontSettings] = useState(DEFAULT_STOREFRONT_SETTINGS)
  const syncCartPrices = useCartStore((state) => state.syncPrices)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    const originalPushState = window.history.pushState
    window.history.pushState = function pushStateProxy() {
      originalPushState.apply(this, arguments)
      onLocationChange()
    }

    window.addEventListener('popstate', onLocationChange)

    const handleClick = (event) => {
      const anchor = event.target.closest('a')
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin) && !anchor.href.includes('#')) {
        event.preventDefault()
        const path = new URL(anchor.href).pathname
        window.history.pushState({}, '', path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      window.history.pushState = originalPushState
      window.removeEventListener('popstate', onLocationChange)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let mounted = true
    apiFetch('/api/products/storefront')
      .then((data) => {
        if (!mounted) return
        setCatalogCategories(data.categories || [])
        setStorefrontSettings(normalizeStorefrontSettings(data.storefrontSettings || DEFAULT_STOREFRONT_SETTINGS))
        setCatalogLoaded(true)
      })
      .catch(() => {
        if (!mounted) return
        setStorefrontSettings(DEFAULT_STOREFRONT_SETTINGS)
        setCatalogLoaded(true)
      })

    return () => {
      mounted = false
    }
  }, [])

  const fallbackCategories = useMemo(
    () => applyStorefrontPricingToCategories(categoriesData, storefrontSettings),
    [storefrontSettings]
  )
  const activeCategories = catalogCategories.length ? catalogCategories : fallbackCategories
  const allProducts = useMemo(() => activeCategories.flatMap((category) => category.products || []), [activeCategories])

  useEffect(() => {
    syncCartPrices(allProducts)
  }, [allProducts, syncCartPrices])

  const dropStartAt = import.meta.env.VITE_DROP_START_AT
  const dropStartMs = dropStartAt ? new Date(dropStartAt).getTime() : null
  const isDropLocked = Number.isFinite(dropStartMs) && now < dropStartMs && !dropUnlocked
  const isBypassRoute = currentPath.startsWith('/tracking/') || currentPath === '/payment-status' || currentPath === '/admin'
  const isAdminRoute = currentPath === '/admin'

  useEffect(() => {
    if (currentPath !== '/') return

    const sectionId = window.location.hash.replace(/^#/, '')
    if (!sectionId) return

    const timerId = window.setTimeout(() => {
      scrollToSection(sectionId, { behavior: 'smooth' })
    }, 60)

    return () => window.clearTimeout(timerId)
  }, [currentPath])

  let content
  if (isDropLocked && !isBypassRoute) {
    content = <DropGatePage dropStartAt={dropStartAt} onUnlocked={() => setDropUnlocked(true)} />
  } else if (isAdminRoute) {
    content = <AdminPage />
  } else if (currentPath.startsWith('/product/')) {
    const identifier = currentPath.split('/')[2]
    const product =
      allProducts.find((entry) => [entry.id, entry.externalId, entry.slug, entry.sku].includes(identifier)) ||
      applyStorefrontPricingToProduct(getProductById(identifier), storefrontSettings)

    if (!product && !catalogLoaded) {
      content = <div className="min-h-screen bg-[#0a0a0a] px-4 pt-40 text-center text-zinc-400">Ladowanie produktu...</div>
    } else if (product) {
      content = <ProductPage product={product} allProducts={allProducts} />
    } else {
      content = <CmsContentPage notFound />
    }
  } else if (currentPath === '/checkout') {
    content = <CheckoutPage />
  } else if (currentPath === '/payment-status') {
    content = <PaymentStatusPage />
  } else if (currentPath.startsWith('/tracking/')) {
    const token = currentPath.split('/')[2]
    content = <TrackingPage token={token} />
  } else if (currentPath === '/') {
    content = (
      <>
        <Drop01Section categories={activeCategories} />
        <ProductGrid categories={activeCategories} />
      </>
    )
  } else {
    content = <CmsRouteView path={currentPath} />
  }

  return (
    <ViewProvider>
      <div className="font-sans antialiased text-black">
        {!isAdminRoute && <Header currentPath={currentPath} storefrontSettings={storefrontSettings} />}
        {!isAdminRoute && <CartDrawer />}
        <main>{content}</main>
        {!isAdminRoute && <Footer />}
      </div>
    </ViewProvider>
  )
}
