// Server-only blog data access. Posts live in content/blog/<locale>/<slug>.mdx;
// the same slug is used in every locale so hreflang and the language switcher line up.
import fs from 'node:fs'
import path from 'node:path'
import type { ComponentType } from 'react'
import { locales, type SiteLocale } from '@/lib/i18n'
import type { BlogMeta, BlogPostSummary } from '@/lib/blog-shared'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')
const SHOW_DRAFTS = process.env.NODE_ENV !== 'production'

type BlogModule = { default: ComponentType; meta: BlogMeta }

function readSlugs(locale: SiteLocale): string[] {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

async function loadModule(locale: SiteLocale, slug: string): Promise<BlogModule | null> {
  if (!readSlugs(locale).includes(slug)) return null
  const mod: BlogModule = await import(`@/content/blog/${locale}/${slug}.mdx`)
  if (mod.meta.draft && !SHOW_DRAFTS) return null
  return mod
}

export async function getPost(locale: SiteLocale, slug: string) {
  const mod = await loadModule(locale, slug)
  if (!mod) return null
  return { slug, meta: mod.meta, Content: mod.default }
}

/** Published posts (plus drafts in dev), newest first */
export async function getAllPosts(locale: SiteLocale): Promise<BlogPostSummary[]> {
  const posts = await Promise.all(readSlugs(locale).map((slug) => loadModule(locale, slug).then((mod) => (mod ? { ...mod.meta, slug } : null))))
  return posts
    .filter((post): post is BlogPostSummary => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Locales in which a given slug is available (used for hreflang) */
export async function getPostLocales(slug: string): Promise<SiteLocale[]> {
  const available = await Promise.all(locales.map(async (locale) => ((await loadModule(locale, slug)) ? locale : null)))
  return available.filter((locale): locale is SiteLocale => locale !== null)
}

export async function getAllPostParams(): Promise<{ locale: SiteLocale; slug: string }[]> {
  const params = await Promise.all(locales.map(async (locale) => (await getAllPosts(locale)).map((post) => ({ locale, slug: post.slug }))))
  return params.flat()
}
