/// <reference types="mdast" />
import { h } from 'hastscript'

/**
 * Creates a Timeline component.
 *
 * Usage:
 *   ::timeline{period="2024/08 -" org="株式会社ROUTE06" role="Lead Engineer / Software Engineer"}
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.period - The period, e.g. "2024/08 -".
 * @param {string} properties.org - The organization name.
 * @param {string} properties.role - The role held at the organization.
 * @returns {import('mdast').Parent} The created Timeline item.
 */
export function TimelineComponent(properties) {
  if (!properties.period || !properties.org)
    return h(
      'div',
      { class: 'hidden' },
      'Invalid directive. ("timeline" directive must have "period" and "org" attributes)',
    )

  return h('div', { class: 'tl-item' }, [
    h('div', { class: 'tl-marker' }),
    h('div', { class: 'tl-body' }, [
      h('div', { class: 'tl-period' }, properties.period),
      h('div', { class: 'tl-org' }, properties.org),
      properties.role ? h('div', { class: 'tl-role' }, properties.role) : null,
    ]),
  ])
}
