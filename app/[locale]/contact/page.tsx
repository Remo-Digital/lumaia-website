import type { Metadata } from 'next'
import { getHreflangUrls, hreflangOf, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import ContactContent from './ContactContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as SiteLocale] ?? translations['de-ch']
  const hreflang = getHreflangUrls('/contact')

  return {
    title: `${t.contact.label} \u2013 LumAIa`,
    description: t.contact.sub,
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default function ContactPage() {
  return <ContactContent />
}
