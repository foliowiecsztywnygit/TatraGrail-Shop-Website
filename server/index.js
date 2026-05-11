import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2023-10-16',
});

const getDropStartMs = () => {
  if (!process.env.DROP_START_AT) return null;
  const ms = new Date(process.env.DROP_START_AT).getTime();
  return Number.isFinite(ms) ? ms : null;
};

const isDropLive = () => {
  const ms = getDropStartMs();
  if (!ms) return true;
  return Date.now() >= ms;
};

const toBase64Url = (str) =>
  Buffer.from(str, 'utf8').toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const fromBase64Url = (str) => {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
  const base64 = (str + pad).replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(base64, 'base64').toString('utf8');
};

const signDropToken = (payloadB64) => {
  const secret = process.env.DROP_TOKEN_SECRET || process.env.DROP_PASSWORD || 'dev_drop_secret';
  return crypto.createHmac('sha256', secret).update(payloadB64).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

const createDropToken = () => {
  const startMs = getDropStartMs();
  const exp = startMs ? startMs + 24 * 60 * 60 * 1000 : Date.now() + 24 * 60 * 60 * 1000;
  const payloadB64 = toBase64Url(JSON.stringify({ exp }));
  const sig = signDropToken(payloadB64);
  return `${payloadB64}.${sig}`;
};

const isValidDropToken = (token) => {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payloadB64, sig] = parts;
  const expected = signDropToken(payloadB64);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    if (!crypto.timingSafeEqual(a, b)) return false;
  } catch (e) {
    return false;
  }

  try {
    const payload = JSON.parse(fromBase64Url(payloadB64));
    if (!payload?.exp) return false;
    if (Date.now() > payload.exp) return false;
    return true;
  } catch (e) {
    return false;
  }
};

const getDropTokenFromReq = (req) => {
  const header = req.headers['x-drop-token'];
  if (typeof header === 'string' && header.trim()) return header.trim();
  const auth = req.headers['authorization'];
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) return auth.slice('Bearer '.length).trim();
  return null;
};

// --- INPOST API INTEGRATION ---
const createInPostShipment = async (order) => {
  if (process.env.INPOST_API_TOKEN === 'mock_inpost_token' || !process.env.INPOST_API_TOKEN) {
    console.log('Using mock InPost API - returning fake tracking number');
    return {
      shipmentId: `mock_shipment_${crypto.randomUUID().substring(0, 8)}`,
      trackingNumber: `6${Math.floor(Math.random() * 10000000000000000000000).toString().padStart(23, '0')}`,
      status: 'created'
    };
  }

  // Calculate size based on items
  // Simple logic:
  // 1-2 items = size A (small)
  // 3-4 items = size B (medium)
  // 5+ items = size C (large)
  const totalItems = order.items.reduce((acc, item) => acc + item.quantity, 0);
  let size = 'A';
  if (totalItems > 2 && totalItems <= 4) size = 'B';
  if (totalItems > 4) size = 'C';

  const baseUrl = process.env.INPOST_ENV === 'production' 
    ? 'https://api.inpost-group.com' 
    : 'https://sandbox-api.inpost-group.com';
    
  const isLocker = order.deliveryMethod === 'inpost_locker';
  const serviceId = isLocker ? 'inpost_locker_standard' : 'inpost_courier_standard';

  const payload = {
    receiver: {
      first_name: order.firstName,
      last_name: order.lastName,
      email: order.email,
      phone: '111222333', // In real app, we should collect phone number
      address: isLocker ? undefined : {
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
          length: size === 'A' ? 80 : size === 'B' ? 190 : 410,
          width: 380,
          height: 640,
          unit: 'mm'
        },
        weight: {
          amount: size === 'A' ? 1 : size === 'B' ? 3 : 5,
          unit: 'kg'
        }
      }
    ],
    service: serviceId,
    custom_attributes: isLocker ? {
      target_point: order.inpostPointId
    } : undefined,
    reference: order.orderNumber
  };

  try {
    const res = await fetch(`${baseUrl}/shipping/v2/organizations/${process.env.INPOST_ORG_ID}/shipments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.INPOST_API_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`InPost API error: ${res.status} ${errText}`);
    }

    const data = await res.json();
    return {
      shipmentId: data.id,
      trackingNumber: data.tracking_number,
      status: data.status
    };
  } catch (error) {
    console.error('Failed to create InPost shipment', error);
    throw error;
  }
};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER || 'mockUser',
    pass: process.env.SMTP_PASS || 'mockPass',
  },
});

const sendOrderConfirmationEmail = async (order) => {
  const isLocker = order.deliveryMethod === 'inpost_locker';
  const deliveryInfo = isLocker 
    ? `Paczkomat InPost: <strong>${order.inpostPointId}</strong><br/>${order.inpostPointAddress}, ${order.inpostPointPostalCode} ${order.inpostPointCity}`
    : `Kurier InPost<br/>${order.street} ${order.houseNumber}, ${order.postalCode} ${order.city}`;

  const trackingInfo = order.trackingNumber 
    ? `<p>Numer przesyłki: <strong>${order.trackingNumber}</strong></p><p><a href="https://inpost.pl/sledzenie-przesylek?number=${order.trackingNumber}" target="_blank">Śledź przesyłkę na stronie InPost</a></p>`
    : '';

  const mailOptions = {
    from: '"TatraGrail" <no-reply@tatragrail.com>',
    to: order.email,
    subject: `Potwierdzenie zamówienia ${order.orderNumber}`,
    html: `
      <h1>Dziękujemy za zakupy w TatraGrail!</h1>
      <p>Twoje zamówienie <strong>${order.orderNumber}</strong> zostało opłacone i jest w trakcie realizacji.</p>
      <p>Kwota zamówienia: <strong>${order.total.toFixed(2)} PLN</strong></p>
      
      <h3>Dane dostawy:</h3>
      <p>${deliveryInfo}</p>
      ${trackingInfo}
      
      <br/><br/>
      <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/tracking/${order.trackingToken}" style="display:inline-block;padding:10px 20px;background:#000;color:#fff;text-decoration:none;">Szczegóły zamówienia</a>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${order.email}`);
  } catch (error) {
    console.error('Failed to send confirmation email', error);
  }
};

// For webhook, we need raw body
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;
    
    // Update order status
    try {
      const order = await prisma.order.update({
        where: { id: orderId },
        data: { 
          paymentStatus: 'paid',
          paymentProvider: 'stripe'
        }
      });
      console.log(`Order ${order.orderNumber} marked as paid via PaymentIntent.`);
      
      // Create shipment
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
        console.log(`Shipment created for order ${order.orderNumber}. Tracking: ${shipmentData.trackingNumber}`);
        
        order.trackingNumber = shipmentData.trackingNumber;
      } catch (shipmentError) {
        console.error(`Failed to create shipment for order ${order.orderNumber}`, shipmentError);
      }

      await sendOrderConfirmationEmail(order);
    } catch (error) {
      console.error('Error updating order on webhook', error);
    }
  } else if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    const orderId = paymentIntent.metadata.orderId;
    try {
      if (orderId) {
        await prisma.order.update({
          where: { id: orderId },
          data: { paymentStatus: 'failed' }
        });
      }
    } catch (error) {}
  }

  res.send();
});

// Normal JSON parsing for other routes
app.use(express.json());
app.use(cors());

// --- ROUTES ---

app.get('/api/drop/status', (req, res) => {
  res.json({ live: isDropLive(), dropStartAt: process.env.DROP_START_AT || null });
});

app.post('/api/drop/unlock', (req, res) => {
  const { password } = req.body || {};
  if (!process.env.DROP_PASSWORD) return res.status(400).json({ error: 'DROP_PASSWORD not configured' });
  if (!password || password !== process.env.DROP_PASSWORD) return res.status(401).json({ error: 'Invalid password' });
  const token = createDropToken();
  res.json({ ok: true, token });
});

// 1. Validate Discount Code
app.post('/api/discount/validate', async (req, res) => {
  const { code, cartTotal } = req.body;
  if (!code) return res.status(400).json({ error: 'Code is required' });

  try {
    const promo = await prisma.promoCode.findUnique({ where: { code } });
    if (!promo) return res.status(404).json({ error: 'Code not found' });
    if (!promo.active) return res.status(400).json({ error: 'Code is inactive' });
    if (promo.expiration && promo.expiration < new Date()) return res.status(400).json({ error: 'Code expired' });
    if (promo.usageLimit && promo.usageCount >= promo.usageLimit) return res.status(400).json({ error: 'Usage limit exceeded' });
    if (promo.minimumCartValue && cartTotal < promo.minimumCartValue) return res.status(400).json({ error: `Minimum cart value is ${promo.minimumCartValue}` });

    res.json({ success: true, promo });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 2. Create Payment Intent (Stripe + BLIK)
app.post('/api/create-payment-intent', async (req, res) => {
  const { cart, customer, promoCode, delivery } = req.body;

  if (!cart || cart.length === 0) return res.status(400).json({ error: 'Cart is empty' });

  const dropToken = getDropTokenFromReq(req);
  if (!isDropLive() && !isValidDropToken(dropToken)) {
    return res.status(403).json({ error: 'Drop is locked' });
  }
  
  if (delivery?.method === 'inpost_locker' && !delivery?.point?.id) {
    return res.status(400).json({ error: 'Należy wybrać paczkomat InPost' });
  }

  try {
    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.unitPrice * item.quantity;
    });

    let discount = 0;
    let appliedCode = null;
    let partnerId = null;

    if (promoCode) {
      const promo = await prisma.promoCode.findUnique({ where: { code: promoCode } });
      if (promo && promo.active && (!promo.expiration || promo.expiration > new Date())) {
        if (promo.type === 'percentage') {
          discount = subtotal * (promo.value / 100);
        } else {
          discount = promo.value;
        }
        appliedCode = promo.code;
        partnerId = promo.partnerId;
        
        await prisma.promoCode.update({
          where: { code: promo.code },
          data: { usageCount: { increment: 1 } }
        });
      }
    }

    const shipping = 15.00;
    const total = subtotal - discount + shipping;

    const orderNumber = `TG-${new Date().getFullYear()}-${crypto.randomInt(100000, 999999)}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        country: customer.country,
        city: customer.city,
        postalCode: customer.postalCode,
        street: customer.street,
        houseNumber: customer.houseNumber,
        companyName: customer.companyName,
        nip: customer.nip,
        subtotal,
        discount,
        shipping,
        total,
        appliedCode,
        partnerId,
        deliveryMethod: delivery?.method || 'inpost_courier',
        inpostPointId: delivery?.point?.id || null,
        inpostPointName: delivery?.point?.name || null,
        inpostPointAddress: delivery?.point?.address || null,
        inpostPointCity: delivery?.point?.city || null,
        inpostPointPostalCode: delivery?.point?.postalCode || null,
        items: {
          create: cart.map(item => ({
            productId: item.productId,
            variantId: item.variantId,
            size: item.size,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            productName: item.productName,
            image: item.image
          }))
        }
      }
    });

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_mock') {
      // Mock logic for local testing without real Stripe keys
      return res.json({ 
        clientSecret: 'mock_secret_client', 
        orderId: order.id, 
        trackingToken: order.trackingToken,
        mockUrl: `http://localhost:${process.env.PORT || 3000}/api/mock-stripe/${order.id}`
      });
    }

    // Create Stripe PaymentIntent with BLIK and card
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency: 'pln',
      payment_method_types: ['card', 'blik'],
      metadata: { orderId: order.id }
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripePaymentIntentId: paymentIntent.id }
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id,
      trackingToken: order.trackingToken
    });

  } catch (error) {
    console.error('Create PaymentIntent error:', error);
    res.status(500).json({ error: 'Failed: ' + error.message });
  }
});

// 3. Get Order details for tracking
app.get('/api/order/:trackingToken', async (req, res) => {
  const { trackingToken } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: { trackingToken },
      include: { items: true }
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 4. Mock Stripe Routes
app.get('/api/mock-stripe/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  
  if (!order) return res.status(404).send('Order not found');

  res.send(`
    <html>
      <head>
        <title>Mock Stripe Checkout - TatraGrail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #0a0a0a; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; color: white; }
          .card { background: #111; padding: 40px; border: 1px solid #333; text-align: center; max-width: 400px; width: 100%; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          h2 { text-transform: uppercase; letter-spacing: 2px; margin-top: 0; }
          .price { font-size: 24px; font-weight: bold; margin: 20px 0; }
          button { background: white; color: black; border: none; padding: 16px 24px; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; width: 100%; margin-top: 20px; transition: background 0.2s; }
          button:hover { background: #e5e5e5; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Stripe Test Payment</h2>
          <p style="color: #888; margin-bottom: 30px;">(Środowisko testowe / Mockup)</p>
          <p>Zamówienie: <strong>${order.orderNumber}</strong></p>
          <div class="price">${order.total.toFixed(2)} PLN</div>
          <form method="POST" action="/api/mock-stripe/${orderId}/pay">
            <button type="submit">ZAPŁAĆ (MOCK)</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post('/api/mock-stripe/:orderId/pay', async (req, res) => {
  const { orderId } = req.params;
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  
  if (!order) return res.status(404).send('Order not found');

  // Update order status
  await prisma.order.update({
    where: { id: orderId },
    data: { 
      paymentStatus: 'paid',
      paymentProvider: 'mock_stripe'
    }
  });

  // Create mock shipment
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

  // Simulate Webhook Email Notification
  await sendOrderConfirmationEmail(order);

  // Redirect to tracking page
  res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/tracking/${order.trackingToken}?success=true`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
