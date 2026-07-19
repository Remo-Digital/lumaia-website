import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/blog',
    languages: {
      'de-CH': 'https://lumaia.studio/blog',
      'en-US': 'https://lumaia.studio/en/blog',
      'x-default': 'https://lumaia.studio/blog',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
