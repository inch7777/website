# Publishing content

Every piece of writing is a Markdown file. Put files in:

- `blog/` for blog posts
- `literary/` for poetry, fiction, and other literary work
- `musings/philosophy/`, `musings/politics/`, or `musings/mathematics/` for musings

The filename is the URL slug. Use lowercase words separated by hyphens.
Frontmatter is optional: without it, the first H1 becomes the title and the
date the file was added to Git becomes the publication date. A filename-based
title and the file creation date are used for new files that are not yet in Git.

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
