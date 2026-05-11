import React, { useEffect, useMemo, useState } from 'react'

const brandLogoUrl = new URL('../../tatragraillogo.png', import.meta.url).href

const formatRemaining = (ms) => {
  const safe = Math.max(0, ms)
  const totalSeconds = Math.floor(safe / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const pad = (n) => String(n).padStart(2, '0')
  if (days > 0) return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export default function DropGatePage({ dropStartAt, onUnlocked }) {
  const [now, setNow] = useState(Date.now())
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const dropStartMs = useMemo(() => {
    if (!dropStartAt) return null
    const ms = new Date(dropStartAt).getTime()
    return Number.isFinite(ms) ? ms : null
  }, [dropStartAt])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [])

  const remaining = dropStartMs ? Math.max(0, dropStartMs - now) : 0

  const unlock = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/drop/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || 'Unlock failed')
        setLoading(false)
        return
      }

      if (data?.token) {
        localStorage.setItem('tatragrail-drop-token', data.token)
      }

      onUnlocked?.()
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-fluid-sm bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="w-full max-w-xl border border-[#222] bg-[#111] rounded-sm p-8 md:p-10 text-center">
        <img src={brandLogoUrl} alt="TatraGrail" className="h-14 md:h-16 w-auto mx-auto object-contain mb-8" />

        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest font-montserrat mb-3">
          Drop 01
        </h1>

        {dropStartMs ? (
          <>
            <p className="text-gray-400 tracking-widest uppercase text-xs mb-2">
              Opens in
            </p>
            <div className="text-3xl md:text-4xl font-black tracking-widest font-montserrat mb-8">
              {formatRemaining(remaining)}
            </div>
          </>
        ) : (
          <p className="text-gray-400 tracking-widest uppercase text-xs mb-8">
            Drop timer is not configured
          </p>
        )}

        <form onSubmit={unlock} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-black border border-[#333] px-4 py-3 rounded-sm tracking-widest uppercase text-sm focus:outline-none focus:border-white"
          />

          {error && (
            <div className="text-red-500 text-sm font-bold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-white text-black py-4 font-montserrat font-black uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm disabled:opacity-50"
          >
            {loading ? 'Unlocking...' : 'Unlock'}
          </button>
        </form>

        <p className="text-[11px] text-gray-500 tracking-widest mt-6 uppercase">
          This screen auto-opens when the timer hits zero
        </p>
      </div>
    </div>
  )
}

