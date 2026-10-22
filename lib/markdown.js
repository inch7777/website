import { defaultSchema } from "rehype-sanitize";

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
  return mapOutsideCode(markdown, (content) => content
    .replace(/%%[\s\S]*?%%/g, "")
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
  return encodeURIComponent(value.trim());
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
