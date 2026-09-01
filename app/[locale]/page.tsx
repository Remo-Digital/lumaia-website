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
    de: 'LumAIa \u2013 Die Agentic Agency Plattform f\u00fcr Marketing',
    en: 'LumAIa \u2013 The Agentic Agency Platform for Marketing',
  }

  const descriptions: Record<string, string> = {
    de: 'LumAIa automatisiert den gesamten Marketing-Workflow \u2013 von Strategie bis Kampagnen-Optimierung. 10\u00d7 schneller, 70% g\u00fcnstiger, 100% Brand-Safe. Jetzt Pilot-Partner werden.',
    en: 'LumAIa automates the entire marketing workflow \u2013 from strategy to campaign optimization. 10\u00d7 faster, 70% cheaper, 100% brand-safe. Become a pilot partner now.',
  }

  return {
    title: titles[locale] || titles.de,
    description: descriptions[locale] || descriptions.de,
    alternates: {
      canonical: hreflang[locale === 'en' ? 'en-CH' : 'de-CH'],
      languages: hreflang,
    },
  }
}

export default function Home() {
  return <HomeContent />
}
