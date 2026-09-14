import { renderActivityChart } from '@/lib/activity-chart'

const activityUrl = 'https://github.com/users/facelessuum/contributions'
const colors = ['#1a1e1b', '#50643a', '#7e9d4a', '#a5c961', '#cef273']

type Contribution = { date: string; count: number; level: number }

function isContribution(value: unknown): value is Contribution {
  if (!value || typeof value !== 'object') return false
  const day = value as Contribution
  return typeof day.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day.date)
    && Number.isFinite(Date.parse(day.date))
    && Number.isInteger(day.count) && day.count >= 0
    && Number.isInteger(day.level) && day.level >= 0 && day.level < colors.length
}

async function fetchContributions(): Promise<Contribution[]> {
  // Read GitHub's public contribution calendar; no private token or third-party API.
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(activityUrl, {
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) throw new Error(`GitHub contributions unavailable (${response.status})`)
      const html = await response.text()
      const counts = new Map<string, number>()
      for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/gi)) {
        const id = match[1].match(/\bfor="([^"]+)"/)?.[1]
        const count = match[2].trim().match(/^(No|[\d,]+) contributions?\b/i)?.[1]
        if (id && count) counts.set(id, count.toLowerCase() === 'no' ? 0 : Number(count.replaceAll(',', '')))
      }
      const days: Contribution[] = []
      for (const match of html.matchAll(/<td\b([^>]*)>/gi)) {
        const date = match[1].match(/\bdata-date="([^"]+)"/)?.[1]
        if (!date) continue
        const id = match[1].match(/\bid="([^"]+)"/)?.[1]
        const level = match[1].match(/\bdata-level="([^"]+)"/)?.[1]
        const day = { date, count: id ? counts.get(id) : undefined, level: Number(level) }
        if (!isContribution(day)) throw new Error('Unexpected GitHub contribution cell')
        days.push(day)
      }
      if (!days.length) throw new Error('GitHub contribution calendar missing')
      return days.sort((a, b) => a.date.localeCompare(b.date))
    } catch (error) {
      if (attempt === 1) throw error
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
}

export async function GET(request: Request) {
  try {
    const days = await fetchContributions()
    if (new URL(request.url).searchParams.get('format') === 'summary') {
      const period = days.slice(-365)
      const total = period.reduce((sum, day) => sum + day.count, 0)
      return Response.json({ weeklyAverage: total * 7 / period.length, days: period.length }, {
        headers: { 'Cache-Control': 'public, max-age=300' },
      })
    }
    const svg = renderActivityChart(days.map(day => ({
      date: day.date,
      fill: colors[day.level],
      title: `${day.count} contribution${day.count === 1 ? '' : 's'} on ${new Date(day.date).toUTCString().slice(0, 16)}`,
    })), 'GitHub contributions for facelessuum over the past 365 days', date => `0 contributions on ${new Date(date).toUTCString().slice(0, 16)}`)

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Failed to load GitHub contributions:', error)
    return new Response('GitHub contributions temporarily unavailable', {
      status: 502,
      headers: { 'Cache-Control': 'no-store' },
    })
  }
}
