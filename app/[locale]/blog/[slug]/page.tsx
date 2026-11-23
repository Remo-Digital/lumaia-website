import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getHreflangUrls, localizedHref, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import { getAllPostParams, getPost, getPostLocales } from '@/lib/blog'
import { formatBlogDate } from '@/lib/blog-shared'

const BASE = 'https://lumaia.studio'
const HREFLANG_KEY: Record<SiteLocale, 'de-CH' | 'en-CH'> = { 'de-ch': 'de-CH', 'en-ch': 'en-CH' }

type Params = Promise<{ locale: string; slug: string }>

export async function generateStaticParams() {
  return getAllPostParams()
}

export const dynamicParams = false

/** hreflang alternates limited to the locales the post actually exists in */
async function postAlternates(slug: string) {
  const all = getHreflangUrls(`/blog/${slug}`)
  const available = await getPostLocales(slug)
  const languages: Record<string, string> = {}
  for (const locale of available) languages[HREFLANG_KEY[locale]] = all[HREFLANG_KEY[locale]]
  languages['x-default'] = available.includes('de-ch') ? all['de-CH'] : all[HREFLANG_KEY[available[0]]]
  return { all, languages }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getPost(locale as SiteLocale, slug)
  if (!post) return {}

  const { all, languages } = await postAlternates(slug)
  const canonical = all[HREFLANG_KEY[locale as SiteLocale]]

  return {
    title: `${post.meta.title} – LumAIa`,
    description: post.meta.description,
    alternates: { canonical, languages },
    robots: post.meta.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      title: post.meta.title,
      description: post.meta.description,
      url: canonical,
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
      images: post.meta.image ? [{ url: `${BASE}${post.meta.image}`, width: 800, height: 450 }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params
  const locale = rawLocale as SiteLocale
  const post = await getPost(locale, slug)
  if (!post) notFound()

  const { meta, Content } = post
  const b = translations[locale].blogPage
  const url = getHreflangUrls(`/blog/${slug}`)[HREFLANG_KEY[locale]]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    inLanguage: HREFLANG_KEY[locale],
    url,
    mainEntityOfPage: url,
    ...(meta.image ? { image: `${BASE}${meta.image}` } : {}),
    ...(meta.tags ? { keywords: meta.tags.join(', ') } : {}),
    author: { '@type': 'Person', name: meta.author },
    publisher: {
      '@type': 'Organization',
      name: 'LumAIa',
      logo: { '@type': 'ImageObject', url: `${BASE}/LUMAIA_Logo.svg` },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <article className="relative max-w-3xl mx-auto">
          <a href={localizedHref('/blog', locale)} className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-accent transition-colors mb-10">
            &larr; {b.backToBlog}
          </a>

          <header className="mb-10 animate-fade-up-1">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {(meta.tags?.length ? meta.tags : [b.label]).map((tag) => (
                <span key={tag} className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              {meta.draft && (
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300/80">{b.draft}</span>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-6">{meta.title}</h1>
            <p className="text-white/70 text-xl leading-relaxed mb-6">{meta.description}</p>
            <p className="text-white/40 text-sm">
              <time dateTime={meta.date}>{formatBlogDate(meta.date, locale)}</time>
              {' · '}
              {b.by} {meta.author}
            </p>
          </header>

          {meta.image && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 animate-fade-up-2">
              <Image src={meta.image} alt={meta.imageAlt ?? ''} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
            </div>
          )}

          <div className="animate-fade-up-2">
            <Content />
          </div>

          <aside className="glass rounded-2xl p-8 text-center mt-16">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">{b.ctaTitle}</h2>
            <p className="text-white/70 text-base mb-6">{b.ctaSub}</p>
            <a
              href={localizedHref('/contact', locale)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)', color: '#7be89f' }}
            >
              {b.contactCta} &rarr;
            </a>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  )
}
