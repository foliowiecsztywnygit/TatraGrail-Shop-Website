export const DEFAULT_STOREFRONT_SETTINGS = {
  saleEnabled: false,
  saleAnnouncement: 'WYPRZEDAZ AKTYWNA - CENY PROMOCYJNE NA WYBRANYCH MODELACH',
  saleBadgeLabel: 'WYPRZEDAZ'
}

export const normalizeStorefrontSettings = (settings = {}) => ({
  saleEnabled: Boolean(settings.saleEnabled),
  saleAnnouncement: String(settings.saleAnnouncement || DEFAULT_STOREFRONT_SETTINGS.saleAnnouncement).trim() || DEFAULT_STOREFRONT_SETTINGS.saleAnnouncement,
  saleBadgeLabel: String(settings.saleBadgeLabel || DEFAULT_STOREFRONT_SETTINGS.saleBadgeLabel).trim() || DEFAULT_STOREFRONT_SETTINGS.saleBadgeLabel
})

export const applyStorefrontPricingToProduct = (product, settings = DEFAULT_STOREFRONT_SETTINGS) => {
  if (!product) return null

  const normalizedSettings = normalizeStorefrontSettings(settings)
  const basePriceValue = Number(product?.priceValue)
  const promoPriceValue = Number(product?.salePriceValue)
  const hasValidPromoPrice = Number.isFinite(promoPriceValue) && promoPriceValue > 0 && (!Number.isFinite(basePriceValue) || promoPriceValue < basePriceValue)
  const saleActive = normalizedSettings.saleEnabled && hasValidPromoPrice
  const effectiveDiscountPercent =
    saleActive && Number.isFinite(basePriceValue) && basePriceValue > 0
      ? Math.round(((basePriceValue - promoPriceValue) / basePriceValue) * 100)
      : 0

  return {
    ...product,
    saleActive,
    saleBadgeLabel: saleActive ? normalizedSettings.saleBadgeLabel : null,
    salePrice: saleActive ? product.salePrice : null,
    salePriceValue: saleActive ? product.salePriceValue : null,
    discountPercent: saleActive ? effectiveDiscountPercent : 0
  }
}

export const applyStorefrontPricingToCategories = (categories = [], settings = DEFAULT_STOREFRONT_SETTINGS) =>
  categories.map((category) => ({
    ...category,
    products: (category.products || []).map((product) => applyStorefrontPricingToProduct(product, settings))
  }))
