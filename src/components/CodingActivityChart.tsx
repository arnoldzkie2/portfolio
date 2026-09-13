'use client'

import { useEffect, useState } from 'react'

type CodingActivityChartProps = {
  endpoint?: string
  service?: string
  label?: string
}

export default function CodingActivityChart({
  endpoint = '/api/coding-activity',
  service = 'Wakapi',
  label = 'Arnold’s daily coding activity over the last 365 days. Hover over a day to see hours coded.',
}: CodingActivityChartProps) {
  const [version, setVersion] = useState(0)
  const [failed, setFailed] = useState(false)

  function refresh() {
    setFailed(false)
    setVersion(value => value + 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setFailed(false)
      setVersion(value => value + 1)
    }, 300_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="rounded-lg bg-background">
      {failed ? (
        <div role="status" className="py-6 text-sm text-muted-foreground">
          <p>{service} is temporarily unavailable.</p>
          <button type="button" onClick={refresh} className="mt-3 text-accent underline">Retry loading chart</button>
        </div>
      ) : (
        <object
          key={version}
          data={`${endpoint}?style=6&refresh=${version}`}
          type="image/svg+xml"
          aria-label={label}
          width={1219}
          height={158}
          className="block h-auto w-full aspect-[1219/158]"
          onError={() => setFailed(true)}
        >
          <button type="button" onClick={refresh} className="text-sm text-accent underline">Retry loading coding activity</button>
        </object>
      )}
    </div>
  )
}
