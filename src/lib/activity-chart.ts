type ActivityCell = { date: string; fill: string; title: string }

const escapeXml = (text: string) => text.replace(/[<>&"']/g, character => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!)

// Keep 365 activity days; fill the final week with visual-only placeholders.
export function renderActivityChart(days: ActivityCell[], title: string, emptyTitle: (date: string) => string) {
  const period = [...days].sort((a, b) => a.date.localeCompare(b.date)).slice(-365)
  if (!period.length) throw new Error('Activity days missing')
  const firstDate = Date.parse(period[0].date)
  const offset = (new Date(firstDate).getUTCDay() + 6) % 7
  const position = (date: string) => Math.round((Date.parse(date) - firstDate) / 86_400_000) + offset
  const lastPosition = position(period[period.length - 1].date)
  const weeks = Math.floor(lastPosition / 7) + 1
  const positions = new Set(period.map(day => position(day.date)))
  const dateAtPosition = (index: number) => new Date(firstDate + (index - offset) * 86_400_000).toISOString().slice(0, 10)
  const emptyCells = Array.from({ length: weeks * 7 }, (_, index) => {
    if (positions.has(index)) return ''
    const date = dateAtPosition(index)
    return `<rect x="${Math.floor(index / 7) * 23}" y="${index % 7 * 23}" width="20" height="20" rx="3" fill="#1a1e1b"><title>${escapeXml(emptyTitle(date))}</title></rect>`
  }).join('')
  const cells = period.map(day => {
    const index = position(day.date)
    return `<rect x="${Math.floor(index / 7) * 23}" y="${index % 7 * 23}" width="20" height="20" rx="3" fill="${escapeXml(day.fill)}"><title>${escapeXml(day.title)}</title></rect>`
  }).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${weeks * 23} 158" width="100%" height="100%"><title>${escapeXml(title)}</title><style>rect:hover { filter: brightness(1.2); }</style>${emptyCells}${cells}</svg>`
}
