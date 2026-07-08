import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/agentic-commerce',
    languages: {
      'de': 'https://lumaia.studio/agentic-commerce',
      'en': 'https://lumaia.studio/en/agentic-commerce',
      'x-default': 'https://lumaia.studio/agentic-commerce',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
