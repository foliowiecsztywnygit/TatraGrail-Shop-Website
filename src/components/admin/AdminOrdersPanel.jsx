import React from 'react'
import { AlertTriangle, Copy, Download, RefreshCw, Save, Search } from 'lucide-react'

const badgeClasses = {
  pending: 'border-amber-500/40 bg-amber-950/30 text-amber-200',
  paid: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-200',
  processing: 'border-sky-500/40 bg-sky-950/30 text-sky-200',
  packed: 'border-indigo-500/40 bg-indigo-950/30 text-indigo-200',
  shipped: 'border-violet-500/40 bg-violet-950/30 text-violet-200',
  delivered: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-200',
  canceled: 'border-red-500/40 bg-red-950/30 text-red-200',
  refunded: 'border-zinc-500/40 bg-zinc-900 text-zinc-200',
  failed: 'border-red-500/40 bg-red-950/30 text-red-200',
  returned: 'border-orange-500/40 bg-orange-950/30 text-orange-200',
  created: 'border-sky-500/40 bg-sky-950/30 text-sky-200',
  confirmed: 'border-indigo-500/40 bg-indigo-950/30 text-indigo-200',
  sent: 'border-violet-500/40 bg-violet-950/30 text-violet-200',
  unknown: 'border-zinc-700 bg-zinc-950 text-zinc-300'
}

const statusLabel = (value) => value ? String(value).replace(/_/g, ' ') : 'brak'
const selectClassName = 'w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white'
const inputClassName = 'w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white'
const textAreaClassName = 'min-h-28 w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white'

function StatusBadge({ value }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${badgeClasses[value] || badgeClasses.unknown}`}>
      {statusLabel(value)}
    </span>
  )
}

export default function AdminOrdersPanel({
  filters,
  setFilters,
  paymentStatuses,
  fulfillmentStatuses,
  shipmentStatuses,
  deliveryMethods,
  orders,
  meta,
  selectedOrderId,
  ordersLoading,
  ordersError,
  orderForm,
  orderErrors,
  onFilter,
  onResetFilters,
  onRefresh,
  onExport,
  onSelectOrder,
  onOrderSubmit,
  setOrderForm,
  onCopyAddress,
  onCopyShipmentSummary
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.4fr]">
      <section className="border border-zinc-800 bg-black/70 p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-white">Lista zamowien</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Strona {meta.page} z {meta.totalPages} • {meta.total} rekordow
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={onExport} className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
              <Download size={14} />
              CSV
            </button>
            <button type="button" onClick={onRefresh} className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
              <RefreshCw size={14} />
              Odswiez
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <input className={inputClassName} value={filters.search} onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))} placeholder="Szukaj po numerze, kliencie, emailu, telefonie" />
          <select className={selectClassName} value={filters.paymentStatus} onChange={(event) => setFilters((prev) => ({ ...prev, paymentStatus: event.target.value }))}>
            <option value="">Status platnosci</option>
            {paymentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
          </select>
          <select className={selectClassName} value={filters.fulfillmentStatus} onChange={(event) => setFilters((prev) => ({ ...prev, fulfillmentStatus: event.target.value }))}>
            <option value="">Status realizacji</option>
            {fulfillmentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
          </select>
          <select className={selectClassName} value={filters.shipmentStatus} onChange={(event) => setFilters((prev) => ({ ...prev, shipmentStatus: event.target.value }))}>
            <option value="">Status przesylki</option>
            {shipmentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
          </select>
          <select className={selectClassName} value={filters.deliveryMethod} onChange={(event) => setFilters((prev) => ({ ...prev, deliveryMethod: event.target.value }))}>
            <option value="">Metoda dostawy</option>
            {deliveryMethods.map((method) => <option key={method} value={method}>{statusLabel(method)}</option>)}
          </select>
          <input className={inputClassName} value={filters.courierCompany} onChange={(event) => setFilters((prev) => ({ ...prev, courierCompany: event.target.value }))} placeholder="Firma kurierska" />
          <input type="date" className={inputClassName} value={filters.createdFrom} onChange={(event) => setFilters((prev) => ({ ...prev, createdFrom: event.target.value }))} />
          <input type="date" className={inputClassName} value={filters.createdTo} onChange={(event) => setFilters((prev) => ({ ...prev, createdTo: event.target.value }))} />
          <select className={selectClassName} value={filters.sortBy} onChange={(event) => setFilters((prev) => ({ ...prev, sortBy: event.target.value }))}>
            <option value="createdAt">Sortuj: data utworzenia</option>
            <option value="updatedAt">Sortuj: data aktualizacji</option>
            <option value="total">Sortuj: wartosc zamowienia</option>
            <option value="goodsValue">Sortuj: wartosc towaru</option>
          </select>
          <select className={selectClassName} value={filters.sortDirection} onChange={(event) => setFilters((prev) => ({ ...prev, sortDirection: event.target.value }))}>
            <option value="desc">Najnowsze / malejaco</option>
            <option value="asc">Najstarsze / rosnaco</option>
          </select>
          <select className={selectClassName} value={String(filters.pageSize)} onChange={(event) => setFilters((prev) => ({ ...prev, pageSize: Number(event.target.value) }))}>
            {[10, 20, 50, 100].map((size) => <option key={size} value={size}>{size} na strone</option>)}
          </select>
          <label className="flex items-center gap-3 border border-zinc-800 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300">
            <input type="checkbox" checked={filters.attentionOnly} onChange={(event) => setFilters((prev) => ({ ...prev, attentionOnly: event.target.checked }))} />
            Wymagajace uwagi
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={onFilter} className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
            <Search size={14} />
            Filtruj
          </button>
          <button type="button" onClick={onResetFilters} className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-3 text-xs uppercase tracking-[0.2em] transition hover:border-white">
            <RefreshCw size={14} />
            Reset
          </button>
        </div>

        {ordersError ? (
          <div className="mt-4 border border-red-500/40 bg-red-950/20 px-4 py-3 text-sm text-red-200">{ordersError}</div>
        ) : null}

        <div className="mt-6 max-h-[760px] space-y-3 overflow-y-auto pr-1">
          {ordersLoading ? <div className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-400">Ladowanie zamowien...</div> : null}
          {!ordersLoading && orders.length === 0 ? <div className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-400">Brak zamowien dla wybranych filtrow.</div> : null}
          {orders.map((order) => (
            <button
              key={order.id}
              type="button"
              onClick={() => onSelectOrder(order.id)}
              className={`w-full border p-4 text-left transition ${selectedOrderId === order.id ? 'border-white bg-zinc-950' : 'border-zinc-800 bg-black hover:border-zinc-500'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">{order.orderNumber}</p>
                    {order.needsAttention || order.overdue ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/50 bg-amber-950/30 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">
                        <AlertTriangle size={12} />
                        Uwaga
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">{order.recipientName || 'Klient bez imienia i nazwiska'}</p>
                  <p className="mt-1 text-xs text-zinc-500">{order.email}{order.phone ? ` • ${order.phone}` : ''}</p>
                  <p className="mt-2 text-xs text-zinc-500">{order.itemSummary || 'Brak pozycji'} </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">{new Date(order.createdAt).toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{order.formatted.total}</p>
                  <div className="mt-3 flex flex-wrap justify-end gap-2">
                    <StatusBadge value={order.paymentStatus} />
                    <StatusBadge value={order.fulfillmentStatus} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-800 pt-4 text-sm text-zinc-400">
          <button type="button" disabled={meta.page <= 1} onClick={() => onFilter(meta.page - 1)} className="border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-white disabled:cursor-not-allowed disabled:opacity-40">
            Poprzednia
          </button>
          <span>Strona {meta.page} / {meta.totalPages}</span>
          <button type="button" disabled={meta.page >= meta.totalPages} onClick={() => onFilter(meta.page + 1)} className="border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-white disabled:cursor-not-allowed disabled:opacity-40">
            Nastepna
          </button>
        </div>
      </section>

      <section className="border border-zinc-800 bg-black/70 p-6">
        {!orderForm ? (
          <div className="border border-zinc-800 bg-zinc-950 p-6 text-sm text-zinc-400">Wybierz zamowienie z listy, aby zobaczyc szczegoly wysylki i zmienic statusy.</div>
        ) : (
          <form className="space-y-6" onSubmit={onOrderSubmit}>
            <div className="flex flex-col gap-3 border border-zinc-800 bg-zinc-950 p-4 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">{orderForm.orderNumber}</h2>
                  <StatusBadge value={orderForm.paymentStatus} />
                  <StatusBadge value={orderForm.fulfillmentStatus} />
                  <StatusBadge value={orderForm.shipmentStatus || 'unknown'} />
                </div>
                <p className="mt-2 text-sm text-zinc-400">
                  Zamowienie z {new Date(orderForm.createdAt).toLocaleString()} • ostatnia aktualizacja {new Date(orderForm.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={onCopyAddress} className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                  <Copy size={14} />
                  Kopiuj adres
                </button>
                <button type="button" onClick={onCopyShipmentSummary} className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                  <Copy size={14} />
                  Kopiuj dane wysylki
                </button>
                {orderForm.trackingToken ? (
                  <a href={`/tracking/${orderForm.trackingToken}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-white">
                    Podglad trackingu
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Email</span>
                <input className={inputClassName} value={orderForm.email} onChange={(event) => setOrderForm((prev) => ({ ...prev, email: event.target.value }))} />
                {orderErrors.email ? <span className="text-red-400">{orderErrors.email}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Telefon</span>
                <input className={inputClassName} value={orderForm.phone} onChange={(event) => setOrderForm((prev) => ({ ...prev, phone: event.target.value }))} />
                {orderErrors.phone ? <span className="text-red-400">{orderErrors.phone}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Imie</span>
                <input className={inputClassName} value={orderForm.firstName} onChange={(event) => setOrderForm((prev) => ({ ...prev, firstName: event.target.value }))} />
                {orderErrors.firstName ? <span className="text-red-400">{orderErrors.firstName}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Nazwisko</span>
                <input className={inputClassName} value={orderForm.lastName} onChange={(event) => setOrderForm((prev) => ({ ...prev, lastName: event.target.value }))} />
                {orderErrors.lastName ? <span className="text-red-400">{orderErrors.lastName}</span> : null}
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Firma</span>
                <input className={inputClassName} value={orderForm.companyName} onChange={(event) => setOrderForm((prev) => ({ ...prev, companyName: event.target.value }))} />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>NIP</span>
                <input className={inputClassName} value={orderForm.nip} onChange={(event) => setOrderForm((prev) => ({ ...prev, nip: event.target.value }))} />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Ulica</span>
                <input className={inputClassName} value={orderForm.street} onChange={(event) => setOrderForm((prev) => ({ ...prev, street: event.target.value }))} />
                {orderErrors.street ? <span className="text-red-400">{orderErrors.street}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Numer domu / lokalu</span>
                <input className={inputClassName} value={orderForm.houseNumber} onChange={(event) => setOrderForm((prev) => ({ ...prev, houseNumber: event.target.value }))} />
                {orderErrors.houseNumber ? <span className="text-red-400">{orderErrors.houseNumber}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Kod pocztowy</span>
                <input className={inputClassName} value={orderForm.postalCode} onChange={(event) => setOrderForm((prev) => ({ ...prev, postalCode: event.target.value }))} />
                {orderErrors.postalCode ? <span className="text-red-400">{orderErrors.postalCode}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Miasto</span>
                <input className={inputClassName} value={orderForm.city} onChange={(event) => setOrderForm((prev) => ({ ...prev, city: event.target.value }))} />
                {orderErrors.city ? <span className="text-red-400">{orderErrors.city}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Kraj</span>
                <input className={inputClassName} value={orderForm.country} onChange={(event) => setOrderForm((prev) => ({ ...prev, country: event.target.value }))} />
                {orderErrors.country ? <span className="text-red-400">{orderErrors.country}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Firma kurierska</span>
                <input className={inputClassName} value={orderForm.courierCompany} onChange={(event) => setOrderForm((prev) => ({ ...prev, courierCompany: event.target.value }))} />
                {orderErrors.courierCompany ? <span className="text-red-400">{orderErrors.courierCompany}</span> : null}
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Status platnosci</span>
                <select className={selectClassName} value={orderForm.paymentStatus} onChange={(event) => setOrderForm((prev) => ({ ...prev, paymentStatus: event.target.value }))}>
                  {paymentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
                </select>
                {orderErrors.paymentStatus ? <span className="text-red-400">{orderErrors.paymentStatus}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Status realizacji</span>
                <select className={selectClassName} value={orderForm.fulfillmentStatus} onChange={(event) => setOrderForm((prev) => ({ ...prev, fulfillmentStatus: event.target.value }))}>
                  {fulfillmentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
                </select>
                {orderErrors.fulfillmentStatus ? <span className="text-red-400">{orderErrors.fulfillmentStatus}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Status przesylki</span>
                <select className={selectClassName} value={orderForm.shipmentStatus} onChange={(event) => setOrderForm((prev) => ({ ...prev, shipmentStatus: event.target.value }))}>
                  {shipmentStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
                </select>
                {orderErrors.shipmentStatus ? <span className="text-red-400">{orderErrors.shipmentStatus}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Metoda dostawy</span>
                <select className={selectClassName} value={orderForm.deliveryMethod} onChange={(event) => setOrderForm((prev) => ({ ...prev, deliveryMethod: event.target.value }))}>
                  {deliveryMethods.map((method) => <option key={method} value={method}>{statusLabel(method)}</option>)}
                </select>
                {orderErrors.deliveryMethod ? <span className="text-red-400">{orderErrors.deliveryMethod}</span> : null}
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Numer sledzenia</span>
                <input className={inputClassName} value={orderForm.trackingNumber} onChange={(event) => setOrderForm((prev) => ({ ...prev, trackingNumber: event.target.value }))} />
                {orderErrors.trackingNumber ? <span className="text-red-400">{orderErrors.trackingNumber}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Waga paczki (kg)</span>
                <input type="number" step="0.01" className={inputClassName} value={orderForm.packageWeight} onChange={(event) => setOrderForm((prev) => ({ ...prev, packageWeight: event.target.value }))} />
                {orderErrors.packageWeight ? <span className="text-red-400">{orderErrors.packageWeight}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Dlugosc (cm)</span>
                <input type="number" step="0.01" className={inputClassName} value={orderForm.packageLength} onChange={(event) => setOrderForm((prev) => ({ ...prev, packageLength: event.target.value }))} />
                {orderErrors.packageLength ? <span className="text-red-400">{orderErrors.packageLength}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Szerokosc (cm)</span>
                <input type="number" step="0.01" className={inputClassName} value={orderForm.packageWidth} onChange={(event) => setOrderForm((prev) => ({ ...prev, packageWidth: event.target.value }))} />
                {orderErrors.packageWidth ? <span className="text-red-400">{orderErrors.packageWidth}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Wysokosc (cm)</span>
                <input type="number" step="0.01" className={inputClassName} value={orderForm.packageHeight} onChange={(event) => setOrderForm((prev) => ({ ...prev, packageHeight: event.target.value }))} />
                {orderErrors.packageHeight ? <span className="text-red-400">{orderErrors.packageHeight}</span> : null}
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Wartosc towaru</span>
                <input type="number" step="0.01" className={inputClassName} value={orderForm.goodsValue} onChange={(event) => setOrderForm((prev) => ({ ...prev, goodsValue: event.target.value }))} />
                {orderErrors.goodsValue ? <span className="text-red-400">{orderErrors.goodsValue}</span> : null}
              </label>
              <label className="flex items-center gap-3 border border-zinc-800 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300">
                <input type="checkbox" checked={orderForm.needsAttention} onChange={(event) => setOrderForm((prev) => ({ ...prev, needsAttention: event.target.checked }))} />
                Oznacz jako wymagajace uwagi
              </label>
            </div>

            {orderForm.deliveryMethod === 'inpost_locker' ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                  <span>ID paczkomatu</span>
                  <input className={inputClassName} value={orderForm.inpostPointId} onChange={(event) => setOrderForm((prev) => ({ ...prev, inpostPointId: event.target.value }))} />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                  <span>Nazwa paczkomatu</span>
                  <input className={inputClassName} value={orderForm.inpostPointName} onChange={(event) => setOrderForm((prev) => ({ ...prev, inpostPointName: event.target.value }))} />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                  <span>Adres paczkomatu</span>
                  <input className={inputClassName} value={orderForm.inpostPointAddress} onChange={(event) => setOrderForm((prev) => ({ ...prev, inpostPointAddress: event.target.value }))} />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                  <span>Kod i miasto paczkomatu</span>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={inputClassName} value={orderForm.inpostPointPostalCode} onChange={(event) => setOrderForm((prev) => ({ ...prev, inpostPointPostalCode: event.target.value }))} placeholder="Kod" />
                    <input className={inputClassName} value={orderForm.inpostPointCity} onChange={(event) => setOrderForm((prev) => ({ ...prev, inpostPointCity: event.target.value }))} placeholder="Miasto" />
                  </div>
                </label>
              </div>
            ) : null}

            <div className="grid gap-4 xl:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Uwagi do zamowienia</span>
                <textarea className={textAreaClassName} value={orderForm.orderNotes} onChange={(event) => setOrderForm((prev) => ({ ...prev, orderNotes: event.target.value }))} />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <span>Uwagi administracyjne</span>
                <textarea className={textAreaClassName} value={orderForm.adminNotes} onChange={(event) => setOrderForm((prev) => ({ ...prev, adminNotes: event.target.value }))} />
              </label>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-zinc-800 bg-zinc-950 p-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Pozycje zamowienia</h3>
                <div className="mt-4 space-y-3">
                  {orderForm.items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-4 border border-zinc-800 p-3 text-sm text-zinc-300">
                      <div>
                        <p className="font-bold text-white">{item.productName}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                          {item.size ? `Rozmiar ${item.size} • ` : ''} {item.quantity} szt.
                        </p>
                      </div>
                      <div className="text-right text-zinc-300">{Number(item.unitPrice).toFixed(2)} {item.currency}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Podsumowanie wysylki</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between"><span>Wartosc towaru</span><span>{orderForm.formatted.goodsValue}</span></div>
                  <div className="flex items-center justify-between"><span>Rabat</span><span>{orderForm.formatted.discount}</span></div>
                  <div className="flex items-center justify-between"><span>Dostawa</span><span>{orderForm.formatted.shipping}</span></div>
                  <div className="flex items-center justify-between border-t border-zinc-800 pt-3 font-bold text-white"><span>Razem</span><span>{orderForm.formatted.total}</span></div>
                  <div className="border-t border-zinc-800 pt-3 text-xs text-zinc-500">
                    <p>Tryb checkoutu: {statusLabel(orderForm.checkoutMode)}</p>
                    <p className="mt-2">Token trackingu: {orderForm.trackingToken}</p>
                    {orderForm.trackingNumber ? <p className="mt-2">Numer sledzenia: {orderForm.trackingNumber}</p> : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-400">Zmiany zapisuja statusy, dane wysylkowe oraz wszystkie pola potrzebne do przygotowania paczki.</p>
              <button type="submit" className="inline-flex items-center gap-2 border border-white bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white">
                <Save size={14} />
                Zapisz zamowienie
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}
