import type { Metadata } from 'next'
import { getHreflangUrls } from '@/lib/i18n'
import HomeContent from './HomeContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hreflang = getHreflangUrls('/')

  const titles: Record<string, string> = {
    de: 'Die Agentic Agency Plattform f\u00fcr E-Commerce | LumAIa',
    en: 'The Agentic Agency Platform for E-Commerce | LumAIa',
  }

  const descriptions: Record<string, string> = {
    de: 'Ihre Produkte m\u00fcssen auf jedem Kanal und in KI-Antworten sichtbar sein. LumAIa automatisiert Produktbilder, Feeds und Kampagnen \u2013 skalierbar, Brand-konform, messbar.',
    en: 'Your products must be visible on every channel and in AI responses. LumAIa automates product images, feeds, and campaigns \u2013 scalable, brand-safe, measurable.',
  }

  return {
    title: titles[locale] || titles.de,
    description: descriptions[locale] || descriptions.de,
    alternates: {
      canonical: hreflang[locale === 'en-ch' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function Home() {
  return <HomeContent />
}
