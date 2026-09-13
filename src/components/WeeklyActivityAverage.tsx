'use client'

import { useEffect, useState } from 'react'

type Summary = { weeklyAverage: number; days: number }

export default function WeeklyActivityAverage({ endpoint, unit }: { endpoint: string; unit: string }) {
  const [summary, setSummary] = useState<Summary | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        const response = await fetch(`${endpoint}?format=summary`, { signal: controller.signal })
        if (!response.ok) throw new Error('Summary unavailable')
        const data = await response.json()
        if (!Number.isFinite(data.weeklyAverage) || !Number.isInteger(data.days) || data.days <= 0) {
          throw new Error('Invalid activity summary')
        }
        if (!controller.signal.aborted) {
          setSummary(data)
          setFailed(false)
        }
      } catch {
        if (!controller.signal.aborted) setFailed(true)
      }
    }
    void load()
    const timer = setInterval(() => { void load() }, 300_000)
    return () => {
      controller.abort()
      clearInterval(timer)
    }
  }, [endpoint])

  return (
    <div className="min-w-[180px] text-center" aria-live="polite" title={summary ? `Weekly average across ${summary.days} days, including inactive days.` : undefined}>
      <p className="flex items-baseline justify-center gap-2 text-3xl font-medium tabular-nums tracking-[-0.05em] text-accent">
        {failed ? '—' : summary ? summary.weeklyAverage.toFixed(1) : '…'}
        <span className="text-[11px] font-normal tracking-normal text-muted-foreground">{unit}/week</span>
      </p>
      <p className="mt-1 font-mono text-[9px] text-muted-foreground">{failed ? 'Average unavailable' : 'Weekly average · past 365 days'}</p>
    </div>
  )
}
