import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/',
    languages: {
      'de-CH': 'https://lumaia.studio/',
      'de-DE': 'https://lumaia.studio/',
      'de-AT': 'https://lumaia.studio/',
      'en-US': 'https://lumaia.studio/en/',
      'en-CH': 'https://lumaia.studio/en/',
      'x-default': 'https://lumaia.studio/',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
