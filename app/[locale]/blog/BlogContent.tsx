'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref, isGerman } from '@/lib/i18n'
import type { BlogPostSummary } from '@/lib/blog-shared'

export default function BlogContent({ posts }: { posts: BlogPostSummary[] }) {
  const { t, locale } = useLanguage()
  const b = t.blogPage

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
              {b.label}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4">
              {b.title} <em className="gradient-text not-italic">{b.title_em}</em>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">{b.sub}</p>
          </header>

          {/* Blog cards */}
          {posts.length > 0 && (
            <section className="grid md:grid-cols-3 gap-6 animate-fade-up-2 mb-16" aria-label={b.articlesLabel}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </section>
          )}

          {/* Contact / coming soon notice */}
          <section className="glass rounded-2xl p-8 text-center animate-fade-up-3" aria-label={isGerman(locale) ? 'Kontakt' : 'Contact'}>
            <p className="text-white/70 text-base mb-6">{posts.length > 0 ? b.ctaSub : b.comingSoon}</p>
            <a
              href={localizedHref('/contact', locale)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)', color: '#7be89f' }}
            >
              {b.contactCta} &rarr;
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
