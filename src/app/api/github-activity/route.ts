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
    const firstDate = Date.parse(days[0].date)
    // Match Wakapi's Monday–Sunday rows instead of GitHub's Sunday-first layout.
    const offset = (new Date(firstDate).getUTCDay() + 6) % 7
    const lastPosition = Math.round((Date.parse(days[days.length - 1].date) - firstDate) / 86_400_000) + offset
    const weeks = Math.floor(lastPosition / 7) + 1
    const byDate = new Map(days.map(day => [day.date, day]))
    const cells = Array.from({ length: weeks * 7 }, (_, position) => {
      const date = new Date(firstDate + (position - offset) * 86_400_000).toISOString().slice(0, 10)
      const day = byDate.get(date)
      const x = Math.floor(position / 7) * 23
      const y = position % 7 * 23
      // Display padding cells like zero-contribution days; exclude them from averages.
      const count = day?.count ?? 0
      const title = `${count} contribution${count === 1 ? '' : 's'} on ${date}`
      const fill = day ? colors[day.level] : colors[0]
      return `<rect x="${x}" y="${y}" width="20" height="20" rx="3" fill="${fill}"><title>${title}</title></rect>`
    }).join('')
    const width = weeks * 23
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 158" width="100%" height="100%"><title>GitHub contributions for facelessuum over the past 365 days</title><style>rect:hover { filter: brightness(1.2); }</style>${cells}</svg>`

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
