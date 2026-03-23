'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import Offer from '@/components/Offer'
import Modules from '@/components/Modules'
import ProcessSection from '@/components/ProcessSection'
import UseCases from '@/components/UseCases'
import Comparison from '@/components/Comparison'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function EnPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Modules />
        <ProcessSection />
        <UseCases />
        <Comparison />
        <Testimonial />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
