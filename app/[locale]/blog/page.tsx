import type { Metadata } from 'next'
import { getHreflangUrls, type SiteLocale, hreflangOf } from '@/lib/i18n'
import { translations } from '@/lib/translations'
import { getAllPosts } from '@/lib/blog'
import BlogContent from './BlogContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale as SiteLocale] ?? translations['de-ch']
  const hreflang = getHreflangUrls('/blog')

  return {
    title: t.blogPage.meta_title,
    description: t.blogPage.meta_desc,
    alternates: {
      canonical: hreflang[hreflangOf(locale as SiteLocale)],
      languages: hreflang,
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const posts = await getAllPosts(locale as SiteLocale)
  return <BlogContent posts={posts} />
}
