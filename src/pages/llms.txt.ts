import { siteConfig } from '@/config'
import { getSortedPosts } from '@utils/content-utils'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL('https://sasamuku.github.io')
  const posts = await getSortedPosts()

  const lines = [
    `# ${siteConfig.title}`,
    '',
    `> ${siteConfig.subtitle}`,
    '',
    `Site: ${siteUrl.href}`,
    '',
    '## Pages',
    '',
    `- [Home](${new URL('/', siteUrl).href})`,
    `- [Resume](${new URL('/resume/', siteUrl).href})`,
    `- [Instructions](${new URL('/instructions/', siteUrl).href})`,
    `- [Behavior](${new URL('/behavior/', siteUrl).href})`,
  ]

  if (posts.length > 0) {
    lines.push('', '## Blog Posts', '')
    for (const post of posts) {
      lines.push(
        `- [${post.data.title}](${new URL(`/posts/${post.slug}/`, siteUrl).href})`,
      )
    }
  }

  lines.push(
    '',
    '## Optional',
    '',
    `- [llms-full.txt](${new URL('/llms-full.txt', siteUrl).href}): Full content version`,
  )

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
