# Publishing content

Every piece of writing is a Markdown file. Put files in:

- `blog/` for blog posts
- `literary/` for poetry, fiction, and other literary work
- `musings/philosophy/`, `musings/politics/`, or `musings/mathematics/` for musings

A folder of Markdown files is published as one piece. This includes folder
names with spaces. The folder name is the title, and spaces become hyphens
in the URL, so `literary/A Child and Her Son/Chapter 1.md` is published at
`/literary-works/a-child-and-her-son/chapter-1`. The same applies under
`musings/`: `mathematics/self-made IBL on Abstract Algebra/Script1.md` is
published at `/musings/mathematics/self-made-ibl-on-abstract-algebra/Script1`.

To give that piece an introduction, add a Markdown file beside the folder
with the same name. `mathematics/calculus.md` is the parent of
`mathematics/calculus/limits.md`, published at
`/musings/mathematics/calculus/limits`. Deeper folders work the same way.

The filename is the URL slug. Use lowercase words separated by hyphens.
A filename with spaces or other punctuation is still published: those
characters become hyphens, so `Is Blue Cold.md` is available at
`/blog/is-blue-cold`. The visible title stays the filename, unless the file
has a title or an H1.
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

## Supported Markdown

The renderer supports GitHub-flavored Markdown, footnotes, inline and display
LaTeX (`$...$` and `$$...$$`), syntax-highlighted fenced code, raw HTML, and
common Obsidian syntax: `==highlights==`, `~={pink}colored highlights=~`,
`[[wiki links]]`, `![[image.png]]`, `%%comments%%`, and `> [!note]` callouts.
Heading links such as `[[Another note#A section]]` are supported. Put files used
by Obsidian image embeds in `public/media/`.
