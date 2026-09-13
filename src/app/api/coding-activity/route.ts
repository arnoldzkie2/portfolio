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
    let svg = await fetchChart()
    if (new URL(request.url).searchParams.get('format') === 'summary') {
      const days = Array.from(svg.matchAll(/<title>(\d+) hrs (\d+) mins on [^<]+<\/title>/g)).slice(-365)
      if (!days.length) throw new Error('Wakapi daily totals missing')
      const minutes = days.reduce((total, day) => total + Number(day[1]) * 60 + Number(day[2]), 0)
      return Response.json({ weeklyAverage: minutes / 60 * 7 / days.length, days: days.length }, {
        headers: { 'Cache-Control': 'public, max-age=300' },
      })
    }
    const dimensions = svg.match(/<svg\s+width="([\d.]+)"\s+height="([\d.]+)"/)
    if (!dimensions) throw new Error('Unexpected chart format')

    // Crop the empty heading/footer space to the activity grid (y=25 through 183).
    svg = svg.replace(dimensions[0], `<svg viewBox="0 25 ${dimensions[1]} 158" width="100%" height="100%"`)
    // Remove the date heading and the bottom-right Wakapi logo, keeping day titles.
    svg = svg.replace(/<text\b[^>]*>[\s\S]*?<\/text>/gi, '')
    svg = svg.replace(/<g\b[^>]*>\s*<title>Wakapi\.dev<\/title>\s*<image\b[^>]*\/?>\s*<\/g>/gi, '')
    svg = svg.replace('fill: #37474F', 'fill: #a0a59d')
    // Map Wakapi's pale-to-dark green scale onto our dark-to-lime palette.
    svg = svg.replace(/(<rect\b[^>]*style="fill: )#([\da-f]{6})/gi, (_, prefix: string, color: string) => {
      const intensity = Math.max(0, Math.min(1, (220 - parseInt(color.slice(0, 2), 16)) / 216))
      const base = [26, 30, 27]
      const accent = [206, 242, 115]
      const themed = base.map((channel, index) => Math.round(channel + (accent[index] - channel) * intensity).toString(16).padStart(2, '0')).join('')
      return `${prefix}#${themed}`
    })

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        // Keep the third-party SVG inert while allowing its styles and titles.
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
