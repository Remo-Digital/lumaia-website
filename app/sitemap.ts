import { defaultLocale, xDefaultLocale, getHreflangUrls, hreflangOf, localizedUrl, locales, type SiteLocale } from '@/lib/i18n'
import { getAllPosts, getPostTranslations } from '@/lib/blog'
import type { MetadataRoute } from 'next'

const routes = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/plattform', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/plattform/product-asset-studio', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/use-cases', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/use-cases/agentic-commerce', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/signup', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/imprint', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/legal/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split('T')[0]
  const entries: MetadataRoute.Sitemap = []

  // Static routes × locales
  for (const route of routes) {
    const alternates = getHreflangUrls(route.path)
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(route.path, locale),
        lastModified: today,
        changeFrequency: route.changeFrequency,
        priority: locale === defaultLocale ? route.priority : Math.round(Math.max(route.priority - 0.1, 0.1) * 10) / 10,
        alternates: { languages: alternates },
      })
    }
  }

  // Blog posts × locales (hreflang only for locales the post exists in)
  for (const locale of locales) {
    for (const post of await getAllPosts(locale)) {
      const languages: Record<string, string> = {}
      const translated = await getPostTranslations(locale, post.slug)
      for (const [other, slug] of Object.entries(translated) as [SiteLocale, string][]) {
        languages[hreflangOf(other)] = localizedUrl(`/blog/${slug}`, other)
      }
      languages['x-default'] = languages[hreflangOf(xDefaultLocale)] ?? languages[hreflangOf(defaultLocale)] ?? Object.values(languages)[0]
      entries.push({
        url: localizedUrl(`/blog/${post.slug}`, locale),
        lastModified: post.updated ?? post.date,
        changeFrequency: 'monthly',
        priority: locale === defaultLocale ? 0.6 : 0.5,
        alternates: { languages },
      })
    }
  }

  return entries
}
