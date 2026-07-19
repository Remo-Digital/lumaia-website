import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import SignupContent from './SignupContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as keyof typeof translations] || translations.de
  const hreflang = getHreflangUrls('/signup')

  return {
    title: t.signupPage.meta_title,
    description: t.signupPage.meta_desc,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function SignupPage() {
  return <SignupContent />
}
