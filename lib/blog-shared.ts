// Blog types and helpers that are safe to use in client components (no fs access).
import type { SiteLocale } from '@/lib/i18n'

/** Shape of `export const meta = { ... }` in each content/blog/<locale>/<slug>.mdx file */
export type BlogMeta = {
  title: string
  description: string
  /** ISO date, e.g. '2026-11-23' */
  date: string
  author: string
  /** Path under /public, e.g. '/blog/my-post.webp' (800×450 .webp) */
  image?: string
  imageAlt?: string
  tags?: string[]
  /** Drafts are visible in `next dev` only and are never part of a production build */
  draft?: boolean
}

/** Serializable post summary passed from server pages to client components */
export type BlogPostSummary = BlogMeta & { slug: string }

export function formatBlogDate(date: string, locale: SiteLocale): string {
  return new Intl.DateTimeFormat(locale === 'de-ch' ? 'de-CH' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}
