import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/datenschutz', destination: '/privacy', permanent: true },
      { source: '/impressum', destination: '/imprint', permanent: true },
      { source: '/kontakt', destination: '/contact', permanent: true },
      { source: '/agentic-commerce', destination: '/plattform/product-asset-studio', permanent: true },
      { source: '/en/agentic-commerce', destination: '/en/plattform/product-asset-studio', permanent: true },
    ]
  },
}

export default nextConfig
