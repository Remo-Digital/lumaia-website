import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { modules } from '@/lib/modules'
import { locales, getHreflangUrls, hreflangOf, baseLocaleOf, type SiteLocale } from '@/lib/i18n'
import ModuleComingSoon from '@/components/ModuleComingSoon'

export function generateStaticParams() {
  const params: { locale: string; phase: string; slug: string }[] = []
  for (const locale of locales) {
    for (const mod of modules) {
      if (mod.status === 'live') continue
      params.push({ locale, phase: mod.phase, slug: mod.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; phase: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const mod = modules.find(m => m.slug === slug && m.status !== 'live')
  if (!mod) return {}

  const hreflang = getHreflangUrls(mod.url)

  return {
    title: `${mod.name[baseLocaleOf(locale as SiteLocale)]} \u2013 LumAIa`,
    description: mod.description[baseLocaleOf(locale as SiteLocale)],
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ locale: string; phase: string; slug: string }>
}) {
  const { slug } = await params
  const mod = modules.find(m => m.slug === slug && m.status !== 'live')

  if (!mod) {
    notFound()
  }

  return <ModuleComingSoon slug={slug} />
}
