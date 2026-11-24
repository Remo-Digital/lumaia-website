// Server-only blog data access. Posts live in content/blog/<locale>/*.mdx with YAML frontmatter.
// The folder decides the locale; the frontmatter `slug` decides the URL. Translations are
// linked via `alternateSlug` (slug of the same article in the other locale).
import fs from 'node:fs'
import path from 'node:path'
import { cache, type ComponentType } from 'react'
import { locales, type SiteLocale } from '@/lib/i18n'
import { headingIds, type BlogFaq, type BlogHeading, type BlogMeta } from '@/lib/blog-shared'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const SHOW_DRAFTS = process.env.NODE_ENV !== 'production'

type Frontmatter = {
  title?: string
  description?: string
  slug?: string
  alternateSlug?: string
  date?: string | Date
  updated?: string | Date
  author?: string | { name?: string; role?: string; bio?: string; url?: string; sameAs?: string | string[]; image?: string }
  category?: string
  tags?: string[]
  readingTime?: number
  image?: string
  imageAlt?: string
  faq?: BlogFaq[]
  toc?: boolean
  draft?: boolean
}

type BlogModule = { default: ComponentType; frontmatter?: Frontmatter }
/** A source linked in the article body, for the `citation` property in JSON-LD */
export type BlogCitation = { name: string; url: string }
type LoadedPost = {
  meta: BlogMeta
  Content: ComponentType
  /** `##` headings in document order, with the same ids the rendered <h2> elements get */
  headings: BlogHeading[]
  wordCount: number
  citations: BlogCitation[]
}

const toIsoDate = (value: string | Date | undefined) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : value

function normalize(fm: Frontmatter, file: string): BlogMeta {
  const missing = (['title', 'description', 'date'] as const).filter((key) => !fm[key])
  if (missing.length) throw new Error(`Blog post ${file}: missing frontmatter field(s): ${missing.join(', ')}`)

  const author = typeof fm.author === 'string' ? { name: fm.author } : fm.author ?? {}
  return {
    slug: fm.slug ?? file.replace(/(\.[a-z]{2}-[a-z]{2})?\.mdx$/i, ''),
    alternateSlug: fm.alternateSlug,
    title: fm.title!.replace(/\s*[|–-]\s*LumAIa\s*$/i, ''),
    seoTitle: fm.title!,
    description: fm.description!,
    date: toIsoDate(fm.date)!,
    updated: toIsoDate(fm.updated),
    author: author.name ?? 'LumAIa',
    authorRole: author.role,
    authorBio: author.bio,
    authorUrl: author.url,
    authorSameAs: typeof author.sameAs === 'string' ? [author.sameAs] : author.sameAs,
    authorImage: author.image,
    category: fm.category,
    tags: fm.tags,
    readingTime: fm.readingTime,
    image: fm.image,
    imageAlt: fm.imageAlt,
    faq: fm.faq,
    toc: fm.toc,
    draft: fm.draft,
  }
}

/** Plain text of inline markdown: drops links, emphasis and code markers */
const inlineText = (markdown: string) =>
  markdown
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim()

/** Headings, word count and outbound sources, read from the raw MDX source */
function analyzeSource(source: string): Pick<LoadedPost, 'headings' | 'wordCount' | 'citations'> {
  const body = source.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/```[\s\S]*?```/g, '')

  const headingTexts = [...body.matchAll(/^##\s+(.+?)\s*#*\s*$/gm)].map((m) => inlineText(m[1]))
  const ids = headingIds(headingTexts)
  const headings = headingTexts.map((text, i) => ({ id: ids[i], text }))

  const wordCount = inlineText(body.replace(/^\s*(#{1,6}|[-*]|\d+\.|\||>)\s*/gm, ' ').replace(/\|/g, ' '))
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length

  const citations = new Map<string, BlogCitation>()
  for (const [, name, url] of body.matchAll(/(?<!!)\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
    if (!citations.has(url)) citations.set(url, { name: inlineText(name), url })
  }

  return { headings, wordCount, citations: [...citations.values()] }
}

/** All posts of a locale, keyed by slug (cached per request/build worker) */
const loadLocale = cache(async (locale: SiteLocale): Promise<Map<string, LoadedPost>> => {
  const dir = path.join(CONTENT_DIR, locale)
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((file) => file.endsWith('.mdx')) : []
  const posts = new Map<string, LoadedPost>()

  for (const file of files) {
    const name = file.slice(0, -'.mdx'.length)
    // Keep the `.mdx` suffix in the template so the bundler only includes MDX files
    const mod: BlogModule = await import(`@/content/blog/${locale}/${name}.mdx`)
    const meta = normalize(mod.frontmatter ?? {}, `${locale}/${file}`)
    if (meta.draft && !SHOW_DRAFTS) continue
    if (posts.has(meta.slug)) throw new Error(`Blog: duplicate slug "${meta.slug}" in ${locale}`)
    const analysis = analyzeSource(fs.readFileSync(path.join(dir, file), 'utf8'))
    posts.set(meta.slug, { meta, Content: mod.default, ...analysis })
  }
  return posts
})

export async function getPost(locale: SiteLocale, slug: string) {
  const post = (await loadLocale(locale)).get(slug)
  return post ? { slug, ...post } : null
}

/** Published posts (plus drafts in dev), newest first */
export async function getAllPosts(locale: SiteLocale): Promise<BlogMeta[]> {
  return [...(await loadLocale(locale)).values()]
    .map((post) => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/**
 * Slug of a post in every locale where it exists. Linked via `alternateSlug` in either
 * direction, or by an identical slug.
 */
export async function getPostTranslations(locale: SiteLocale, slug: string): Promise<Partial<Record<SiteLocale, string>>> {
  const result: Partial<Record<SiteLocale, string>> = {}
  const post = await getPost(locale, slug)
  if (!post) return result
  result[locale] = slug

  for (const other of locales) {
    if (other === locale) continue
    const posts = await loadLocale(other)
    const match =
      (post.meta.alternateSlug && posts.get(post.meta.alternateSlug)) ||
      [...posts.values()].find((p) => p.meta.alternateSlug === slug) ||
      posts.get(slug)
    if (match) result[other] = match.meta.slug
  }
  return result
}

export async function getAllPostParams(): Promise<{ locale: SiteLocale; slug: string }[]> {
  const params = await Promise.all(locales.map(async (locale) => (await getAllPosts(locale)).map((post) => ({ locale, slug: post.slug }))))
  return params.flat()
}
