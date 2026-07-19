import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/contact',
    languages: {
      'de-CH': 'https://lumaia.studio/contact',
      'en-US': 'https://lumaia.studio/en/contact',
      'x-default': 'https://lumaia.studio/contact',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
