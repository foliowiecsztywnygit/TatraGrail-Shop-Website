import React, { useState, useMemo } from 'react'
import { Save, RefreshCw } from 'lucide-react'
import { apiJson } from '../../lib/api'

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', '3XL']

function stockColor(qty) {
  if (qty <= 0) return 'bg-red-900/40 text-red-400 border-red-800'
  if (qty <= 5) return 'bg-yellow-900/40 text-yellow-300 border-yellow-800'
  return 'bg-emerald-900/30 text-emerald-300 border-emerald-800'
}

function stockDot(qty) {
  if (qty <= 0) return 'bg-red-500'
  if (qty <= 5) return 'bg-yellow-400'
  return 'bg-emerald-400'
}

export default function InventoryPanel({ products, onSaved, onError }) {
  const [categoryFilter, setCategoryFilter] = useState('')
  const [saving, setSaving] = useState({})

  const [draft, setDraft] = useState(() => {
    const map = {}
    for (const p of products) {
      map[p.id] = { ...(p.sizeStock || {}) }
    }
    return map
  })

  const categories = useMemo(() =>
    Array.from(new Set(products.map((p) => p.category).filter(Boolean))).sort(),
    [products]
  )

  const visibleProducts = useMemo(() =>
    products.filter((p) => !p.isArchived && (!categoryFilter || p.category === categoryFilter)),
    [products, categoryFilter]
  )

  const usedSizes = useMemo(() => {
    const sizeSet = new Set()
    for (const p of visibleProducts) {
      const sizes = p.sizes || []
      sizes.forEach((s) => sizeSet.add(s))
    }
    const ordered = ALL_SIZES.filter((s) => sizeSet.has(s))
    sizeSet.forEach((s) => { if (!ordered.includes(s)) ordered.push(s) })
    return ordered
  }, [visibleProducts])

  const handleChange = (productId, size, value) => {
    setDraft((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], [size]: value === '' ? '' : value }
    }))
  }

  const handleSave = async (product) => {
    const raw = draft[product.id] || {}
    const sizeStock = {}
    for (const size of (product.sizes || [])) {
      const val = parseInt(raw[size] ?? 0, 10)
      if (isNaN(val) || val < 0) {
        onError(`Nieprawidlowa wartosc dla rozmiaru ${size} w produkcie "${product.title?.pl || product.name}"`)
        return
      }
      sizeStock[size] = val
    }
    setSaving((prev) => ({ ...prev, [product.id]: true }))
    try {
      const data = await apiJson(`/api/admin/products/${product.id}/stock`, 'PATCH', { sizeStock }, { includeAdmin: true })
      onSaved(data.product)
    } catch (err) {
      onError(err.message || 'Blad zapisu stanu magazynowego.')
    } finally {
      setSaving((prev) => ({ ...prev, [product.id]: false }))
    }
  }

  const totalFor = (productId) => {
    const row = draft[productId] || {}
    return Object.values(row).reduce((s, v) => s + (parseInt(v, 10) || 0), 0)
  }

  return (
    <div className="space-y-6">
      <div className="border border-zinc-800 bg-black/70 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black uppercase tracking-[0.2em]">Stan Magazynowy</h2>
            <p className="mt-1 text-xs text-zinc-500 tracking-widest uppercase">Zarzadzaj ilosciami per rozmiar</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 text-xs text-zinc-400 tracking-wide">
              <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />{' > 5'}</span>
              <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400" />{'1-5'}</span>
              <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />{'0'}</span>
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-zinc-700 bg-zinc-900 text-xs text-white px-3 py-2 tracking-wider focus:outline-none focus:border-white"
            >
              <option value="">Wszystkie kategorie</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950">
              <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-zinc-400 w-56">Produkt</th>
              <th className="px-3 py-3 text-center text-xs uppercase tracking-[0.2em] text-zinc-400">SKU</th>
              {usedSizes.map((size) => (
                <th key={size} className="px-2 py-3 text-center text-xs uppercase tracking-[0.2em] text-zinc-400 min-w-[64px]">{size}</th>
              ))}
              <th className="px-3 py-3 text-center text-xs uppercase tracking-[0.2em] text-zinc-400">Total</th>
              <th className="px-4 py-3 text-right text-xs uppercase tracking-[0.2em] text-zinc-400">Akcja</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {visibleProducts.length === 0 && (
              <tr>
                <td colSpan={4 + usedSizes.length} className="px-4 py-8 text-center text-zinc-500 text-xs tracking-widest uppercase">Brak produktow</td>
              </tr>
            )}
            {visibleProducts.map((product) => {
              const productSizes = product.sizes || []
              const total = totalFor(product.id)
              const isSaving = saving[product.id]
              return (
                <tr key={product.id} className="bg-black/30 hover:bg-zinc-900/40 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${stockDot(total)}`} />
                      <span className="font-medium text-white text-xs leading-snug">{product.title?.pl || product.name}</span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-zinc-500 pl-4">{product.category}</p>
                  </td>
                  <td className="px-3 py-3 text-center text-[11px] text-zinc-500 font-mono">{product.sku}</td>
                  {usedSizes.map((size) => {
                    const isProductSize = productSizes.includes(size)
                    const rawVal = draft[product.id]?.[size] ?? ''
                    const numVal = parseInt(rawVal, 10)
                    const colorClass = isProductSize ? stockColor(isNaN(numVal) ? 0 : numVal) : ''
                    return (
                      <td key={size} className="px-2 py-3 text-center">
                        {isProductSize ? (
                          <input
                            type="number"
                            min="0"
                            value={rawVal}
                            onChange={(e) => handleChange(product.id, size, e.target.value)}
                            className={`w-14 text-center text-xs font-bold border rounded-sm px-1.5 py-1 focus:outline-none focus:ring-1 focus:ring-white/30 bg-transparent transition-colors ${colorClass}`}
                          />
                        ) : (
                          <span className="text-zinc-700 text-xs">-</span>
                        )}
                      </td>
                    )
                  })}
                  <td className="px-3 py-3 text-center">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-sm border ${stockColor(total)}`}>{total}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      disabled={isSaving}
                      onClick={() => handleSave(product)}
                      className="inline-flex items-center gap-1.5 border border-zinc-700 px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-zinc-200 transition hover:border-white hover:text-white disabled:opacity-40"
                    >
                      {isSaving ? <RefreshCw size={12} className="animate-spin" /> : <Save size={12} />}
                      {isSaving ? 'Zapisuje...' : 'Zapisz'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="border border-zinc-800 bg-black/40 px-6 py-4">
        <div className="flex flex-wrap gap-6 text-xs text-zinc-400 tracking-wider">
          <span><span className="text-white font-bold">{visibleProducts.length}</span> produktow</span>
          <span><span className="text-emerald-400 font-bold">{visibleProducts.filter((p) => totalFor(p.id) > 0).length}</span> z dostepnym stanem</span>
          <span><span className="text-red-400 font-bold">{visibleProducts.filter((p) => totalFor(p.id) <= 0).length}</span> wyprzedanych</span>
        </div>
      </div>
    </div>
  )
}
