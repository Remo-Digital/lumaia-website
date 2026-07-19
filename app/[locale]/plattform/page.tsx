import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import PlattformContent from './PlattformContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as keyof typeof translations] || translations.de
  const hreflang = getHreflangUrls('/plattform')

  return {
    title: t.platformPage.meta_title,
    description: t.platformPage.meta_desc,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function PlattformPage() {
  return <PlattformContent />
}
