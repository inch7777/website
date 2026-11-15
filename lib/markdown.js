import { defaultSchema } from "rehype-sanitize";
import { toSlug } from "./slug.js";

const imageExtensions = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i;

export const markdownSanitizeSchema = {
  ...defaultSchema,
  tagNames: [...defaultSchema.tagNames, "aside", "mark"],
  attributes: {
    ...defaultSchema.attributes,
    aside: [
      ...(defaultSchema.attributes.aside || []),
      ["className", "callout"],
      ["dataCallout", /^[a-z][a-z0-9-]*$/],
    ],
    code: [["className", /^language-./, "math-inline", "math-display"]],
    input: [...(defaultSchema.attributes.input || []), ["checked", true]],
    mark: [
      ...(defaultSchema.attributes.mark || []),
      ["dataHighlight", /^[a-z][a-z0-9-]*$/],
    ],
    p: [
      ...(defaultSchema.attributes.p || []),
      ["className", "callout-title"],
    ],
  },
};

export function preprocessObsidianMarkdown(markdown, currentHref = "/") {
  return mapOutsideCode(markdown, (content) => normalizeMath(content)
    .replace(/%%[\s\S]*?%%/g, "")
    // A highlight wrapped around a heading, `~={orange}## Title=~ note`, is
    // turned inside out (`## ~={orange}Title=~ note`) so it stays a heading.
    .replace(
      /^([ \t]*)(~=\{[a-z][a-z0-9-]*\}|==)[ \t]*(#{1,6})[ \t]+([^\n]*?)(=~|==)([^\n]*)$/gim,
      (match, indent, open, hashes, text, close, rest) => (
        (open === "==") === (close === "==") ? `${indent}${hashes} ${open}${text}${close}${rest}` : match
      ),
    )
    .replace(/!\[\[([^\]]+)\]\]/g, (_, value) => renderEmbed(value, currentHref))
    .replace(/\[\[([^\]]+)\]\]/g, (_, value) => renderWikiLink(value, currentHref))
    .replace(/~=\{([a-z][a-z0-9-]*)\}([\s\S]*?)=~/gi, (_, color, value) => (
      `<mark data-highlight="${color.toLowerCase()}">${value}</mark>`
    ))
    .replace(/==([^=][\s\S]*?[^=]|[^=])==/g, "<mark>$1</mark>"));
}

export function remarkObsidianCallouts() {
  return (tree) => walk(tree, (node) => {
    if (node.type !== "blockquote") return;

    const paragraph = node.children?.[0];
    const firstChild = paragraph?.type === "paragraph" ? paragraph.children?.[0] : null;
    if (firstChild?.type !== "text") return;

    const match = firstChild.value.match(/^\[!([a-z][a-z0-9-]*)\](?:[+-])?(?:[ \t]+([^\n]*))?(?:\n|$)/i);
    if (!match) return;

    const type = match[1].toLowerCase();
    const title = match[2]?.trim() || titleCase(type);
    firstChild.value = firstChild.value.slice(match[0].length);
    if (!firstChild.value) paragraph.children.shift();
    if (!paragraph.children.length) node.children.shift();

    node.data = {
      ...node.data,
      hName: "aside",
      hProperties: { className: ["callout"], dataCallout: type },
    };
    node.children.unshift({
      type: "paragraph",
      data: { hProperties: { className: ["callout-title"] } },
      children: [{ type: "strong", children: [{ type: "text", value: title }] }],
    });
  });
}

function mapOutsideCode(markdown, transform) {
  const lines = markdown.match(/[^\n]*(?:\n|$)/g) || [];
  const chunks = [];
  let buffer = "";
  let fence = null;

  const flush = (isCode) => {
    if (!buffer) return;
    chunks.push(isCode ? buffer : mapOutsideInlineCode(buffer, transform));
    buffer = "";
  };

  for (const line of lines) {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/i)?.[1];
    if (!fence && marker) {
      flush(false);
      fence = marker;
    }

    buffer += line;

    if (fence && marker?.[0] === fence[0] && marker.length >= fence.length && buffer !== line) {
      flush(true);
      fence = null;
    }
  }

  flush(Boolean(fence));
  return chunks.join("");
}

function mapOutsideInlineCode(content, transform) {
  const pattern = /(`+)[\s\S]*?\1/g;
  let output = "";
  let lastIndex = 0;

  for (const match of content.matchAll(pattern)) {
    output += transform(content.slice(lastIndex, match.index));
    output += match[0];
    lastIndex = match.index + match[0].length;
  }

  return output + transform(content.slice(lastIndex));
}

function renderEmbed(value, currentHref) {
  const [rawTarget, rawLabel] = splitAlias(value);
  const target = rawTarget.trim();

  if (!imageExtensions.test(target)) {
    return renderWikiLink(value, currentHref);
  }

  const fileName = target.split("/").at(-1);
  const defaultAlt = fileName.replace(/\.[^.]+$/, "");
  const alt = /^\d+(?:x\d+)?$/.test(rawLabel || "") ? defaultAlt : (rawLabel || defaultAlt);
  const source = `/media/${encodePath(fileName)}`;
  return `![${escapeMarkdownLabel(alt)}](${source})`;
}

function renderWikiLink(value, currentHref) {
  const [rawTarget, rawLabel] = splitAlias(value);
  const target = rawTarget.trim().replace(/\.md$/i, "");
  const [page, heading] = target.split(/#(.+)/, 2);
  const label = rawLabel || heading || page;
  const anchor = heading ? `#${slugify(heading)}` : "";

  let href;
  if (!page) {
    href = anchor || "#";
  } else if (page.includes("/")) {
    href = `/${page.split("/").map(encodePathSegment).join("/")}${anchor}`;
  } else {
    const directory = currentHref.slice(0, currentHref.lastIndexOf("/") + 1);
    href = `${directory}${encodePathSegment(page)}${anchor}`;
  }

  return `[${escapeMarkdownLabel(label)}](${href})`;
}

function splitAlias(value) {
  const separator = value.lastIndexOf("|");
  return separator === -1
    ? [value, ""]
    : [value.slice(0, separator), value.slice(separator + 1).trim()];
}

function encodePath(value) {
  return value.split("/").map(encodeURIComponent).join("/");
}

function encodePathSegment(value) {
  return encodeURIComponent(toSlug(value));
}

function escapeMarkdownLabel(value) {
  return String(value).replace(/([\\\[\]])/g, "\\$1");
}

function slugify(value) {
  return encodeURIComponent(value.trim().toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-"));
}

function titleCase(value) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function walk(node, visitor) {
  visitor(node);
  if (!Array.isArray(node.children)) return;
  for (const child of node.children) walk(child, visitor);
}

// Obsidian treats `$$…$$` as display math wherever it appears: mid-sentence,
// on one line, or with text sharing a line with the delimiters. remark-math
// only renders the strict form (`$$` alone on its own lines) as display, so
// every other `$$` pair is collapsed onto one line here and then promoted to
// display math by remarkDisplayMath. LaTeX-style `\(…\)` and `\[…\]` are
// rewritten to dollar delimiters as well.
function normalizeMath(content) {
  const text = content
    .replace(/\\\(([^\n]+?)\\\)/g, (_, value) => `$${value}$`)
    .replace(/\\\[([\s\S]+?)\\\]/g, (match, value) => (
      /[\\^_]/.test(value) ? `$$${value}$$` : match
    ));

  const delimiters = [...text.matchAll(/(?<!\\)\$\$/g)].map((match) => match.index);
  let output = "";
  let lastIndex = 0;

  for (let index = 0; index + 1 < delimiters.length; index += 2) {
    const open = delimiters[index];
    const close = delimiters[index + 1];
    if (isAloneOnLine(text, open) && isAloneOnLine(text, close)) continue;

    const value = text.slice(open + 2, close).replace(/[ \t]*\r?\n[ \t>]*/g, " ").trim();
    output += `${text.slice(lastIndex, open)}$$${value}$$`;
    lastIndex = close + 2;
  }

  return output + text.slice(lastIndex);
}

function isAloneOnLine(text, index) {
  const start = text.lastIndexOf("\n", index - 1) + 1;
  const end = text.indexOf("\n", index);
  const line = text.slice(start, end === -1 ? text.length : end);
  return /^[ \t>]*\$\$[ \t]*$/.test(line);
}

// Marks inline `$$…$$` math as display math and tidies its surroundings:
// line breaks next to it are dropped (the block already starts a new line),
// and trailing punctuation such as `$$x$$.` moves inside the formula instead
// of being stranded on a line of its own.
export function remarkDisplayMath() {
  return (tree, file) => {
    const source = String(file.value);

    walk(tree, (node) => {
      if (!Array.isArray(node.children)) return;
      const children = node.children;

      for (let index = 0; index < children.length; index += 1) {
        const child = children[index];
        if (child.type !== "inlineMath") continue;
        const offset = child.position?.start?.offset;
        if (offset === undefined || source.slice(offset, offset + 2) !== "$$") continue;

        const next = children[index + 1];
        if (next?.type === "text") {
          const punctuation = next.value.match(/^[.,;:]+(?=\s|$)/)?.[0];
          if (punctuation) {
            child.value += `\\,${punctuation}`;
            next.value = next.value.slice(punctuation.length);
          }
          next.value = next.value.replace(/^\s+/, "");
          if (!next.value) children.splice(index + 1, 1);
        }
        if (children[index + 1]?.type === "break") children.splice(index + 1, 1);

        const previous = children[index - 1];
        if (previous?.type === "text") {
          previous.value = previous.value.replace(/\s+$/, "");
          if (!previous.value) {
            children.splice(index - 1, 1);
            index -= 1;
          }
        }
        if (children[index - 1]?.type === "break") {
          children.splice(index - 1, 1);
          index -= 1;
        }

        // Stays an inline element so the paragraph around it is not split;
        // rehype-katex renders it as a block-level `.katex-display`.
        child.data = {
          ...child.data,
          hProperties: { className: ["language-math", "math-display"] },
          hChildren: [{ type: "text", value: child.value }],
        };
      }
    });
  };
}
