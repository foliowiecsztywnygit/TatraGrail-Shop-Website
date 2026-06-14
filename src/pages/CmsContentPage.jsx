import React, { useMemo, useState } from 'react'
import { Clock3, Mail, MapPin, Phone, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import { apiJson } from '../lib/api'
import { useSeo } from '../lib/seo'

function useProtectedFormState() {
  const [startedAt] = useState(Date.now())
  return startedAt
}

function Feedback({ error, success }) {
  if (!error && !success) return null

  return (
    <div className={`mt-3 border px-4 py-3 text-sm ${error ? 'border-red-500/40 bg-red-500/10 text-red-100' : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-100'}`}>
      {error || success}
    </div>
  )
}

function ReturnForm({ page }) {
  const startedAt = useProtectedFormState()
  const [form, setForm] = useState({
    orderNumber: '',
    fullName: '',
    email: '',
    reason: '',
    details: '',
    website: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      await apiJson('/api/return-requests', 'POST', {
        ...form,
        formStartedAt: startedAt
      })
      setSuccess('Zgloszenie zwrotu zostalo zapisane. Odpowiemy mailowo.')
      setForm({
        orderNumber: '',
        fullName: '',
        email: '',
        reason: '',
        details: '',
        website: ''
      })
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border border-zinc-800 bg-black/40 p-6">
      <h3 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-white">Formularz zwrotu</h3>
      <p className="mb-6 text-sm text-zinc-400">{page.customData?.returnInstructions || 'Uzupelnij dane, aby zglosic zwrot lub reklamacje.'}</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" value={form.orderNumber} onChange={(event) => setForm((prev) => ({ ...prev, orderNumber: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Numer zamowienia" required />
        <input type="text" value={form.fullName} onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Imie i nazwisko" required />
        <input type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Adres e-mail" required />
        <input type="text" value={form.reason} onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Powod zwrotu lub reklamacji" required />
        <textarea value={form.details} onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))} className="min-h-32 w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Dodatkowe informacje" />
        <input type="text" value={form.website} onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))} className="hidden" tabIndex="-1" autoComplete="off" />
        <button type="submit" disabled={loading} className="w-full border border-white bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white disabled:opacity-50">
          {loading ? 'Wysylanie...' : 'Wyslij zgloszenie'}
        </button>
        <Feedback error={error} success={success} />
      </form>
    </section>
  )
}

function ContactForm() {
  const startedAt = useProtectedFormState()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      await apiJson('/api/contact-submissions', 'POST', {
        ...form,
        formStartedAt: startedAt
      })
      setSuccess('Wiadomosc zostala wyslana. Odezwiemy sie jak najszybciej.')
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        website: ''
      })
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4 border border-zinc-800 bg-black/40 p-6" onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Formularz kontaktowy</h3>
      <input type="text" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Imie i nazwisko" required />
      <input type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Adres e-mail" required />
      <input type="tel" value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} className="w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Telefon" />
      <textarea value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className="min-h-32 w-full border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white" placeholder="Wiadomosc" required />
      <input type="text" value={form.website} onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))} className="hidden" tabIndex="-1" autoComplete="off" />
      <button type="submit" disabled={loading} className="w-full border border-white bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white disabled:opacity-50">
        {loading ? 'Wysylanie...' : 'Wyslij wiadomosc'}
      </button>
      <Feedback error={error} success={success} />
    </form>
  )
}

function ShippingMeta({ customData }) {
  const shippingMethods = customData?.shippingMethods || []
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {shippingMethods.map((method) => (
        <div key={`${method.name}-${method.price}`} className="border border-zinc-800 bg-black/40 p-6">
          <Truck className="mb-4 h-6 w-6 text-zinc-300" />
          <h3 className="text-lg font-bold text-white">{method.name}</h3>
          <p className="mt-2 text-sm text-zinc-400">Koszt: {method.price} PLN</p>
          <p className="text-sm text-zinc-400">Czas: {method.eta}</p>
        </div>
      ))}
    </div>
  )
}

function ContactMeta({ customData }) {
  const hours = customData?.workingHours || []
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4 border border-zinc-800 bg-black/40 p-6 text-sm text-zinc-300">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-zinc-400" />
          <div>
            <p className="font-bold text-white">{customData?.companyName || 'TatraGrail'}</p>
            <p>{customData?.address}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 text-zinc-400" />
          <a href={`mailto:${customData?.email || ''}`} className="hover:text-white">{customData?.email}</a>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 text-zinc-400" />
          <a href={`tel:${customData?.phone || ''}`} className="hover:text-white">{customData?.phone}</a>
        </div>
        <div className="flex items-start gap-3">
          <Clock3 className="mt-0.5 h-5 w-5 text-zinc-400" />
          <div className="space-y-1">
            {hours.map((item) => (
              <p key={item.label}>
                <span className="font-bold text-white">{item.label}:</span> {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-[320px] overflow-hidden border border-zinc-800 bg-zinc-900">
        {customData?.mapEmbedUrl ? (
          <iframe title="Mapa dojazdu" src={customData.mapEmbedUrl} className="h-full min-h-[320px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div className="flex h-full min-h-[320px] items-center justify-center text-zinc-500">Brak skonfigurowanej mapy.</div>
        )}
      </div>
    </div>
  )
}

function TermsArchive({ page }) {
  const updates = page.customData?.updates || []
  if (!updates.length) return null

  return (
    <section className="border border-zinc-800 bg-black/40 p-6">
      <h3 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-white">Historia aktualizacji</h3>
      <div className="space-y-3 text-sm text-zinc-300">
        {updates.map((update, index) => (
          <div key={`${update.label}-${index}`} className="border border-zinc-800 px-4 py-3">
            <p className="font-bold text-white">{update.label}</p>
            <p className="text-zinc-400">{update.publishedAt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function PrivacyLinks({ page }) {
  const links = page.customData?.consentLinks || []
  if (!links.length) return null

  return (
    <section className="border border-zinc-800 bg-black/40 p-6">
      <h3 className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-white">Narzedzia zgod</h3>
      <div className="flex flex-col gap-3 text-sm">
        {links.map((link) => (
          <a key={`${link.label}-${link.url}`} href={link.url} className="border border-zinc-700 px-4 py-3 text-zinc-200 transition hover:border-white hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function PageModules({ page }) {
  if (page.key === 'shipping-returns') {
    return (
      <div className="space-y-8">
        <ShippingMeta customData={page.customData} />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-zinc-800 bg-black/40 p-6 text-sm text-zinc-300">
            <ShieldCheck className="mb-4 h-6 w-6 text-zinc-300" />
            <h3 className="mb-3 text-lg font-bold text-white">Zwroty i reklamacje</h3>
            <p>{page.customData?.returnInstructions}</p>
            <p className="mt-4">{page.customData?.complaintsInstructions}</p>
          </div>
          <div className="border border-zinc-800 bg-black/40 p-6 text-sm text-zinc-300">
            <RotateCcw className="mb-4 h-6 w-6 text-zinc-300" />
            <h3 className="mb-3 text-lg font-bold text-white">Okno zwrotu</h3>
            <p>Na zwrot masz {page.customData?.returnWindowDays || 30} dni od otrzymania przesylki.</p>
            <p className="mt-4">Pytania dotyczace zwrotow kieruj na: {page.customData?.returnEmail || 'returns@tatragrail.com'}.</p>
          </div>
        </div>
        <ReturnForm page={page} />
      </div>
    )
  }

  if (page.key === 'contact') {
    return (
      <div className="space-y-8">
        <ContactMeta customData={page.customData} />
        <ContactForm />
      </div>
    )
  }

  if (page.key === 'terms') return <TermsArchive page={page} />
  if (page.key === 'privacy-policy') return <PrivacyLinks page={page} />
  return null
}

export default function CmsContentPage({ page, notFound = false }) {
  const html = useMemo(() => ({ __html: page?.bodyHtml || '' }), [page])
  useSeo({
    title: page?.seoTitle || page?.title || 'TatraGrail',
    description: page?.metaDescription || 'TatraGrail'
  })

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20 pt-40 text-white">
        <div className="mx-auto max-w-4xl border border-zinc-800 bg-black/40 p-10 text-center">
          <h1 className="text-4xl font-black uppercase tracking-[0.25em]">404</h1>
          <p className="mt-4 text-zinc-400">Nie znaleziono podstrony o podanym adresie.</p>
        </div>
      </div>
    )
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20 pt-40 text-white">
        <div className="mx-auto max-w-4xl border border-zinc-800 bg-black/40 p-10 text-center text-zinc-400">
          Ladowanie tresci...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20 pt-36 text-white md:px-8 md:pt-44">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="border border-zinc-800 bg-black/40 p-8 md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-400">{page.slug}</p>
          <h1 className="text-3xl font-black uppercase tracking-[0.2em] md:text-5xl">{page.title}</h1>
          {page.metaDescription ? <p className="mt-4 max-w-3xl text-sm text-zinc-400 md:text-base">{page.metaDescription}</p> : null}
        </header>

        <section className="border border-zinc-800 bg-black/40 p-8 md:p-10">
          <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-[0.12em] prose-a:text-zinc-200 prose-strong:text-white" dangerouslySetInnerHTML={html} />
        </section>

        <PageModules page={page} />
      </div>
    </div>
  )
}
