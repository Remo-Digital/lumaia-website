import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/imprint',
    languages: {
      'de-CH': 'https://lumaia.studio/imprint',
      'en-US': 'https://lumaia.studio/en/imprint',
      'x-default': 'https://lumaia.studio/imprint',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
