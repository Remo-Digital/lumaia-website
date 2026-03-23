import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/datenschutz',
    languages: {
      'de': 'https://lumaia.studio/datenschutz',
      'en': 'https://lumaia.studio/en/privacy',
      'x-default': 'https://lumaia.studio/datenschutz',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
