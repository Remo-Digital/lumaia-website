'use client'
import { useLanguage } from '@/lib/LanguageContext'
import type { Locale } from '@/lib/translations'

function localizedHref(href: string, locale: Locale) {
  if (locale === 'en') return `/en${href}`
  return href
}

export default function BlogTeaser() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }} aria-labelledby="blog-teaser-title">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 id="blog-teaser-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-4">
          {t.blogTeaser.title}
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed">{t.blogTeaser.sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.blogTeaser.posts.map((post, i) => (
            <article key={i} className="glass glow-hover rounded-2xl overflow-hidden transition-all duration-300">
              {/* Placeholder image */}
              <div className="h-40 bg-gradient-to-br from-accent/5 to-purple/5 flex items-center justify-center">
                <span className="text-white/15 text-sm">Blog Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-white/70 font-medium text-base mb-2">{post.title}</h3>
                <span className="text-accent text-sm">{locale === 'de' ? 'Bald verf\u00fcgbar' : 'Coming soon'}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={localizedHref('/blog', locale)}
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            {t.blogTeaser.link} &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
