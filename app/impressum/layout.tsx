import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/impressum',
    languages: {
      'de': 'https://lumaia.studio/impressum',
      'en': 'https://lumaia.studio/en/imprint',
      'x-default': 'https://lumaia.studio/impressum',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
