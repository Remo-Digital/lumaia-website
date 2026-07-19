import { modules } from '@/lib/modules'
import { locales } from '@/lib/i18n'
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

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const entries: MetadataRoute.Sitemap = []

  // Static routes × locales
  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}${route.path === '/' ? '' : route.path}`,
        lastModified: today,
        changeFrequency: route.changeFrequency,
        priority: locale === 'de' ? route.priority : Math.max(route.priority - 0.1, 0.1),
      })
    }
  }

  // Module pages (coming-soon) × locales
  for (const mod of modules) {
    if (mod.status === 'live') continue
    for (const locale of locales) {
      entries.push({
        url: `${BASE}/${locale}${mod.url}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: locale === 'de' ? 0.4 : 0.3,
      })
    }
  }

  return entries
}
