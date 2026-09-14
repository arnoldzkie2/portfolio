import { renderActivityChart } from '@/lib/activity-chart'

const chartUrl = 'https://wakapi.dev/api/activity/chart/facelessuum.svg'

async function fetchChart() {
  // Retry transient upstream/network failures instead of immediately losing the embed.
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(chartUrl, {
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) throw new Error(`Wakapi chart unavailable (${response.status})`)
      const svg = await response.text()
      if (!svg.includes('<svg') || !svg.includes('</svg>')) throw new Error('Incomplete Wakapi chart')
      return svg
    } catch (error) {
      if (attempt === 1) throw error
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
}

export async function GET(request: Request) {
  try {
    const source = await fetchChart()
    const days = Array.from(source.matchAll(/<g\b[^>]*>\s*<title>(\d+) hrs (\d+) mins on ([^<]+)<\/title>\s*<rect\b[^>]*style="fill: #([\da-f]{6})"[^>]*\/?>\s*<\/g>/gi), match => {
      const timestamp = Date.parse(`${match[3]} 00:00:00 GMT`)
      if (!Number.isFinite(timestamp)) throw new Error('Unexpected Wakapi activity date')
      // Map Wakapi's pale-to-dark green scale onto our dark-to-lime palette.
      const intensity = Math.max(0, Math.min(1, (220 - parseInt(match[4].slice(0, 2), 16)) / 216))
      const base = [26, 30, 27]
      const accent = [206, 242, 115]
      const fill = '#' + base.map((channel, index) => Math.round(channel + (accent[index] - channel) * intensity).toString(16).padStart(2, '0')).join('')
      return {
        date: new Date(timestamp).toISOString().slice(0, 10),
        minutes: Number(match[1]) * 60 + Number(match[2]),
        title: `${match[1]} hrs ${match[2]} mins on ${match[3]}`,
        fill,
      }
    }).sort((a, b) => a.date.localeCompare(b.date)).slice(-365)
    if (!days.length) throw new Error('Wakapi daily totals missing')

    if (new URL(request.url).searchParams.get('format') === 'summary') {
      const minutes = days.reduce((total, day) => total + day.minutes, 0)
      return Response.json({ weeklyAverage: minutes / 60 * 7 / days.length, days: days.length }, {
        headers: { 'Cache-Control': 'public, max-age=300' },
      })
    }
    const svg = renderActivityChart(days, 'Daily coding activity over the past 365 days', date =>
      `0 hrs 0 mins on ${new Date(date).toUTCString().slice(0, 16)}`)
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Failed to load Wakapi activity chart:', error)
    return new Response('Coding activity temporarily unavailable', {
      status: 502,
      headers: { 'Cache-Control': 'no-store' },
    })
  }
}
