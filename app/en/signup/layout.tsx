import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/signup',
    languages: {
      'de-CH': 'https://lumaia.studio/signup',
      'en-US': 'https://lumaia.studio/en/signup',
      'x-default': 'https://lumaia.studio/signup',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
