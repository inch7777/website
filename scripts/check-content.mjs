// Renders every published Markdown file the way the site does and reports
// problems a reader would see: formulas KaTeX cannot render, stray `$` from
// unbalanced math, links to pages that do not exist, and missing images.
//
//   npm run check
//
// Exits with status 1 when anything is found.
import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import {
  preprocessObsidianMarkdown,
  rehypePlugins,
  remarkPlugins,
} from "../lib/markdown-pipeline.js";
import { getBlogPosts, getLiteraryWorks, getMusings, topics } from "../lib/posts.js";

const posts = [...getBlogPosts(), ...getMusings(), ...getLiteraryWorks()];
const pages = new Set([
  "/", "/blog", "/musings", "/literary-works", "/media", "/feed.xml",
  ...topics.map((topic) => `/musings/${topic.slug}`),
  ...posts.map((post) => post.href),
]);
const mediaDirectory = path.join(process.cwd(), "public");

const processor = unified()
  .use(remarkParse)
  .use(remarkPlugins)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypePlugins);

let problemCount = 0;

for (const post of posts) {
  if (!post.content?.trim()) continue;
  const tree = processor.runSync(processor.parse(preprocessObsidianMarkdown(post.content, post.href)));
  const problems = [];
  visit(tree, (node, insideMath) => {
    if (node.type === "element") {
      const className = node.properties?.className || [];
      if (className.includes("katex-error")) {
        problems.push(`formula does not render: ${shorten(textOf(node))}\n      ${node.properties.title || ""}`);
        return "skip";
      }
      if (className.includes("katex") || node.tagName === "code" || node.tagName === "pre") return "math";

      if (node.tagName === "a" && typeof node.properties?.href === "string") {
        const href = decodeURI(node.properties.href.split("#")[0]);
        if (href.startsWith("/") && !pages.has(href) && !fs.existsSync(path.join(mediaDirectory, href))) {
          problems.push(`link to a page that does not exist: ${href} ("${shorten(textOf(node))}")`);
        }
      }
      if (node.tagName === "img" && typeof node.properties?.src === "string") {
        const src = decodeURI(node.properties.src);
        if (src.startsWith("/") && !fs.existsSync(path.join(mediaDirectory, src))) {
          problems.push(`missing image: public${src}`);
        }
      }
    }
    if (node.type === "text" && !insideMath && /(?<!\\)\$/.test(node.value)) {
      problems.push(`stray $ (unbalanced math?): ${shorten(node.value)}`);
    }
    return null;
  });

  if (problems.length) {
    problemCount += problems.length;
    console.log(`\n${post.href}`);
    for (const problem of problems) console.log(`  - ${problem}`);
  }
}

if (problemCount) {
  console.log(`\n${problemCount} problem${problemCount === 1 ? "" : "s"} found.`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${posts.length} pages. No problems found.`);
}

function visit(node, visitor, insideMath = false) {
  const result = visitor(node, insideMath);
  if (result === "skip") return;
  for (const child of node.children || []) visit(child, visitor, insideMath || result === "math");
}

function textOf(node) {
  if (node.type === "text") return node.value;
  return (node.children || []).map(textOf).join("");
}

function shorten(value) {
  const text = String(value).replace(/\s+/g, " ").trim();
  return text.length > 90 ? `${text.slice(0, 87)}…` : text;
}
