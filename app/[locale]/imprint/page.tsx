import type { Metadata } from 'next'
import { getHreflangUrls, hreflangOf, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import ImprintContent from './ImprintContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as SiteLocale] ?? translations['de-ch']
  const hreflang = getHreflangUrls('/imprint')

  return {
    title: `${t.imprint.label} \u2013 LumAIa`,
    description: `${t.imprint.title} ${t.imprint.title_em}`.trim(),
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default function ImprintPage() {
  return <ImprintContent />
}
