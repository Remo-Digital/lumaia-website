import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/privacy',
    languages: {
      'de-CH': 'https://lumaia.studio/privacy',
      'en-US': 'https://lumaia.studio/en/privacy',
      'x-default': 'https://lumaia.studio/privacy',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
