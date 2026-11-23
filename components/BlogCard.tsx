'use client'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { localizedHref } from '@/lib/i18n'
import { formatBlogDate, type BlogPostSummary } from '@/lib/blog-shared'

export default function BlogCard({ post, headingLevel = 'h2' }: { post: BlogPostSummary; headingLevel?: 'h2' | 'h3' }) {
  const { t, locale } = useLanguage()
  const b = t.blogPage
  const href = localizedHref(`/blog/${post.slug}`, locale)
  const Heading = headingLevel

  return (
    <article className="glass rounded-2xl p-6 flex flex-col gap-4 glow-hover relative">
      <div
        className="relative rounded-xl w-full aspect-video overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.06) 0%, rgba(14,156,176,0.06) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        {post.image && (
          <Image
            src={post.image}
            alt={post.imageAlt ?? ''}
            fill
            sizes="(min-width: 768px) 300px, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
            {post.tags?.[0] ?? b.label}
          </span>
          {post.draft && (
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300/80">{b.draft}</span>
          )}
        </div>
        <time dateTime={post.date} className="text-white/40 text-xs">
          {formatBlogDate(post.date, locale)}
        </time>
        <Heading className="font-serif text-lg text-white/90 leading-snug">
          {/* Stretched link makes the whole card clickable */}
          <a href={href} className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none">
            {post.title}
          </a>
        </Heading>
        <p className="text-white/50 text-sm leading-relaxed flex-1">{post.description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent" aria-hidden="true">
        {b.readArticle} &rarr;
      </span>
    </article>
  )
}
