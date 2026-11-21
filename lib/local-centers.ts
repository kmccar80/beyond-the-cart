import { parse } from 'node-html-parser'

type Center = { name: string; website?: string; phone?: string }

export async function localCenters(zip: string): Promise<Center[] | null> {
  if (!/^\d{5}$/.test(zip)) return []
  try {
    const response = await fetch(`https://www.211.org/api/program/results?location=${zip}`, { signal: AbortSignal.timeout(8000), next: { revalidate: 86400 } })
    if (!response.ok) return null
    const { results } = await response.json()
    if (!Array.isArray(results)) return null
    const centers: Center[] = []
    for (const item of results) {
      if (typeof item?.markup !== 'string') continue
      const block = parse(item.markup)
      const name = block.querySelector('h2')?.text.trim()
      if (!name) continue
      const link = block.querySelector('.search-results-item-links-search a')?.getAttribute('href') || block.querySelector('h2 a')?.getAttribute('href')
      const dial = block.querySelector('a[href^="tel:"]')?.getAttribute('href')?.slice(4).replace(/[^\d+]/g, '')
      centers.push({ name, website: link && /^https?:\/\//i.test(link) ? link : undefined, phone: dial && /^\+?\d{3,15}$/.test(dial) ? dial : undefined })
    }
    return results.length && !centers.length ? null : centers
  } catch { return null }
}
