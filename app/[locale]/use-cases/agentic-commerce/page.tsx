import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import AgenticCommerceContent from './AgenticCommerceContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as keyof typeof translations] || translations.de
  const hreflang = getHreflangUrls('/use-cases/agentic-commerce')

  return {
    title: t.agenticCommerce.meta_title,
    description: t.agenticCommerce.meta_desc,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function AgenticCommercePage() {
  return <AgenticCommerceContent />
}
