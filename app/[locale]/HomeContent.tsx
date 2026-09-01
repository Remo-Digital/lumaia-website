'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustLogos from '@/components/TrustLogos'
import Problem from '@/components/Problem'
import FourPhases from '@/components/FourPhases'
import DemoCta from '@/components/DemoCta'
import AgenticCommerceTeaser from '@/components/AgenticCommerceTeaser'
import TrustArchitecture from '@/components/TrustArchitecture'
import ProductAssetStudioTeaser from '@/components/ProductAssetStudioTeaser'
import TestimonialsSection from '@/components/TestimonialsSection'
import Comparison from '@/components/Comparison'
import PricingTeaser from '@/components/PricingTeaser'
import FAQ from '@/components/FAQ'
// import BlogTeaser from '@/components/BlogTeaser'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function HomeContent() {
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
      lowPrice: '39',
      highPrice: '499',
      priceCurrency: 'CHF',
      offerCount: '4',
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
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustLogos />
        <Problem />
       {/*  <FourPhases /> */}
        <ProductAssetStudioTeaser />
        <DemoCta />
        <AgenticCommerceTeaser />
        <TrustArchitecture />
        <ProductAssetStudioTeaser />
        <TestimonialsSection />
        <Comparison />
        {/* <PricingTeaser /> */}
        <FAQ />
        {/* <BlogTeaser /> */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
