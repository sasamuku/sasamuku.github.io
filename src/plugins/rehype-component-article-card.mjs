/// <reference types="mdast" />
import { h } from 'hastscript'
import { getOgp } from './ogp-cache.mjs'

/**
 * Creates an Article Card backed by OGP metadata collected at build time.
 *
 * Usage:
 *   ::article{url="https://example.com/post"}
 *
 * `title` and `image` attributes override the fetched values, which keeps the
 * card usable when a site blocks the build-time request.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.url - The article URL.
 * @param {string} [properties.title] - Overrides the OGP title.
 * @param {string} [properties.image] - Overrides the OGP image.
 * @returns {import('mdast').Parent} The created Article Card.
 */
export function ArticleCardComponent(properties) {
  if (!properties.url)
    return h(
      'div',
      { class: 'hidden' },
      'Invalid directive. ("article" directive must have a "url" attribute)',
    )

  const ogp = getOgp(properties.url) || {
    title: '',
    description: '',
    image: '',
    siteName: '',
  }

  const title = properties.title || ogp.title || properties.url
  const image = properties.image || ogp.image
  const siteName = ogp.siteName || hostnameOf(properties.url)

  const nThumb = image
    ? h('div', { class: 'ac-thumb' }, [
        h('img', {
          src: image,
          alt: '',
          loading: 'lazy',
          decoding: 'async',
        }),
      ])
    : h('div', { class: 'ac-thumb ac-thumb-empty' })

  return h(
    'a',
    {
      class: 'card-article no-styling',
      href: properties.url,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    [
      nThumb,
      h('div', { class: 'ac-body' }, [
        h('div', { class: 'ac-title' }, title),
        h('div', { class: 'ac-site' }, siteName),
      ]),
    ],
  )
}

function hostnameOf(url) {
  try {
    return new URL(url).hostname
  } catch {
    return ''
  }
}
