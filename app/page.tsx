import type { Metadata } from 'next'
import TopBanner from '@/components/TopBanner'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustLogos from '@/components/TrustLogos'
import Problem from '@/components/Problem'
import FourPhases from '@/components/FourPhases'
import DemoCta from '@/components/DemoCta'
import AgenticCommerceTeaser from '@/components/AgenticCommerceTeaser'
import TrustArchitecture from '@/components/TrustArchitecture'
import TestimonialsSection from '@/components/TestimonialsSection'
import Comparison from '@/components/Comparison'
import PricingTeaser from '@/components/PricingTeaser'
import FAQ from '@/components/FAQ'
import BlogTeaser from '@/components/BlogTeaser'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'LumAIa \u2013 Die Agentic Agency Plattform f\u00fcr Marketing',
  description: 'LumAIa automatisiert den gesamten Marketing-Workflow \u2013 von Strategie bis Kampagnen-Optimierung. 10\u00d7 schneller, 70% g\u00fcnstiger, 100% Brand-Safe. Jetzt Pilot-Partner werden.',
  alternates: {
    canonical: 'https://lumaia.studio/',
    languages: {
      'de-CH': 'https://lumaia.studio/',
      'de-DE': 'https://lumaia.studio/',
      'de-AT': 'https://lumaia.studio/',
      'en-US': 'https://lumaia.studio/en/',
      'en-CH': 'https://lumaia.studio/en/',
      'x-default': 'https://lumaia.studio/',
    },
  },
}

export default function Home() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LumAIa',
    applicationCategory: 'BusinessApplication',
    description: 'Die Agentic Agency Plattform f\u00fcr Marketing \u2013 Strategie, Produktion und Kampagnen-Optimierung in einem System.',
    url: 'https://lumaia.studio',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '29',
      highPrice: '449',
      priceCurrency: 'CHF',
      offerCount: '2',
    },
    creator: {
      '@type': 'Organization',
      name: 'iundf Dewave AG',
      url: 'https://lumaia.studio',
      address: { '@type': 'PostalAddress', addressCountry: 'CH' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <TopBanner />
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustLogos />
        <Problem />
        <FourPhases />
        <DemoCta />
        <AgenticCommerceTeaser />
        <TrustArchitecture />
        <TestimonialsSection />
        <Comparison />
        <PricingTeaser />
        <FAQ />
        <BlogTeaser />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
