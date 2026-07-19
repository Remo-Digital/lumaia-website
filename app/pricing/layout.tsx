import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/pricing',
    languages: {
      'de-CH': 'https://lumaia.studio/pricing',
      'en-US': 'https://lumaia.studio/en/pricing',
      'x-default': 'https://lumaia.studio/pricing',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
