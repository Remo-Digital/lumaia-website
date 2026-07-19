import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/datenschutz', destination: '/privacy', permanent: true },
      { source: '/impressum', destination: '/imprint', permanent: true },
      { source: '/kontakt', destination: '/contact', permanent: true },
      { source: '/en/agentic-commerce', destination: '/agentic-commerce', permanent: false },
    ]
  },
}

export default nextConfig
