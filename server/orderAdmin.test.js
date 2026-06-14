import test from 'node:test'
import assert from 'node:assert/strict'
import {
  buildAdminOrderUpdateInput,
  buildOrderSortClause,
  buildOrderWhereClause,
  buildOrdersCsv,
  computeOrderFlags,
  sanitizeOrderQuery,
  serializeOrder,
  validateAdminOrderUpdatePayload
} from './orderAdmin.js'

test('sanitizeOrderQuery normalizuje filtry i paginacje', () => {
  const filters = sanitizeOrderQuery({
    search: ' TG-2026 ',
    page: '3',
    pageSize: '150',
    sortBy: 'total',
    sortDirection: 'asc',
    attentionOnly: 'true'
  })

  assert.equal(filters.search, 'TG-2026')
  assert.equal(filters.page, 3)
  assert.equal(filters.pageSize, 100)
  assert.equal(filters.sortBy, 'total')
  assert.equal(filters.sortDirection, 'asc')
  assert.equal(filters.attentionOnly, true)
})

test('buildOrderWhereClause buduje wyszukiwanie pelnotekstowe i filtry', () => {
  const where = buildOrderWhereClause({
    search: 'cebula',
    paymentStatus: 'paid',
    fulfillmentStatus: 'processing',
    courierCompany: 'inpost',
    attentionOnly: true
  })

  assert.equal(where.paymentStatus, 'paid')
  assert.equal(where.fulfillmentStatus, 'processing')
  assert.equal(where.courierCompany, 'inpost')
  assert.equal(where.needsAttention, true)
  assert.equal(where.OR.length > 3, true)
  assert.deepEqual(buildOrderSortClause({ sortBy: 'createdAt', sortDirection: 'desc' }), { createdAt: 'desc' })
})

test('computeOrderFlags wykrywa zamowienie wymagajace uwagi', () => {
  const order = {
    paymentStatus: 'paid',
    fulfillmentStatus: 'processing',
    shipmentStatus: 'created',
    needsAttention: false,
    createdAt: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString()
  }

  const flags = computeOrderFlags(order, new Date())
  assert.equal(flags.requiresAttention, true)
  assert.equal(flags.overdue, true)
})

test('serializeOrder przygotowuje pelne dane do admina i trackingu', () => {
  const serialized = serializeOrder({
    id: 'o1',
    orderNumber: 'TG-2026-123456',
    email: 'jan@example.com',
    phone: '500600700',
    checkoutMode: 'standard',
    firstName: 'Jan',
    lastName: 'Kowalski',
    country: 'Polska',
    city: 'Krakow',
    postalCode: '30-001',
    street: 'Dluga',
    houseNumber: '10/2',
    companyName: null,
    nip: null,
    subtotal: 199,
    discount: 0,
    shipping: 15,
    total: 214,
    goodsValue: 199,
    paymentProvider: 'stripe',
    paymentStatus: 'paid',
    fulfillmentStatus: 'processing',
    shipmentStatus: 'created',
    courierCompany: 'inpost',
    deliveryMethod: 'inpost_courier',
    inpostPointId: null,
    inpostPointName: null,
    inpostPointAddress: null,
    inpostPointCity: null,
    inpostPointPostalCode: null,
    shipmentId: null,
    trackingNumber: '123',
    labelUrl: null,
    packageWeight: 0.5,
    packageLength: 35,
    packageWidth: 30,
    packageHeight: 5,
    orderNotes: 'Zostaw pod drzwiami',
    adminNotes: '',
    needsAttention: false,
    trackingToken: 'token',
    appliedCode: null,
    partnerId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    items: [
      { id: 'i1', productId: 'p1', productName: 'Koszulka', variantId: null, size: 'L', quantity: 2, unitPrice: 99.5, currency: 'PLN', image: null }
    ]
  })

  assert.equal(serialized.recipientName, 'Jan Kowalski')
  assert.equal(serialized.itemCount, 2)
  assert.match(serialized.fullAddress, /Dluga/)
  assert.equal(serialized.formatted.total, '214.00 PLN')
})

test('buildOrdersCsv generuje plik kompatybilny z Excelem', () => {
  const csv = buildOrdersCsv([
    {
      id: 'o1',
      orderNumber: 'TG-2026-123456',
      email: 'jan@example.com',
      phone: '500600700',
      checkoutMode: 'standard',
      firstName: 'Jan',
      lastName: 'Kowalski',
      country: 'Polska',
      city: 'Krakow',
      postalCode: '30-001',
      street: 'Dluga',
      houseNumber: '10/2',
      companyName: null,
      nip: null,
      subtotal: 199,
      discount: 0,
      shipping: 15,
      total: 214,
      goodsValue: 199,
      paymentProvider: 'stripe',
      paymentStatus: 'paid',
      fulfillmentStatus: 'processing',
      shipmentStatus: 'created',
      courierCompany: 'inpost',
      deliveryMethod: 'inpost_courier',
      inpostPointId: null,
      inpostPointName: null,
      inpostPointAddress: null,
      inpostPointCity: null,
      inpostPointPostalCode: null,
      shipmentId: null,
      trackingNumber: '123',
      labelUrl: null,
      packageWeight: 0.5,
      packageLength: 35,
      packageWidth: 30,
      packageHeight: 5,
      orderNotes: '',
      adminNotes: '',
      needsAttention: false,
      trackingToken: 'token',
      appliedCode: null,
      partnerId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [
        { id: 'i1', productId: 'p1', productName: 'Koszulka', variantId: null, size: 'L', quantity: 1, unitPrice: 199, currency: 'PLN', image: null }
      ]
    }
  ])

  assert.equal(csv.startsWith('\uFEFF'), true)
  assert.match(csv, /Numer zamowienia/)
  assert.match(csv, /TG-2026-123456/)
})

test('validateAdminOrderUpdatePayload waliduje pola wysylkowe', () => {
  const invalid = validateAdminOrderUpdatePayload({
    paymentStatus: 'oops',
    phone: '12',
    packageWeight: -1
  })

  assert.equal(invalid.valid, false)
  assert.match(invalid.errors.paymentStatus, /Nieprawidlowy/)
  assert.match(invalid.errors.phone, /Telefon|numer telefonu|poprawny/)
  assert.match(invalid.errors.packageWeight, /liczbowa/)

  const payload = buildAdminOrderUpdateInput({
    email: 'jan@example.com',
    phone: '+48 500 600 700',
    courierCompany: 'INPOST',
    goodsValue: '199.90',
    needsAttention: true
  })

  assert.equal(payload.phone, '+48500600700')
  assert.equal(payload.courierCompany, 'inpost')
  assert.equal(payload.goodsValue, 199.9)
  assert.equal(payload.needsAttention, true)
})
