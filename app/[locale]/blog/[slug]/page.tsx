import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getHreflangUrls, localizedHref, type SiteLocale } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import { getAllPostParams, getPost, getPostTranslations } from '@/lib/blog'
import { formatBlogDate, slugifyHeading } from '@/lib/blog-shared'

const BASE = 'https://lumaia.studio'
const HREFLANG_KEY: Record<SiteLocale, 'de-CH' | 'en-CH'> = { 'de-ch': 'de-CH', 'en-ch': 'en-CH' }

type Params = Promise<{ locale: string; slug: string }>

export async function generateStaticParams() {
  return getAllPostParams()
}

export const dynamicParams = false

const postUrl = (locale: SiteLocale, slug: string) => getHreflangUrls(`/blog/${slug}`)[HREFLANG_KEY[locale]]

/** Absolute URLs of every language version of a post, for hreflang */
async function postAlternates(locale: SiteLocale, slug: string) {
  const translationsBySlug = await getPostTranslations(locale, slug)
  const languages: Record<string, string> = {}
  for (const [l, s] of Object.entries(translationsBySlug) as [SiteLocale, string][]) {
    languages[HREFLANG_KEY[l]] = postUrl(l, s)
  }
  languages['x-default'] = languages['de-CH'] ?? languages['en-CH']
  return { translationsBySlug, languages }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = rawLocale as SiteLocale
  const post = await getPost(locale, slug)
  if (!post) return {}

  const { meta } = post
  const { languages } = await postAlternates(locale, slug)
  const canonical = postUrl(locale, slug)

  return {
    // Frontmatter titles already include the brand, so bypass the layout's title template
    title: meta.seoTitle === meta.title ? meta.title : { absolute: meta.seoTitle },
    description: meta.description,
    alternates: { canonical, languages },
    robots: meta.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      title: meta.title,
      description: meta.description,
      url: canonical,
      publishedTime: meta.date,
      modifiedTime: meta.updated,
      authors: [meta.author],
      tags: meta.tags,
      images: meta.image ? [{ url: `${BASE}${meta.image}` }] : undefined,
    },
  }
}

/** Absolute URL for a site path; absolute URLs pass through */
const absolute = (url: string) => (/^https?:\/\//.test(url) ? url : `${BASE}${url}`)

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params
  const locale = rawLocale as SiteLocale
  const post = await getPost(locale, slug)
  if (!post) notFound()

  const { meta, Content, headings, wordCount, citations } = post
  const b = translations[locale].blogPage
  const url = postUrl(locale, slug)
  const blogUrl = getHreflangUrls('/blog')[HREFLANG_KEY[locale]]
  const homeUrl = `${BASE}/${locale}`
  const { translationsBySlug } = await postAlternates(locale, slug)

  // Language switcher: link to the translated slug, or the blog overview if there is no translation
  const localeHrefs = Object.fromEntries(
    (['de-ch', 'en-ch'] as const).map((l) => [l, localizedHref(translationsBySlug[l] ? `/blog/${translationsBySlug[l]}` : '/blog', l)]),
  ) as Record<SiteLocale, string>

  // Stable entity ids, so the same organization and author are recognised across pages
  const ids = {
    website: `${BASE}/#website`,
    organization: `${BASE}/#organization`,
    author: `${BASE}/#person-${slugifyHeading(meta.author)}`,
    blog: `${blogUrl}#blog`,
    page: url,
    article: `${url}#article`,
    breadcrumb: `${url}#breadcrumb`,
    image: `${url}#primaryimage`,
    faq: `${url}#faq`,
  }
  const language = HREFLANG_KEY[locale]
  const showToc = meta.toc && headings.length > 1

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ids.organization,
        name: 'LumAIa',
        url: BASE,
        logo: { '@type': 'ImageObject', url: `${BASE}/LUMAIA_Logo.svg` },
      },
      {
        '@type': 'WebSite',
        '@id': ids.website,
        name: 'LumAIa',
        url: BASE,
        publisher: { '@id': ids.organization },
      },
      {
        '@type': 'Person',
        '@id': ids.author,
        name: meta.author,
        ...(meta.authorRole ? { jobTitle: meta.authorRole } : {}),
        ...(meta.authorBio ? { description: meta.authorBio } : {}),
        ...(meta.authorUrl ? { url: absolute(meta.authorUrl) } : {}),
        ...(meta.authorImage ? { image: absolute(meta.authorImage) } : {}),
        ...(meta.authorSameAs?.length ? { sameAs: meta.authorSameAs } : {}),
        worksFor: { '@id': ids.organization },
      },
      {
        '@type': 'Blog',
        '@id': ids.blog,
        name: `${b.label} – LumAIa`,
        url: blogUrl,
        inLanguage: language,
        publisher: { '@id': ids.organization },
        isPartOf: { '@id': ids.website },
      },
      ...(meta.image
        ? [{
            '@type': 'ImageObject',
            '@id': ids.image,
            url: absolute(meta.image),
            contentUrl: absolute(meta.image),
            ...(meta.imageAlt ? { caption: meta.imageAlt } : {}),
            inLanguage: language,
          }]
        : []),
      {
        '@type': 'WebPage',
        '@id': ids.page,
        url,
        name: meta.seoTitle,
        description: meta.description,
        inLanguage: language,
        isPartOf: { '@id': ids.website },
        breadcrumb: { '@id': ids.breadcrumb },
        mainEntity: { '@id': ids.article },
        ...(meta.image ? { primaryImageOfPage: { '@id': ids.image } } : {}),
        datePublished: meta.date,
        dateModified: meta.updated ?? meta.date,
      },
      {
        '@type': 'BlogPosting',
        '@id': ids.article,
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.updated ?? meta.date,
        inLanguage: language,
        url,
        mainEntityOfPage: { '@id': ids.page },
        isPartOf: { '@id': ids.blog },
        author: { '@id': ids.author },
        publisher: { '@id': ids.organization },
        ...(meta.image ? { image: { '@id': ids.image } } : {}),
        ...(meta.tags ? { keywords: meta.tags } : {}),
        ...(meta.category ? { articleSection: meta.category } : {}),
        wordCount,
        ...(meta.readingTime ? { timeRequired: `PT${meta.readingTime}M` } : {}),
        ...(citations.length
          ? { citation: citations.map((c) => ({ '@type': 'CreativeWork', name: c.name, url: c.url })) }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': ids.breadcrumb,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: b.home, item: homeUrl },
          { '@type': 'ListItem', position: 2, name: b.label, item: blogUrl },
          { '@type': 'ListItem', position: 3, name: meta.title, item: url },
        ],
      },
      ...(meta.faq?.length
        ? [{
            '@type': 'FAQPage',
            '@id': ids.faq,
            inLanguage: language,
            isPartOf: { '@id': ids.page },
            mainEntity: meta.faq.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }]
        : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <Nav localeHrefs={localeHrefs} />
      <main id="main-content" className="relative min-h-screen pt-28 pb-20 px-6"
        style={{ background: 'linear-gradient(135deg, #03020a 0%, #0d0822 45%, #04021a 100%)' }}>
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto">
          <nav aria-label={b.breadcrumb} className="mb-10">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/50">
              <li>
                <a href={localizedHref('/', locale)} className="hover:text-accent transition-colors">{b.home}</a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={localizedHref('/blog', locale)} className="hover:text-accent transition-colors">{b.label}</a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="text-white/70 line-clamp-1">{meta.title}</span>
              </li>
            </ol>
          </nav>

          <article lang={language}>
            <header className="mb-10 animate-fade-up-1">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <p className="glass-accent text-accent text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                  {meta.category ?? meta.tags?.[0] ?? b.label}
                </p>
                {meta.draft && (
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300/80">{b.draft}</p>
                )}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.15] mb-6">{meta.title}</h1>
              <p className="text-white/70 text-xl leading-relaxed mb-6">{meta.description}</p>
              <p className="text-white/40 text-sm">
                <time dateTime={meta.date}>{formatBlogDate(meta.date, locale)}</time>
                {meta.updated && meta.updated !== meta.date && (
                  <> {' · '}{b.updatedOn} <time dateTime={meta.updated}>{formatBlogDate(meta.updated, locale)}</time></>
                )}
                {' · '}
                {b.by}{' '}
                <a href="#author" rel="author" className="hover:text-accent transition-colors">{meta.author}</a>
                {meta.readingTime ? ` · ${meta.readingTime} ${b.minRead}` : ''}
              </p>
            </header>

            {meta.image && (
              <figure className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 animate-fade-up-2">
                <Image src={meta.image} alt={meta.imageAlt ?? ''} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
              </figure>
            )}

            {showToc && (
              <nav aria-labelledby="toc-title" className="glass rounded-2xl p-6 mb-12 animate-fade-up-2">
                <p id="toc-title" className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-4">{b.toc}</p>
                <ol className="list-decimal pl-5 space-y-2 text-white/70 marker:text-accent">
                  {headings.map((h) => (
                    <li key={h.id} className="pl-1">
                      <a href={`#${h.id}`} className="hover:text-accent transition-colors">{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="animate-fade-up-2">
              <Content />
            </div>

            <footer className="mt-16 pt-10 border-t border-white/10">
              <section id="author" aria-labelledby="author-title" className="flex flex-col sm:flex-row gap-5 scroll-mt-28">
                {meta.authorImage && (
                  <Image src={meta.authorImage} alt={meta.author} width={80} height={80} className="rounded-full object-cover w-20 h-20 shrink-0" />
                )}
                <div>
                  <h2 id="author-title" className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-2">{b.aboutAuthor}</h2>
                  <p className="font-serif text-2xl text-white">
                    {meta.authorUrl ? <a href={meta.authorUrl} rel="author" className="hover:text-accent transition-colors">{meta.author}</a> : meta.author}
                  </p>
                  {meta.authorRole && <p className="text-white/60 text-sm mb-3">{meta.authorRole}</p>}
                  {meta.authorBio && <p className="text-white/70 text-base leading-relaxed">{meta.authorBio}</p>}
                  {meta.authorSameAs?.length ? (
                    <ul className="flex flex-wrap gap-4 mt-3 text-sm">
                      {meta.authorSameAs.map((profile) => (
                        <li key={profile}>
                          <a href={profile} rel="me noopener noreferrer" target="_blank" className="text-accent hover:opacity-80 transition-opacity">
                            {new URL(profile).hostname.replace(/^www\./, '')}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            </footer>
          </article>

          <aside aria-labelledby="cta-title" className="glass rounded-2xl p-8 text-center mt-16">
            <h2 id="cta-title" className="font-serif text-2xl md:text-3xl text-white mb-3">{b.ctaTitle}</h2>
            <p className="text-white/70 text-base mb-6">{b.ctaSub}</p>
            <a
              href={localizedHref('/contact', locale)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, rgba(123,232,159,0.15) 0%, rgba(14,156,176,0.15) 100%)', border: '1px solid rgba(123,232,159,0.2)', color: '#7be89f' }}
            >
              {b.contactCta} &rarr;
            </a>
          </aside>
        </div>
      </main>
      <Footer localeHrefs={localeHrefs} />
    </>
  )
}
