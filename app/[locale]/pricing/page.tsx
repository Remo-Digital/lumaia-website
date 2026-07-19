import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import PricingContent from './PricingContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as keyof typeof translations] || translations.de
  const hreflang = getHreflangUrls('/pricing')

  return {
    title: t.pricingPage.meta_title,
    description: t.pricingPage.meta_desc,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function PricingPage() {
  return <PricingContent />
}
