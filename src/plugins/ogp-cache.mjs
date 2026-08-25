/**
 * Build-time OGP cache.
 *
 * Browsers cannot fetch OGP from other origins (CORS), so metadata is
 * collected while the site is being built and embedded into the static HTML.
 * `remark-fetch-ogp` fills this cache; `rehype-component-article-card` reads it.
 */

/** @type {Map<string, {title: string, description: string, image: string, siteName: string}>} */
const cache = new Map()

const TIMEOUT_MS = 8000

/** Reads a meta tag's content, tolerating attribute order and quote style. */
function readMeta(html, property) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]*content=["']([^"']*)["']`,
      'i',
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${escaped}["']`,
      'i',
    ),
  ]
  for (const re of patterns) {
    const m = html.match(re)
    if (m) return decodeEntities(m[1])
  }
  return ''
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
}

/**
 * Fetches OGP metadata for a URL, caching both successes and failures so each
 * URL is only requested once per build.
 *
 * @param {string} url
 * @returns {Promise<{title: string, description: string, image: string, siteName: string}>}
 */
export async function fetchOgp(url) {
  const hit = cache.get(url)
  if (hit) return hit

  /** @type {{title: string, description: string, image: string, siteName: string}} */
  let result = { title: '', description: '', image: '', siteName: '' }

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'user-agent': 'sasamuku.github.io build/ogp-fetcher' },
    })
    clearTimeout(timer)

    if (res.ok) {
      const html = await res.text()
      const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
      result = {
        title:
          readMeta(html, 'og:title') ||
          (titleTag ? decodeEntities(titleTag[1].trim()) : ''),
        description:
          readMeta(html, 'og:description') || readMeta(html, 'description'),
        image: readMeta(html, 'og:image'),
        siteName: readMeta(html, 'og:site_name') || new URL(url).hostname,
      }
    } else {
      console.warn(`[OGP] ${res.status} for ${url}`)
    }
  } catch (err) {
    console.warn(`[OGP] failed for ${url}: ${err.message}`)
  }

  if (result.image) {
    // Resolve protocol-relative and root-relative image URLs against the page.
    try {
      result.image = new URL(result.image, url).href
    } catch {
      result.image = ''
    }
  }
  if (!result.siteName) {
    try {
      result.siteName = new URL(url).hostname
    } catch {
      /* leave empty */
    }
  }

  cache.set(url, result)
  return result
}

/** Returns cached OGP for a URL, or null when it was never fetched. */
export function getOgp(url) {
  return cache.get(url) || null
}

/** @type {Map<string, {name: string, icon: string}>} */
const appCache = new Map()

/** Extracts the numeric track id from an App Store URL. */
function appIdFrom(url) {
  const m = url.match(/\/id(\d+)/)
  return m ? m[1] : ''
}

/**
 * Fetches an app's real icon from the iTunes lookup API.
 *
 * App Store pages expose an og:image, but for apps without screenshots it is a
 * generic placeholder, so the icon is fetched from the API instead.
 *
 * @param {string} url - An App Store URL containing `/id<number>`.
 * @returns {Promise<{name: string, icon: string}>}
 */
export async function fetchAppMeta(url) {
  const hit = appCache.get(url)
  if (hit) return hit

  let result = { name: '', icon: '' }
  const id = appIdFrom(url)

  if (!id) {
    console.warn(`[APP] no app id in ${url}`)
    appCache.set(url, result)
    return result
  }

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&country=jp`,
      { signal: controller.signal },
    )
    clearTimeout(timer)

    if (res.ok) {
      const data = await res.json()
      const app = data.results?.[0]
      if (app) {
        result = {
          name: app.trackName || '',
          icon: app.artworkUrl512 || app.artworkUrl100 || '',
        }
      } else {
        console.warn(`[APP] no result for id ${id}`)
      }
    } else {
      console.warn(`[APP] ${res.status} for id ${id}`)
    }
  } catch (err) {
    console.warn(`[APP] failed for id ${id}: ${err.message}`)
  }

  appCache.set(url, result)
  return result
}

/** Returns cached app metadata for a URL, or null when it was never fetched. */
export function getAppMeta(url) {
  return appCache.get(url) || null
}
