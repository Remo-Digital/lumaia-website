import type { Metadata } from 'next'
import { getHreflangUrls, type SiteLocale, hreflangOf, languageOf } from '@/lib/i18n'
import { getAllPosts } from '@/lib/blog'
import HomeContent from './HomeContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const hreflang = getHreflangUrls('/')

  const titles: Record<'de' | 'en', string> = {
    de: 'Die Agentic Agency Plattform f\u00fcr E-Commerce | LumAIa',
    en: 'The Agentic Agency Platform for E-Commerce | LumAIa',
  }

  const descriptions: Record<'de' | 'en', string> = {
    de: 'Ihre Produkte m\u00fcssen auf jedem Kanal und in KI-Antworten sichtbar sein. LumAIa automatisiert Produktbilder, Feeds und Kampagnen \u2013 skalierbar, Brand-konform, messbar.',
    en: 'Your products must be visible on every channel and in AI responses. LumAIa automates product images, feeds, and campaigns \u2013 scalable, brand-safe, measurable.',
  }

  return {
    title: titles[languageOf(locale as SiteLocale)],
    description: descriptions[languageOf(locale as SiteLocale)],
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const latestPosts = (await getAllPosts(locale as SiteLocale)).slice(0, 3)
  return <HomeContent latestPosts={latestPosts} />
}
