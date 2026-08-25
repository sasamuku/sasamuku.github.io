/// <reference types="mdast" />
import { h } from 'hastscript'
import { getAppMeta } from './ogp-cache.mjs'

/**
 * Creates a Product Card component for personal projects.
 *
 * Usage:
 *   ::product{name="キレイイネ" desc="掃除管理アプリ" url="https://apps.apple.com/..." emoji="🧹" hue="150"}
 *
 * The real app icon is fetched from the App Store at build time. `emoji` and
 * `hue` render a coloured tile instead when no icon is available.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.name - The product name.
 * @param {string} properties.desc - A short description.
 * @param {string} properties.url - The link target.
 * @param {string} [properties.emoji] - Fallback glyph when no icon is fetched.
 * @param {string} [properties.hue] - Fallback tile hue (0-360).
 * @returns {import('mdast').Parent} The created Product Card.
 */
export function ProductCardComponent(properties) {
  if (!properties.name || !properties.url)
    return h(
      'div',
      { class: 'hidden' },
      'Invalid directive. ("product" directive must have "name" and "url" attributes)',
    )

  const meta = getAppMeta(properties.url)
  const icon = properties.icon || meta?.icon

  const nIcon = icon
    ? h('div', { class: 'pc-icon' }, [
        h('img', {
          src: icon,
          alt: '',
          loading: 'lazy',
          decoding: 'async',
        }),
      ])
    : h(
        'div',
        {
          class: 'pc-icon pc-icon-fallback',
          style: `background: oklch(0.92 0.06 ${properties.hue || '250'});`,
        },
        properties.emoji || '📱',
      )

  return h(
    'a',
    {
      class: 'card-product no-styling',
      href: properties.url,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    [
      nIcon,
      h('div', { class: 'pc-body' }, [
        h('div', { class: 'pc-name' }, properties.name),
        properties.desc
          ? h('div', { class: 'pc-desc' }, properties.desc)
          : null,
      ]),
    ],
  )
}
