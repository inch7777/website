# Publishing content

Every piece of writing is a Markdown file with frontmatter. Put files in:

- `blog/` for blog posts
- `literary/` for poetry, fiction, and other literary work
- `musings/philosophy/`, `musings/politics/`, or `musings/mathematics/` for musings

The filename is the URL slug. Use lowercase words separated by hyphens.

```md
---
title: A Clear Title
description: A short summary for lists and search results.
publishedAt: 2026-10-01
# updatedAt: 2026-10-02
# draft: true
# topics: [philosophy, mathematics] # Blog posts only
---

Write with **Markdown** here. Tables, lists, links, quotes, and fenced code
blocks are supported.
```

Set `draft: true` while a piece is unfinished. Remove it—or change it to
`false`—to publish on the next build.
