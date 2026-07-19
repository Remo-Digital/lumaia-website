'use client'
import TopBanner from '@/components/TopBanner'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'

export default function BlogPage() {
  const { t } = useLanguage()
  const b = t.blogPage
  const bt = t.blogTeaser

  return (
    <>
      <TopBanner />
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-up-1">
            <span className="glass-accent text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {b.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {b.title} <em className="gradient-text not-italic">{b.title_em}</em>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">{b.sub}</p>
          </header>

          {/* Blog cards */}
          <section className="grid md:grid-cols-3 gap-6 animate-fade-up-2 mb-16" aria-label="Blog-Artikel">
            {bt.posts.map((post, i) => (
              <article key={i} className="glass rounded-2xl p-6 flex flex-col gap-4 glow-hover">
                {/* Placeholder image area */}
                <div
                  className="rounded-xl w-full aspect-video"
                  style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.06) 0%, rgba(14,156,176,0.06) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2 flex-1">
                  <span className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full self-start">
                    {b.label}
                  </span>
                  <h2 className="font-serif text-lg text-white/80 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-white/35 text-sm leading-relaxed flex-1">{b.comingSoon}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/30 cursor-not-allowed"
                  aria-disabled="true"
                >
                  Artikel lesen &rarr;
                </span>
              </article>
            ))}
          </section>

          {/* Coming soon notice */}
          <section className="glass rounded-2xl p-8 text-center animate-fade-up-3" aria-label="Ankündigung">
            <p className="text-white/50 text-base mb-6">{b.comingSoon}</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)', color: '#7be89f' }}
            >
              Kontakt aufnehmen &rarr;
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
