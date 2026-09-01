import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      // Legacy German slugs → new /de/ prefixed paths
      { source: '/datenschutz', destination: '/de/privacy', permanent: true },
      { source: '/impressum', destination: '/de/imprint', permanent: true },
      { source: '/kontakt', destination: '/de/contact', permanent: true },
      { source: '/agentic-commerce', destination: '/de/plattform/product-asset-studio', permanent: true },
      { source: '/en/agentic-commerce', destination: '/en/plattform/product-asset-studio', permanent: true },
    ]
  },
}

export default nextConfig
