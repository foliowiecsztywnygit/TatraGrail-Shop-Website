export const ORDER_PAYMENT_STATUSES = ['pending', 'paid', 'failed', 'canceled', 'refunded', 'expired']
export const ORDER_FULFILLMENT_STATUSES = ['processing', 'packed', 'shipped', 'delivered', 'returned', 'canceled']
export const ORDER_SHIPMENT_STATUSES = ['created', 'confirmed', 'sent', 'delivered', 'returned', 'failed', 'unknown']
export const ORDER_DELIVERY_METHODS = ['inpost_courier', 'inpost_locker']

const DEFAULT_SORT_BY = 'createdAt'
const DEFAULT_SORT_DIRECTION = 'desc'
const ORDER_SORTABLE_FIELDS = new Set(['createdAt', 'updatedAt', 'total', 'goodsValue', 'paymentStatus', 'fulfillmentStatus'])

const normalizeString = (value) => String(value || '').trim()
const normalizeNullableString = (value) => {
  const normalized = normalizeString(value)
  return normalized || null
}

const normalizeNumber = (value) => {
  if (value === '' || value === null || value === undefined) return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : NaN
}

const createDateBoundary = (value, endOfDay = false) => {
  const source = normalizeString(value)
  if (!source) return null
  const date = new Date(source)
  if (Number.isNaN(date.getTime())) return null
  if (endOfDay) {
    date.setHours(23, 59, 59, 999)
  } else {
    date.setHours(0, 0, 0, 0)
  }
  return date
}

export const sanitizeOrderQuery = (query = {}) => {
  const page = Math.max(1, Number.parseInt(query.page, 10) || 1)
  const pageSize = Math.min(100, Math.max(1, Number.parseInt(query.pageSize, 10) || 20))
  const sortBy = ORDER_SORTABLE_FIELDS.has(normalizeString(query.sortBy)) ? normalizeString(query.sortBy) : DEFAULT_SORT_BY
  const sortDirection = normalizeString(query.sortDirection) === 'asc' ? 'asc' : DEFAULT_SORT_DIRECTION

  return {
    search: normalizeString(query.search),
    paymentStatus: normalizeString(query.paymentStatus),
    fulfillmentStatus: normalizeString(query.fulfillmentStatus),
    courierCompany: normalizeString(query.courierCompany),
    deliveryMethod: normalizeString(query.deliveryMethod),
    shipmentStatus: normalizeString(query.shipmentStatus),
    attentionOnly: normalizeString(query.attentionOnly) === 'true',
    createdFrom: createDateBoundary(query.createdFrom),
    createdTo: createDateBoundary(query.createdTo, true),
    sortBy,
    sortDirection,
    page,
    pageSize
  }
}

export const buildOrderWhereClause = (filters = {}) => {
  const search = normalizeString(filters.search)
  const or = search
    ? [
        { orderNumber: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
        { trackingNumber: { contains: search } },
        { firstName: { contains: search } },
        { lastName: { contains: search } },
        { city: { contains: search } },
        { street: { contains: search } },
        { inpostPointId: { contains: search } },
        { items: { some: { productName: { contains: search } } } }
      ]
    : []

  return {
    ...(or.length ? { OR: or } : {}),
    ...(filters.paymentStatus ? { paymentStatus: filters.paymentStatus } : {}),
    ...(filters.fulfillmentStatus ? { fulfillmentStatus: filters.fulfillmentStatus } : {}),
    ...(filters.deliveryMethod ? { deliveryMethod: filters.deliveryMethod } : {}),
    ...(filters.courierCompany ? { courierCompany: filters.courierCompany.toLowerCase() } : {}),
    ...(filters.shipmentStatus ? { shipmentStatus: filters.shipmentStatus } : {}),
    ...(filters.attentionOnly ? { needsAttention: true } : {}),
    ...(filters.createdFrom || filters.createdTo
      ? {
          createdAt: {
            ...(filters.createdFrom ? { gte: filters.createdFrom } : {}),
            ...(filters.createdTo ? { lte: filters.createdTo } : {})
          }
        }
      : {})
  }
}

export const buildOrderSortClause = (filters = {}) => ({
  [filters.sortBy || DEFAULT_SORT_BY]: filters.sortDirection || DEFAULT_SORT_DIRECTION
})

export const computeOrderFlags = (order, now = new Date()) => {
  const createdAt = order?.createdAt ? new Date(order.createdAt) : null
  const ageMs = createdAt ? now.getTime() - createdAt.getTime() : 0
  const hoursSinceCreation = Math.max(0, Math.floor(ageMs / (1000 * 60 * 60)))
  const isPendingPaymentTooLong = order?.paymentStatus === 'pending' && hoursSinceCreation >= 2
  const isPaidButNotShipped = order?.paymentStatus === 'paid' && !['shipped', 'delivered', 'returned', 'canceled'].includes(order?.fulfillmentStatus) && hoursSinceCreation >= 24
  const isShipmentStuck = order?.fulfillmentStatus === 'shipped' && order?.shipmentStatus && !['delivered', 'returned'].includes(order.shipmentStatus) && hoursSinceCreation >= 72
  const requiresAttention = Boolean(order?.needsAttention || isPendingPaymentTooLong || isPaidButNotShipped || isShipmentStuck)
  const overdue = Boolean(isPaidButNotShipped || isShipmentStuck)

  return {
    requiresAttention,
    overdue,
    hoursSinceCreation
  }
}

const formatMoney = (value) => `${Number(value || 0).toFixed(2)} PLN`

const buildAddressLines = (order) => {
  if (order.deliveryMethod === 'inpost_locker') {
    const line1 = order.inpostPointId ? `Paczkomat ${order.inpostPointId}` : 'Paczkomat InPost'
    const line2 = [order.inpostPointAddress, [order.inpostPointPostalCode, order.inpostPointCity].filter(Boolean).join(' ')].filter(Boolean).join(', ')
    return [line1, line2].filter(Boolean)
  }

  return [
    [order.street, order.houseNumber].filter(Boolean).join(' '),
    [order.postalCode, order.city].filter(Boolean).join(' '),
    order.country
  ].filter(Boolean)
}

export const serializeOrder = (order) => {
  const flags = computeOrderFlags(order)
  const addressLines = buildAddressLines(order)
  const items = Array.isArray(order.items) ? order.items : []
  const recipientName = [order.firstName, order.lastName].filter(Boolean).join(' ').trim()

  return {
    id: order.id,
    orderNumber: order.orderNumber,
    email: order.email,
    phone: order.phone,
    checkoutMode: order.checkoutMode,
    recipientName,
    firstName: order.firstName,
    lastName: order.lastName,
    country: order.country,
    city: order.city,
    postalCode: order.postalCode,
    street: order.street,
    houseNumber: order.houseNumber,
    companyName: order.companyName,
    nip: order.nip,
    fullAddress: addressLines.join('\n'),
    addressLines,
    subtotal: order.subtotal,
    discount: order.discount,
    shipping: order.shipping,
    total: order.total,
    goodsValue: order.goodsValue ?? order.subtotal,
    paymentProvider: order.paymentProvider,
    paymentStatus: order.paymentStatus,
    fulfillmentStatus: order.fulfillmentStatus,
    shipmentStatus: order.shipmentStatus || 'unknown',
    courierCompany: order.courierCompany || 'inpost',
    deliveryMethod: order.deliveryMethod,
    inpostPointId: order.inpostPointId,
    inpostPointName: order.inpostPointName,
    inpostPointAddress: order.inpostPointAddress,
    inpostPointCity: order.inpostPointCity,
    inpostPointPostalCode: order.inpostPointPostalCode,
    shipmentId: order.shipmentId,
    trackingNumber: order.trackingNumber,
    labelUrl: order.labelUrl,
    packageWeight: order.packageWeight,
    packageLength: order.packageLength,
    packageWidth: order.packageWidth,
    packageHeight: order.packageHeight,
    orderNotes: order.orderNotes || '',
    adminNotes: order.adminNotes || '',
    needsAttention: Boolean(order.needsAttention),
    flags,
    trackingToken: order.trackingToken,
    appliedCode: order.appliedCode,
    partnerId: order.partnerId,
    itemCount: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
    itemSummary: items.map((item) => `${item.productName} x${item.quantity}`).join(', '),
    items: items.map((item) => ({
      id: item.id,
      productId: item.productId,
      productName: item.productName,
      variantId: item.variantId,
      size: item.size,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      currency: item.currency,
      image: item.image
    })),
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    formatted: {
      subtotal: formatMoney(order.subtotal),
      discount: formatMoney(order.discount),
      shipping: formatMoney(order.shipping),
      total: formatMoney(order.total),
      goodsValue: formatMoney(order.goodsValue ?? order.subtotal)
    }
  }
}

export const serializeOrderListItem = (order) => {
  const serialized = serializeOrder(order)
  return {
    id: serialized.id,
    orderNumber: serialized.orderNumber,
    recipientName: serialized.recipientName,
    email: serialized.email,
    phone: serialized.phone,
    total: serialized.total,
    goodsValue: serialized.goodsValue,
    formatted: serialized.formatted,
    paymentStatus: serialized.paymentStatus,
    fulfillmentStatus: serialized.fulfillmentStatus,
    shipmentStatus: serialized.shipmentStatus,
    courierCompany: serialized.courierCompany,
    deliveryMethod: serialized.deliveryMethod,
    trackingNumber: serialized.trackingNumber,
    itemCount: serialized.itemCount,
    itemSummary: serialized.itemSummary,
    needsAttention: serialized.flags.requiresAttention,
    overdue: serialized.flags.overdue,
    createdAt: serialized.createdAt,
    updatedAt: serialized.updatedAt
  }
}

const escapeCsvCell = (value) => {
  const text = String(value ?? '')
  const escaped = text.replace(/"/g, '""')
  return `"${escaped}"`
}

export const buildOrdersCsv = (orders = []) => {
  const header = [
    'Numer zamowienia',
    'Data utworzenia',
    'Odbiorca',
    'Email',
    'Telefon',
    'Status platnosci',
    'Status realizacji',
    'Status przesylki',
    'Przewoznik',
    'Metoda dostawy',
    'Tracking',
    'Wartosc towaru',
    'Razem',
    'Waga paczki',
    'Dlugosc',
    'Szerokosc',
    'Wysokosc',
    'Adres',
    'Uwagi klienta',
    'Uwagi administracyjne',
    'Pozycje'
  ]

  const rows = orders.map((order) => {
    const serialized = serializeOrder(order)
    return [
      serialized.orderNumber,
      new Date(serialized.createdAt).toISOString(),
      serialized.recipientName,
      serialized.email,
      serialized.phone || '',
      serialized.paymentStatus,
      serialized.fulfillmentStatus,
      serialized.shipmentStatus,
      serialized.courierCompany,
      serialized.deliveryMethod,
      serialized.trackingNumber || '',
      serialized.formatted.goodsValue,
      serialized.formatted.total,
      serialized.packageWeight ?? '',
      serialized.packageLength ?? '',
      serialized.packageWidth ?? '',
      serialized.packageHeight ?? '',
      serialized.fullAddress,
      serialized.orderNotes,
      serialized.adminNotes,
      serialized.itemSummary
    ].map(escapeCsvCell).join(',')
  })

  return `\uFEFF${header.map(escapeCsvCell).join(',')}\n${rows.join('\n')}`
}

export const validateAdminOrderUpdatePayload = (body = {}) => {
  const errors = {}

  if (body.paymentStatus !== undefined && !ORDER_PAYMENT_STATUSES.includes(body.paymentStatus)) {
    errors.paymentStatus = 'Nieprawidlowy status platnosci.'
  }

  if (body.fulfillmentStatus !== undefined && !ORDER_FULFILLMENT_STATUSES.includes(body.fulfillmentStatus)) {
    errors.fulfillmentStatus = 'Nieprawidlowy status realizacji.'
  }

  if (body.shipmentStatus !== undefined && body.shipmentStatus !== null && !ORDER_SHIPMENT_STATUSES.includes(body.shipmentStatus)) {
    errors.shipmentStatus = 'Nieprawidlowy status przesylki.'
  }

  if (body.deliveryMethod !== undefined && !ORDER_DELIVERY_METHODS.includes(body.deliveryMethod)) {
    errors.deliveryMethod = 'Nieprawidlowa metoda dostawy.'
  }

  if (body.email !== undefined && (!normalizeString(body.email) || !/^\S+@\S+\.\S+$/.test(normalizeString(body.email)))) {
    errors.email = 'Podaj poprawny adres email.'
  }

  if (body.phone !== undefined) {
    const digits = normalizeString(body.phone).replace(/[^\d+]/g, '')
    if (!digits || digits.length < 9) {
      errors.phone = 'Podaj poprawny numer telefonu.'
    }
  }

  ;['firstName', 'lastName', 'city', 'postalCode', 'street', 'houseNumber', 'country', 'courierCompany'].forEach((field) => {
    if (body[field] !== undefined && !normalizeString(body[field])) {
      errors[field] = 'To pole jest wymagane.'
    }
  })

  ;['packageWeight', 'packageLength', 'packageWidth', 'packageHeight', 'goodsValue'].forEach((field) => {
    if (body[field] !== undefined) {
      const numberValue = normalizeNumber(body[field])
      if (Number.isNaN(numberValue) || numberValue < 0) {
        errors[field] = 'Podaj poprawna wartosc liczbowa.'
      }
    }
  })

  if (body.trackingNumber !== undefined && body.trackingNumber !== null && !normalizeString(body.trackingNumber)) {
    errors.trackingNumber = 'Numer sledzenia nie moze byc pusty.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export const buildAdminOrderUpdateInput = (body = {}) => ({
  ...(body.email !== undefined ? { email: normalizeString(body.email) } : {}),
  ...(body.phone !== undefined ? { phone: normalizeString(body.phone).replace(/[^\d+]/g, '') } : {}),
  ...(body.firstName !== undefined ? { firstName: normalizeString(body.firstName) } : {}),
  ...(body.lastName !== undefined ? { lastName: normalizeString(body.lastName) } : {}),
  ...(body.country !== undefined ? { country: normalizeString(body.country) } : {}),
  ...(body.city !== undefined ? { city: normalizeString(body.city) } : {}),
  ...(body.postalCode !== undefined ? { postalCode: normalizeString(body.postalCode) } : {}),
  ...(body.street !== undefined ? { street: normalizeString(body.street) } : {}),
  ...(body.houseNumber !== undefined ? { houseNumber: normalizeString(body.houseNumber) } : {}),
  ...(body.companyName !== undefined ? { companyName: normalizeNullableString(body.companyName) } : {}),
  ...(body.nip !== undefined ? { nip: normalizeNullableString(body.nip) } : {}),
  ...(body.paymentStatus !== undefined ? { paymentStatus: body.paymentStatus } : {}),
  ...(body.fulfillmentStatus !== undefined ? { fulfillmentStatus: body.fulfillmentStatus } : {}),
  ...(body.shipmentStatus !== undefined ? { shipmentStatus: normalizeNullableString(body.shipmentStatus) } : {}),
  ...(body.deliveryMethod !== undefined ? { deliveryMethod: body.deliveryMethod } : {}),
  ...(body.courierCompany !== undefined ? { courierCompany: normalizeString(body.courierCompany).toLowerCase() } : {}),
  ...(body.trackingNumber !== undefined ? { trackingNumber: normalizeNullableString(body.trackingNumber) } : {}),
  ...(body.labelUrl !== undefined ? { labelUrl: normalizeNullableString(body.labelUrl) } : {}),
  ...(body.inpostPointId !== undefined ? { inpostPointId: normalizeNullableString(body.inpostPointId) } : {}),
  ...(body.inpostPointName !== undefined ? { inpostPointName: normalizeNullableString(body.inpostPointName) } : {}),
  ...(body.inpostPointAddress !== undefined ? { inpostPointAddress: normalizeNullableString(body.inpostPointAddress) } : {}),
  ...(body.inpostPointCity !== undefined ? { inpostPointCity: normalizeNullableString(body.inpostPointCity) } : {}),
  ...(body.inpostPointPostalCode !== undefined ? { inpostPointPostalCode: normalizeNullableString(body.inpostPointPostalCode) } : {}),
  ...(body.packageWeight !== undefined ? { packageWeight: normalizeNumber(body.packageWeight) } : {}),
  ...(body.packageLength !== undefined ? { packageLength: normalizeNumber(body.packageLength) } : {}),
  ...(body.packageWidth !== undefined ? { packageWidth: normalizeNumber(body.packageWidth) } : {}),
  ...(body.packageHeight !== undefined ? { packageHeight: normalizeNumber(body.packageHeight) } : {}),
  ...(body.goodsValue !== undefined ? { goodsValue: normalizeNumber(body.goodsValue) } : {}),
  ...(body.orderNotes !== undefined ? { orderNotes: normalizeNullableString(body.orderNotes) } : {}),
  ...(body.adminNotes !== undefined ? { adminNotes: normalizeNullableString(body.adminNotes) } : {}),
  ...(body.needsAttention !== undefined ? { needsAttention: Boolean(body.needsAttention) } : {})
})
