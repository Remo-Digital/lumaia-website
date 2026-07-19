'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function ImprintContent() {
  const { t } = useLanguage()
  const im = t.imprint

  return (
    <>
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto">
          <header className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {im.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {im.title}{im.title_em && <em className="gradient-text not-italic"> {im.title_em}</em>}
            </h1>
          </header>

          <section className="glass rounded-2xl p-8 md:p-12 animate-fade-up-2 flex flex-col gap-8" aria-label={im.label}>
            {[
              { label: im.company, value: 'iundf Dewave AG' },
              { label: im.address, value: 'Schweiz' },
              { label: im.email, value: 'hello@lumaia.ai', href: 'mailto:hello@lumaia.ai' },
              { label: im.register, value: 'Handelsregister Kanton Z\u00fcrich' },
              { label: im.vat, value: 'CHE-XXX.XXX.XXX MWST' },
              { label: im.responsible, value: 'iundf Dewave AG' },
            ].map(({ label, value, href }) => (
              <div key={label} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <p className="text-white/50 text-xs font-semibold tracking-[0.15em] uppercase mb-1">{label}</p>
                {href
                  ? <a href={href} className="text-white/70 text-sm hover:text-accent transition-colors">{value}</a>
                  : <p className="text-white/70 text-sm">{value}</p>
                }
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
