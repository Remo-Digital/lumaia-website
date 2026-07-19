'use client'
import TopBanner from '@/components/TopBanner'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function SignupPage() {
  const { t } = useLanguage()
  const s = t.signupPage

  return (
    <>
      <TopBanner />
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-2xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {s.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {s.title} <em className="gradient-text not-italic">{s.title_em}</em>
            </h1>
            <p className="text-white/50 text-lg max-w-md mx-auto">{s.sub}</p>
          </header>

          {/* Coming soon card */}
          <section className="glass rounded-2xl p-10 text-center animate-fade-up-2 flex flex-col items-center gap-6" aria-label="Signup coming soon">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.12) 0%, rgba(14,156,176,0.12) 100%)', border: '1px solid rgba(123,232,159,0.15)' }}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="12" stroke="#7be89f" strokeWidth="1.5" strokeOpacity="0.6" />
                <path d="M14 8v6l4 2" stroke="#7be89f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <p className="text-white/60 text-base leading-relaxed mb-2">{s.comingSoon}</p>
              <p className="text-white/35 text-sm">Product Asset Studio · Self-Serve</p>
            </div>

            <a
              href="/en/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.18) 0%, rgba(14,156,176,0.18) 100%)', border: '1px solid rgba(123,232,159,0.25)', color: '#7be89f' }}
            >
              {s.cta} &rarr;
            </a>

            <p className="text-white/25 text-xs">No credit card. Free demo session.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
