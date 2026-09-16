'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function PrivacyContent() {
  const { t } = useLanguage()
  const p = t.privacy

  return (
    <>
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-2xl mx-auto">
          <header className="text-center mb-12 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {p.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {p.title}<em className="gradient-text not-italic">{p.title_em}</em>
            </h1>
          </header>

          <article className="glass rounded-2xl p-8 md:p-12 animate-fade-up-2">
            {/* Intro & Version */}
            <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line mb-2">{p.intro}</p>
            <p className="text-white/50 text-xs mb-6">{p.version}</p>

            {/* Translation note (EN only) */}
            {'translationNote' in p && (
              <div className="glass-accent rounded-xl p-4 mb-8">
                <p className="text-accent/80 text-xs leading-relaxed">{(p as { translationNote: string }).translationNote}</p>
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10">
              {p.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="font-serif text-lg text-white mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
