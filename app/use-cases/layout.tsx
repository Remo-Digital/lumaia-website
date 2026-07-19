import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/use-cases',
    languages: {
      'de-CH': 'https://lumaia.studio/use-cases',
      'en-US': 'https://lumaia.studio/en/use-cases',
      'x-default': 'https://lumaia.studio/use-cases',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
