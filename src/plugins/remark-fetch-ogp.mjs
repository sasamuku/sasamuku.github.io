import { visit } from 'unist-util-visit'
import { fetchAppMeta, fetchOgp } from './ogp-cache.mjs'

/**
 * Warms the build-time caches for `::article` and `::product` directives.
 *
 * Remark plugins may return a Promise, but the rehype components that render
 * the cards cannot — rehype-components calls handlers synchronously. Fetching
 * here means the metadata is already cached by the time a card is built.
 */
export function remarkFetchOgp() {
  return async tree => {
    const articleUrls = new Set()
    const productUrls = new Set()

    visit(tree, node => {
      if (node.type !== 'leafDirective' && node.type !== 'containerDirective')
        return
      const url = node.attributes?.url
      if (!url) return
      if (node.name === 'article') articleUrls.add(url)
      if (node.name === 'product') productUrls.add(url)
    })

    await Promise.all([
      ...[...articleUrls].map(url => fetchOgp(url)),
      ...[...productUrls].map(url => fetchAppMeta(url)),
    ])
  }
}
