// Shared by the rehype plugin (MDX build) and lib/blog.ts (table of contents), so the
// rendered <h2 id> and the TOC links always match. Plain JS because MDX plugins are
// loaded by Node outside the TypeScript build.

/**
 * URL fragment for a heading, e.g. 'Was bedeutet «agentic»?' → 'was-bedeutet-agentic'
 * @param {string} text
 * @returns {string}
 */
export function slugifyHeading(text) {
  return (
    text
      .toLowerCase()
      .replace(/ß/g, 'ss')
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  )
}

/**
 * Unique ids for heading texts in document order (duplicates get -2, -3, …)
 * @param {string[]} texts
 * @returns {string[]}
 */
export function headingIds(texts) {
  const seen = new Map()
  return texts.map((text) => {
    const base = slugifyHeading(text)
    const count = (seen.get(base) ?? 0) + 1
    seen.set(base, count)
    return count === 1 ? base : `${base}-${count}`
  })
}
