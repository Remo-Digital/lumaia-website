import type { Metadata } from 'next'
import { getHreflangUrls, hreflangOf, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import TermsContent from './TermsContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as SiteLocale] ?? translations['de-ch']
  const hreflang = getHreflangUrls('/legal/terms')

  return {
    title: t.termsPage.meta_title,
    description: t.termsPage.meta_desc,
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default function TermsPage() {
  return <TermsContent />
}
