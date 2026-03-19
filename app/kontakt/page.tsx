'use client'
import { useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubSpotForm from '@/components/HubSpotForm'
import { useLanguage } from '@/lib/LanguageContext'

export default function KontaktPage() {
  const { t, setLocale } = useLanguage()

  useEffect(() => {
    setLocale('de')
  }, [setLocale])

  const c = t.contact

  return (
    <>
      <Nav />
      <main className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {c.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {c.title} <em className="gradient-text not-italic">{c.title_em}</em>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">{c.sub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up-2">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {[
                { label: c.info.email_label, value: c.info.email_value },
                { label: c.info.location_label, value: c.info.location_value },
                { label: c.info.response_label, value: c.info.response_value },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-2xl p-5 glow-hover">
                  <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-1">{label}</p>
                  <p className="text-white/80 text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* HubSpot Form */}
            <div className="md:col-span-2 glass rounded-2xl p-8">
              <HubSpotForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
