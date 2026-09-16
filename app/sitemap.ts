import { locales, translatePath, type SiteLocale } from '@/lib/i18n'
import type { MetadataRoute } from 'next'

const BASE = 'https://lumaia.studio'

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

function buildAlternates(internalPath: string) {
  const deSlug = translatePath(internalPath, 'de-ch')
  const enSlug = translatePath(internalPath, 'en-ch')
  const deUrl = `${BASE}/de-ch${deSlug === '/' ? '' : deSlug}`
  const enUrl = `${BASE}/en-ch${enSlug === '/' ? '' : enSlug}`
  return {
    'de-CH': deUrl,
    'en-CH': enUrl,
    'x-default': deUrl,
  }
}

function localizedUrl(internalPath: string, locale: SiteLocale) {
  const slug = translatePath(internalPath, locale)
  return `${BASE}/${locale}${slug === '/' ? '' : slug}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]
  const entries: MetadataRoute.Sitemap = []

  // Static routes × locales
  for (const route of routes) {
    const alternates = buildAlternates(route.path)
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(route.path, locale),
        lastModified: today,
        changeFrequency: route.changeFrequency,
        priority: locale === 'de-ch' ? route.priority : Math.round(Math.max(route.priority - 0.1, 0.1) * 10) / 10,
        alternates: { languages: alternates },
      })
    }
  }

  return entries
}
