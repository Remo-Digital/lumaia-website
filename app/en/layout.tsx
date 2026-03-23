import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/',
    languages: {
      'de': 'https://lumaia.studio/',
      'en': 'https://lumaia.studio/en/',
      'x-default': 'https://lumaia.studio/',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
