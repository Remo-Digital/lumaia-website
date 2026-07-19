import { modules } from '@/lib/modules'
import type { MetadataRoute } from 'next'

const BASE = 'https://lumaia.studio'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const entries: MetadataRoute.Sitemap = [
    // ── Homepage ──
    { url: `${BASE}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/en`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },

    // ── Platform overview ──
    { url: `${BASE}/plattform`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/plattform`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },

    // ── Product Asset Studio (live module) ──
    { url: `${BASE}/plattform/product-asset-studio`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/en/plattform/product-asset-studio`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },

    // ── Use Cases ──
    { url: `${BASE}/use-cases`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/use-cases`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/use-cases/agentic-commerce`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/use-cases/agentic-commerce`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },

    // ── Pricing ──
    { url: `${BASE}/pricing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/pricing`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },

    // ── Blog ──
    { url: `${BASE}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/en/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.5 },

    // ── Contact ──
    { url: `${BASE}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },

    // ── Signup ──
    { url: `${BASE}/signup`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/en/signup`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },

    // ── Legal ──
    { url: `${BASE}/privacy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/en/privacy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/imprint`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/en/imprint`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/terms`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/en/legal/terms`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // ── Module pages (coming-soon) ──
  for (const mod of modules) {
    if (mod.status === 'live') continue // Product Asset Studio already listed above
    entries.push({
      url: `${BASE}${mod.url}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.4,
    })
    entries.push({
      url: `${BASE}/en${mod.url}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.3,
    })
  }

  return entries
}
