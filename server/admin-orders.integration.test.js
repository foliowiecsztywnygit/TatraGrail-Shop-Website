import test, { after, before } from 'node:test'
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import { execSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const tempDbPath = path.join(__dirname, '.tmp-admin-orders-test.sqlite')

process.env.NODE_ENV = 'test'
process.env.DATABASE_URL = `file:${tempDbPath.replace(/\\/g, '/')}`
process.env.STRIPE_SECRET_KEY = 'sk_test_mock'
process.env.ADMIN_TOKEN_SECRET = 'test-admin-secret'

let app
let prisma
let serverReady
let server
let baseUrl

const toBase64Url = (value) =>
  Buffer.from(value, 'utf8').toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')

const createAdminToken = (username = 'test-admin') => {
  const payloadB64 = toBase64Url(JSON.stringify({
    username,
    exp: Date.now() + 60 * 60 * 1000
  }))
  const signature = crypto.createHmac('sha256', process.env.ADMIN_TOKEN_SECRET).update(payloadB64).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  return `${payloadB64}.${signature}`
}

const authFetch = (pathname, options = {}) =>
  fetch(`${baseUrl}${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${createAdminToken()}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  })

before(async () => {
  await fs.rm(tempDbPath, { force: true })
  execSync('npx prisma db push --skip-generate', {
    cwd: path.join(__dirname, '..'),
    env: process.env,
    stdio: 'ignore'
  })
  ;({ app, prisma, serverReady } = await import('./index.js'))
  await serverReady
  server = app.listen(0)
  await new Promise((resolve) => server.once('listening', resolve))
  const address = server.address()
  baseUrl = `http://127.0.0.1:${address.port}`

  await prisma.order.create({
    data: {
      orderNumber: 'TG-2026-111111',
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
      subtotal: 199,
      discount: 0,
      shipping: 15,
      total: 214,
      goodsValue: 199,
      paymentProvider: 'mock_stripe',
      paymentStatus: 'paid',
      fulfillmentStatus: 'processing',
      deliveryMethod: 'inpost_courier',
      courierCompany: 'inpost',
      packageWeight: 0.6,
      packageLength: 35,
      packageWidth: 30,
      packageHeight: 5,
      items: {
        create: [
          {
            productId: 'product-1',
            productName: 'Koszulka Cebula',
            quantity: 1,
            unitPrice: 199,
            currency: 'PLN'
          }
        ]
      }
    }
  })

  await prisma.order.create({
    data: {
      orderNumber: 'TG-2026-222222',
      email: 'anna@example.com',
      phone: '501601701',
      checkoutMode: 'quick',
      firstName: 'Anna',
      lastName: 'Nowak',
      country: 'Polska',
      city: 'Warszawa',
      postalCode: '00-001',
      street: 'Paczkomat InPost',
      houseNumber: 'WAW01M',
      subtotal: 358.2,
      discount: 39.8,
      shipping: 0,
      total: 358.2,
      goodsValue: 398,
      paymentProvider: 'mock_stripe',
      paymentStatus: 'pending',
      fulfillmentStatus: 'processing',
      deliveryMethod: 'inpost_locker',
      courierCompany: 'inpost',
      inpostPointId: 'WAW01M',
      inpostPointAddress: 'Marszalkowska 1',
      inpostPointCity: 'Warszawa',
      inpostPointPostalCode: '00-001',
      needsAttention: true,
      items: {
        create: [
          {
            productId: 'product-2',
            productName: 'Koszulka Mokasynek',
            quantity: 2,
            unitPrice: 179.1,
            currency: 'PLN'
          }
        ]
      }
    }
  })
})

after(async () => {
  if (prisma) {
    await prisma.$disconnect()
  }
  if (server) {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()))
  }
  await fs.rm(tempDbPath, { force: true })
})

test('GET /api/admin/orders zwraca paginowana liste z filtrami', async () => {
  const response = await authFetch('/api/admin/orders?paymentStatus=paid&page=1&pageSize=10')
  assert.equal(response.status, 200)
  const payload = await response.json()

  assert.equal(payload.orders.length, 1)
  assert.equal(payload.orders[0].orderNumber, 'TG-2026-111111')
  assert.equal(payload.meta.total, 1)
})

test('GET /api/admin/orders/:id zwraca szczegoly wysylki', async () => {
  const order = await prisma.order.findUnique({ where: { orderNumber: 'TG-2026-222222' } })
  const response = await authFetch(`/api/admin/orders/${order.id}`)
  assert.equal(response.status, 200)
  const payload = await response.json()

  assert.equal(payload.order.inpostPointId, 'WAW01M')
  assert.equal(payload.order.items.length, 1)
  assert.equal(payload.order.flags.requiresAttention, true)
})

test('PATCH /api/admin/orders/:id aktualizuje statusy i dane paczki', async () => {
  const order = await prisma.order.findUnique({ where: { orderNumber: 'TG-2026-111111' } })
  const response = await authFetch(`/api/admin/orders/${order.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      fulfillmentStatus: 'shipped',
      shipmentStatus: 'sent',
      trackingNumber: 'NEWTRACK123',
      packageWeight: 0.9,
      adminNotes: 'Priorytet'
    })
  })

  assert.equal(response.status, 200)
  const payload = await response.json()
  assert.equal(payload.order.fulfillmentStatus, 'shipped')
  assert.equal(payload.order.shipmentStatus, 'sent')
  assert.equal(payload.order.trackingNumber, 'NEWTRACK123')
  assert.equal(payload.order.adminNotes, 'Priorytet')
})

test('GET /api/admin/orders/export zwraca CSV', async () => {
  const response = await authFetch('/api/admin/orders/export?sortBy=createdAt&sortDirection=desc', {
    headers: {
      Authorization: `Bearer ${createAdminToken()}`
    }
  })

  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type') || '', /text\/csv/)
  const text = await response.text()
  assert.match(text, /Numer zamowienia/)
  assert.match(text, /TG-2026-111111/)
  assert.match(text, /TG-2026-222222/)
})
