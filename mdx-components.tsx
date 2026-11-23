import type { MDXComponents } from 'mdx/types'

// Global styles for blog MDX content, matching the site's dark glass design.
const components: MDXComponents = {
  h2: (props) => <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mt-14 mb-5" {...props} />,
  h3: (props) => <h3 className="font-serif text-2xl text-white/90 leading-snug mt-10 mb-4" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold text-white/90 mt-8 mb-3" {...props} />,
  p: (props) => <p className="text-white/70 text-lg leading-relaxed mb-6" {...props} />,
  a: ({ href = '', ...props }) => {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      />
    )
  },
  ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-2 text-white/70 text-lg leading-relaxed marker:text-accent" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-white/70 text-lg leading-relaxed marker:text-accent" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  blockquote: (props) => <blockquote className="glass-accent rounded-xl px-6 py-4 my-8 [&>p]:mb-0 [&>p]:text-white/80 [&>p]:italic" {...props} />,
  hr: () => <hr className="my-12 border-white/10" />,
  code: (props) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-white/90" {...props} />,
  pre: (props) => <pre className="glass rounded-xl p-5 my-8 overflow-x-auto text-sm [&>code]:bg-transparent [&>code]:p-0" {...props} />,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  img: (props) => <img className="rounded-2xl my-8 w-full h-auto" loading="lazy" {...props} />,
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-left text-white/70 text-base border-collapse" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-white/15 px-4 py-3 text-white font-semibold" {...props} />,
  td: (props) => <td className="border-b border-white/5 px-4 py-3" {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
