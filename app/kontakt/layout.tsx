import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/kontakt',
    languages: {
      'de': 'https://lumaia.studio/kontakt',
      'en': 'https://lumaia.studio/en/contact',
      'x-default': 'https://lumaia.studio/kontakt',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
