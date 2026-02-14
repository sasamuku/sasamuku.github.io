import { siteConfig } from '@/config'
import { getSortedPosts } from '@utils/content-utils'
import type { APIRoute } from 'astro'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const specDir = fileURLToPath(new URL('../../content/spec', import.meta.url))

function readSpecFile(filename: string): string | null {
  const filePath = path.join(specDir, filename)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf-8')
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL('https://sasamuku.github.io')
  const posts = await getSortedPosts()

  const sections: string[] = [
    `# ${siteConfig.title}`,
    '',
    `> ${siteConfig.subtitle}`,
    '',
    `Site: ${siteUrl.href}`,
  ]

  const specPages = [
    { file: 'resume.md', title: 'Resume' },
    { file: 'instructions.md', title: 'Instructions' },
    { file: 'behavior.md', title: 'Behavior' },
  ]

  for (const page of specPages) {
    const content = readSpecFile(page.file)
    if (content) {
      sections.push('', '---', '', `## ${page.title}`, '', content)
    }
  }

  if (posts.length > 0) {
    sections.push('', '---', '', '## Blog Posts')
    for (const post of posts) {
      sections.push('', '---', '', `### ${post.data.title}`, '', post.body ?? '')
    }
  }

  return new Response(sections.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
