import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      // Legacy German slugs → new /de-ch/ prefixed paths
      { source: '/datenschutz', destination: '/de-ch/privacy', permanent: true },
      { source: '/impressum', destination: '/de-ch/imprint', permanent: true },
      { source: '/kontakt', destination: '/de-ch/contact', permanent: true },
      { source: '/agentic-commerce', destination: '/de-ch/plattform/product-asset-studio', permanent: true },
      { source: '/en/agentic-commerce', destination: '/en-ch/plattform/product-asset-studio', permanent: true },
      // Old /de/ and /en/ prefix redirects → new /de-ch/ and /en-ch/
      { source: '/de/:path*', destination: '/de-ch/:path*', permanent: true },
      { source: '/en/:path*', destination: '/en-ch/:path*', permanent: true },
    ]
  },
}

export default nextConfig
