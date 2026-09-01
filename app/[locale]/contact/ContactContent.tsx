'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubSpotForm from '@/components/HubSpotForm'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'

export default function ContactContent() {
  const { t, locale } = useLanguage()
  const c = t.contact

  return (
    <>
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {c.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {c.title} <em className="gradient-text not-italic">{c.title_em}</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">{c.sub}</p>
          </header>

          <div className="max-w-2xl mx-auto animate-fade-up-2">
            {/* HubSpot Form */}
            <section className="glass rounded-2xl p-8" aria-label={locale === 'de' ? 'Kontaktformular' : 'Contact form'}>
              <HubSpotForm
                formId={c.formId}
                consentText={c.consentText}
                privacyHref={localizedHref('/privacy', locale)}
                privacyLabel={c.privacyLabel}
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
