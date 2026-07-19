import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/legal/terms',
    languages: {
      'de-CH': 'https://lumaia.studio/legal/terms',
      'en-US': 'https://lumaia.studio/en/legal/terms',
      'x-default': 'https://lumaia.studio/legal/terms',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
