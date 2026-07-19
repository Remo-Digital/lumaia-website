import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://lumaia.studio/en/use-cases/agentic-commerce',
    languages: {
      'de-CH': 'https://lumaia.studio/use-cases/agentic-commerce',
      'en-US': 'https://lumaia.studio/en/use-cases/agentic-commerce',
      'x-default': 'https://lumaia.studio/use-cases/agentic-commerce',
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
