# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/blog built with Astro 4, featuring:
- Static site generation with Astro
- Svelte components for interactive elements
- Tailwind CSS for styling
- TypeScript for type safety
- Multi-language support (Japanese/English)
- Full-text search with Pagefind
- Markdown content management with custom plugins

## Essential Commands

```bash
# Development
pnpm dev           # Start development server at localhost:4321
pnpm preview       # Preview production build

# Build & Deploy
pnpm build         # Build for production (includes Pagefind indexing)

# Content Management
pnpm new-post -- <filename>  # Create new blog post with frontmatter

# Code Quality
pnpm fmt           # Format code with Biome
pnpm lint          # Lint and auto-fix with Biome
pnpm type-check    # TypeScript type checking
```

## Architecture & Structure

### Content System
- Blog posts live in `src/content/posts/` as Markdown files
- Static pages (resume, behavior, instructions) in `src/content/spec/`
- Content schema defined in `src/content/config.ts` using Astro's content collections
- Frontmatter configuration in `frontmatter.json` for content editing tools

### Component Architecture
- **Astro Components** (`*.astro`): Static components for layout and structure
- **Svelte Components** (`*.svelte`): Interactive features (theme switcher, search, display settings)
- Layout hierarchy: `Layout.astro` → `MainGridLayout.astro` → Page components

### Routing
- Dynamic blog post routing via `src/pages/posts/[...slug].astro`
- Archive pages with category/tag filtering in `src/pages/archive/`
- Special pages (resume, behavior) have dedicated routes

### Styling System
- Tailwind CSS with custom configuration
- PostCSS with nesting support
- Stylus for extended markdown styles (`src/styles/markdown-extend.styl`)
- Custom CSS modules for specific features (photoswipe, scrollbar, transitions)

### Markdown Processing Pipeline
Custom remark/rehype plugins in `src/plugins/`:
- `remark-excerpt.js`: Generate post excerpts
- `remark-reading-time.mjs`: Calculate reading time
- `rehype-component-admonition.mjs`: GitHub-style admonitions
- `rehype-component-github-card.mjs`: GitHub repository cards
- Supports KaTeX math rendering and code syntax highlighting

### Configuration
- Site config in `src/config.ts` (title, profile, navigation, theme)
- Build config in `astro.config.mjs`
- TypeScript paths configured for clean imports (@components, @utils, etc.)
- Biome for formatting/linting (replaces ESLint + Prettier)

### Key Features Implementation
- **Search**: Pagefind integration built during production build
- **Theme Switching**: Svelte component with localStorage persistence
- **i18n**: Translation system in `src/i18n/` with language files
- **Page Transitions**: Swup.js for smooth navigation
- **TOC**: Auto-generated table of contents for posts

## Development Guidelines

When modifying this codebase:
1. Follow existing component patterns - check similar components first
2. Use TypeScript path aliases (@components, @utils, etc.) for imports
3. Maintain the existing Biome formatting rules (2 spaces, single quotes)
4. Add new blog posts via `pnpm new-post` command for proper frontmatter
5. Test builds with `pnpm build` to ensure Pagefind indexing works
6. Verify type safety with `pnpm type-check` before committing