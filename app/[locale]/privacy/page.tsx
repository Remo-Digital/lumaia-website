import type { Metadata } from 'next'
import { getHreflangUrls, hreflangOf, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import PrivacyContent from './PrivacyContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as SiteLocale] ?? translations['de-ch']
  const hreflang = getHreflangUrls('/privacy')

  return {
    title: `${t.privacy.label} \u2013 LumAIa`,
    description: t.privacy.title + ' ' + t.privacy.title_em,
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
