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
  title: 'LumAIa \u2013 The Agentic Agency Platform for Marketing',
  description: 'LumAIa automates your entire marketing workflow \u2013 from strategy to campaign optimization. 10\u00d7 faster, 70% cheaper, 100% brand-safe. Become a pilot partner today.',
}

export default function EnPage() {
  return (
    <>
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
