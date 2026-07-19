import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import ProductAssetStudioContent from './ProductAssetStudioContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as keyof typeof translations] || translations.de
  const hreflang = getHreflangUrls('/plattform/product-asset-studio')

  return {
    title: `Product Asset Studio \u2013 LumAIa`,
    description: t.pas.directOffer,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function ProductAssetStudioPage() {
  return <ProductAssetStudioContent />
}
