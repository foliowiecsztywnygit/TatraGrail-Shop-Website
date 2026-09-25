import React, { useState, useEffect } from 'react'
import { Plus, Save, Trash2, RefreshCw } from 'lucide-react'
import { apiJson, apiFetch } from '../../lib/api'

export default function PromoCodesPanel() {
  const [codes, setCodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [editingId, setEditingId] = useState(null)
  
  const [form, setForm] = useState({
    code: '',
    type: 'percentage',
    value: '',
    active: true,
    expiration: '',
    usageLimit: ''
  })

  const loadCodes = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await apiFetch('/api/admin/promocodes', { includeAdmin: true })
      setCodes(data)
    } catch (err) {
      setError('Nie udało się pobrać kodów rabatowych.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCodes()
  }, [])

  const handleEdit = (code) => {
    setEditingId(code.id)
    setForm({
      code: code.code,
      type: code.type,
      value: code.value,
      active: code.active,
      expiration: code.expiration ? new Date(code.expiration).toISOString().slice(0, 16) : '',
      usageLimit: code.usageLimit || ''
    })
    setSuccess(null)
    setError(null)
  }

  const handleCancel = () => {
    setEditingId(null)
    setForm({
      code: '',
      type: 'percentage',
      value: '',
      active: true,
      expiration: '',
      usageLimit: ''
    })
    setSuccess(null)
    setError(null)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    
    if (!form.code || form.value === '') {
      setError('Kod i wartość są wymagane.')
      return
    }

    try {
      if (editingId) {
        await apiJson(`/api/admin/promocodes/${editingId}`, 'PUT', form, { includeAdmin: true })
        setSuccess('Kod został zaktualizowany.')
      } else {
        await apiJson('/api/admin/promocodes', 'POST', form, { includeAdmin: true })
        setSuccess('Kod został dodany.')
      }
      handleCancel()
      loadCodes()
    } catch (err) {
      setError(err.message || 'Wystąpił błąd podczas zapisywania kodu.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Czy na pewno chcesz usunąć ten kod?')) return
    
    try {
      await apiJson(`/api/admin/promocodes/${id}`, 'DELETE', null, { includeAdmin: true })
      setSuccess('Kod został usunięty.')
      loadCodes()
    } catch (err) {
      setError('Nie udało się usunąć kodu.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="border border-zinc-800 bg-black/70 p-6">
        <h2 className="text-xl font-black uppercase tracking-[0.2em]">{editingId ? 'Edytuj kod rabatowy' : 'Dodaj nowy kod'}</h2>
        
        {error && <div className="mt-4 border border-red-500/50 bg-red-950/20 px-4 py-3 text-sm text-red-200">{error}</div>}
        {success && <div className="mt-4 border border-emerald-500/40 bg-emerald-950/20 px-4 py-3 text-sm text-emerald-200">{success}</div>}

        <form onSubmit={handleSave} className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Kod</span>
              <input type="text" value={form.code} onChange={e => setForm({...form, code: e.target.value.toUpperCase()})} className="border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-white focus:outline-none" placeholder="NP. SUMMER2026" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Typ</span>
              <select value={form.type} onChange={e => setForm({...form, type: e.target.value, value: e.target.value === 'free_shipping' ? 0 : form.value})} className="border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-white focus:outline-none">
                <option value="percentage">Procentowa obniżka (%)</option>
                <option value="fixed">Kwotowa obniżka (PLN)</option>
                <option value="free_shipping">Darmowa dostawa</option>
              </select>
            </label>
            {form.type !== 'free_shipping' && (
              <label className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Wartość</span>
                <input type="number" step="0.01" value={form.value} onChange={e => setForm({...form, value: e.target.value})} className="border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-white focus:outline-none" />
              </label>
            )}
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Status</span>
              <div className="flex h-[46px] items-center border border-zinc-800 bg-zinc-950 px-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.active} onChange={e => setForm({...form, active: e.target.checked})} />
                  <span className="text-sm">Aktywny</span>
                </label>
              </div>
            </label>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Data wygaśnięcia (opcjonalnie)</span>
              <input type="datetime-local" value={form.expiration} onChange={e => setForm({...form, expiration: e.target.value})} className="border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-white focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Limit użyć (opcjonalnie)</span>
              <input type="number" min="1" value={form.usageLimit} onChange={e => setForm({...form, usageLimit: e.target.value})} className="border border-zinc-800 bg-zinc-950 p-3 text-sm text-white focus:border-white focus:outline-none" placeholder="np. 100" />
            </label>
          </div>

          <div className="flex gap-4 pt-2">
            <button type="submit" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200">
              <Save size={14} />
              {editingId ? 'Zapisz zmiany' : 'Dodaj kod'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="inline-flex items-center gap-2 border border-zinc-700 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white">
                Anuluj
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="border border-zinc-800 bg-black/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950 text-left">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Kod</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Typ</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Wartość</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Użycia</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Wygasa</th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {loading ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-zinc-500">
                  <RefreshCw className="mx-auto animate-spin" size={24} />
                </td>
              </tr>
            ) : codes.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-zinc-500 text-xs tracking-widest uppercase">Brak kodów rabatowych</td>
              </tr>
            ) : (
              codes.map(code => (
                <tr key={code.id} className={`hover:bg-zinc-900/40 transition-colors ${!code.active ? 'opacity-50' : ''}`}>
                  <td className="px-6 py-4 font-bold">{code.code}</td>
                  <td className="px-6 py-4 text-zinc-400">
                    {code.type === 'percentage' && 'Procentowa (%)'}
                    {code.type === 'fixed' && 'Kwotowa (PLN)'}
                    {code.type === 'free_shipping' && 'Darmowa dostawa'}
                  </td>
                  <td className="px-6 py-4">{code.type === 'free_shipping' ? '-' : code.value}</td>
                  <td className="px-6 py-4">{code.usageCount} {code.usageLimit ? `/ ${code.usageLimit}` : ''}</td>
                  <td className="px-6 py-4 text-zinc-400">{code.expiration ? new Date(code.expiration).toLocaleString() : 'Nigdy'}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleEdit(code)} className="px-2 py-1 text-xs uppercase tracking-wider text-zinc-300 hover:text-white mr-2">Edytuj</button>
                    <button onClick={() => handleDelete(code.id)} className="px-2 py-1 text-zinc-500 hover:text-red-400"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
