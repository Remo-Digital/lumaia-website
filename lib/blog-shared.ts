// Blog types and helpers that are safe to use in client components (no fs access).
import { hreflangOf, type SiteLocale } from '@/lib/i18n'

export type BlogFaq = { question: string; answer: string }

/** Normalized post metadata, derived from the YAML frontmatter of content/blog/<locale>/*.mdx */
export type BlogMeta = {
  /** URL slug for this locale */
  slug: string
  /** Slug of the same article in the other locale (frontmatter `alternateSlug`) */
  alternateSlug?: string
  /** Display title (frontmatter title without a trailing "| LumAIa") */
  title: string
  /** Full title for <title>, as written in the frontmatter */
  seoTitle: string
  description: string
  /** ISO date, e.g. '2026-11-24' */
  date: string
  updated?: string
  author: string
  authorRole?: string
  /** Short author bio, shown in the author box and used as Person.description */
  authorBio?: string
  /** Author profile page (absolute URL or site path) */
  authorUrl?: string
  /** Author profiles elsewhere, e.g. LinkedIn (Person.sameAs) */
  authorSameAs?: string[]
  /** Author portrait under /public */
  authorImage?: string
  category?: string
  tags?: string[]
  readingTime?: number
  /** Path under /public, e.g. '/images/blog/my-post.webp' */
  image?: string
  imageAlt?: string
  faq?: BlogFaq[]
  /** Show a table of contents built from the `##` headings */
  toc?: boolean
  /** Drafts are visible in `next dev` only and are never part of a production build */
  draft?: boolean
}

/** Serializable post summary passed from server pages to client components */
export type BlogPostSummary = BlogMeta

export function formatBlogDate(date: string, locale: SiteLocale): string {
  return new Intl.DateTimeFormat(hreflangOf(locale), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}

export type BlogHeading = { id: string; text: string }

export { headingIds, slugifyHeading } from '@/lib/mdx/heading-ids.mjs'
