import type { NextConfig } from 'next'
import path from 'node:path'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      // Legacy German slugs → new /de-ch/ prefixed paths (with localized slugs)
      { source: '/datenschutz', destination: '/de-ch/datenschutz', permanent: true },
      { source: '/impressum', destination: '/de-ch/impressum', permanent: true },
      { source: '/kontakt', destination: '/de-ch/kontakt', permanent: true },
      { source: '/agentic-commerce', destination: '/de-ch/plattform/product-asset-studio', permanent: true },
      { source: '/en/agentic-commerce', destination: '/en-ch/platform/product-asset-studio', permanent: true },
      // Old /de/ and /en/ prefix redirects → new /de-ch/ and /en-ch/
      { source: '/de/:path*', destination: '/de-ch/:path*', permanent: true },
      { source: '/en/:path*', destination: '/en-ch/:path*', permanent: true },
      // ISO code for the UK is GB; the URL uses /en-uk
      { source: '/en-gb', destination: '/en-uk', permanent: true },
      { source: '/en-gb/:path*', destination: '/en-uk/:path*', permanent: true },
    ]
  },
}

// Plugins are passed as strings so they work with Turbopack
const withMDX = createMDX({
  options: {
    // YAML frontmatter is exported from each MDX file as `frontmatter`
    remarkPlugins: ['remark-gfm', 'remark-frontmatter', 'remark-mdx-frontmatter'],
    // Local plugin: <section> per `##` heading. Absolute path, because Turbopack does not
    // resolve relative plugin paths from the project root.
    rehypePlugins: [path.join(import.meta.dirname, 'lib/mdx/rehype-sections.mjs')],
  },
})

export default withMDX(nextConfig)
