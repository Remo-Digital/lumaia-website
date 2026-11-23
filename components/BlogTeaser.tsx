'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'
import BlogCard from '@/components/BlogCard'
import type { BlogPostSummary } from '@/lib/blog-shared'

export default function BlogTeaser({ posts }: { posts: BlogPostSummary[] }) {
  const { t, locale } = useLanguage()

  if (posts.length === 0) return null

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: '#070512' }} aria-labelledby="blog-teaser-title">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 id="blog-teaser-title" className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-4">
          {t.blogTeaser.title} <em className="gradient-text not-italic italic">{t.blogTeaser.title_em}</em>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mb-12 leading-relaxed">{t.blogTeaser.sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} headingLevel="h3" />
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
