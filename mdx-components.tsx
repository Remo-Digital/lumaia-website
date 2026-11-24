import { Children, isValidElement, type ComponentProps, type ReactNode } from 'react'
import type { MDXComponents } from 'mdx/types'

function H2(props: ComponentProps<'h2'>) {
  return <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mt-14 mb-5 scroll-mt-28" {...props} />
}

function Img({ alt = '', ...props }: ComponentProps<'img'>) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="rounded-2xl w-full h-auto" loading="lazy" alt={alt} {...props} />
}

/**
 * A paragraph that only holds an image becomes a <figure>. The markdown image title
 * (`![alt](src "Caption")`) becomes the <figcaption>.
 */
function P({ children, ...props }: ComponentProps<'p'>) {
  const only = Children.toArray(children).filter((child) => !(typeof child === 'string' && !child.trim()))
  if (only.length === 1 && isValidElement<ComponentProps<'img'>>(only[0]) && only[0].type === Img) {
    const { title, ...imgProps } = only[0].props
    return (
      <figure className="my-10">
        <Img {...imgProps} />
        {title && <figcaption className="mt-3 text-sm text-white/50 text-center">{title}</figcaption>}
      </figure>
    )
  }
  return <p className="text-white/70 text-lg leading-relaxed mb-6" {...props}>{children}</p>
}

/**
 * Quote or testimonial with attribution, for use in MDX:
 * <Quote author="Name" role="Rolle, Firma" cite="https://quelle">Zitat …</Quote>
 */
export function Quote({ children, author, role, cite }: { children: ReactNode; author?: string; role?: string; cite?: string }) {
  return (
    <figure className="glass-accent rounded-xl px-6 py-5 my-8">
      <blockquote cite={cite} className="text-white/80 text-lg italic leading-relaxed [&>p]:mb-0 [&>p]:text-inherit">
        {children}
      </blockquote>
      {author && (
        <figcaption className="mt-4 text-sm text-white/60 not-italic">
          &mdash; <cite className="not-italic font-semibold text-white/80">{author}</cite>
          {role && <>, {role}</>}
        </figcaption>
      )}
    </figure>
  )
}

// Global styles for blog MDX content, matching the site's dark glass design.
const components: MDXComponents = {
  Quote,
  // The post page renders the title as the page <h1>; a leading `# Title` in the MDX body is dropped
  h1: () => null,
  h2: H2,
  h3: (props) => <h3 className="font-serif text-2xl text-white/90 leading-snug mt-10 mb-4" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold text-white/90 mt-8 mb-3" {...props} />,
  p: P,
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
  img: Img,
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
