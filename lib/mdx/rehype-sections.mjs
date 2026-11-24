// Rehype plugin for blog MDX: gives every top-level <h2> an id and wraps it, together with
// the content up to the next <h2>, in <section aria-labelledby="…">.
import { headingIds } from './heading-ids.mjs'

/** @param {any} node */
const textOf = (node) =>
  node.type === 'text' ? node.value : Array.isArray(node.children) ? node.children.map(textOf).join('') : ''

/** @param {any} node */
const isH2 = (node) => node.type === 'element' && node.tagName === 'h2'

export default function rehypeSections() {
  /** @param {any} tree */
  return (tree) => {
    const ids = headingIds(tree.children.filter(isH2).map(textOf))
    const children = []
    let section = null
    let index = 0

    for (const node of tree.children) {
      if (isH2(node)) {
        const id = ids[index++]
        node.properties = { ...node.properties, id }
        section = {
          type: 'element',
          tagName: 'section',
          properties: { ariaLabelledBy: id },
          children: [node],
        }
        children.push(section)
      } else if (section && node.type !== 'mdxjsEsm') {
        section.children.push(node)
      } else {
        children.push(node)
      }
    }
    tree.children = children
  }
}
