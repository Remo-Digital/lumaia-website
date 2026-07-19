import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/plattform',
    languages: {
      'de-CH': 'https://lumaia.studio/plattform',
      'en-US': 'https://lumaia.studio/en/plattform',
      'x-default': 'https://lumaia.studio/plattform',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
