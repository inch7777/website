import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { toSlug } from "./slug.js";

const contentDirectory = path.join(process.cwd(), "content");

export const topics = [
  { slug: "philosophy", label: "Philosophy" },
  { slug: "politics", label: "Politics" },
  { slug: "mathematics", label: "Mathematics" },
];

const topicLabels = Object.fromEntries(topics.map((topic) => [topic.slug, topic.label]));

function listEntries(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith("."));
}

function readDirectory(directory, makePost) {
  return readEntries(directory, makePost, false);
}

// A directory is published on its own when no Markdown file beside it has the
// same name. The directory name, spaces included, becomes the title, and
// toSlug turns those spaces into hyphens in the URL.
function readEntries(directory, makePost, includeFolders) {
  const entries = listEntries(directory);
  const usedSlugs = new Set();
  const fileStems = new Set();

  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const fileStem = entry.name.replace(/\.md$/, "");
      fileStems.add(fileStem);
      const slug = uniqueSlug(fileStem, usedSlugs);
      return readMarkdownFile(path.join(directory, entry.name), slug, fileStem, makePost);
    });

  if (!includeFolders) return files;

  const folders = entries
    .filter((entry) => entry.isDirectory() && !fileStems.has(entry.name))
    .map((entry) => makePost({
      title: titleFromName(entry.name),
      description: "",
      publishedAt: getAddedDate(path.join(directory, entry.name)),
      slug: uniqueSlug(entry.name, usedSlugs),
      fileStem: entry.name,
      content: "",
      fromFolder: true,
    }));

  return [...files, ...folders];
}

function uniqueSlug(fileStem, usedSlugs) {
  let slug = toSlug(fileStem);
  if (usedSlugs.has(slug)) {
    let suffix = 2;
    while (usedSlugs.has(`${slug}-${suffix}`)) suffix += 1;
    slug = `${slug}-${suffix}`;
  }
  usedSlugs.add(slug);
  return slug;
}

function readMarkdownFile(filePath, slug, fileStem, makePost) {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const inferredTitle = data.title ? undefined : getTitle(content, fileStem);

  return makePost({
    ...data,
    title: data.title || inferredTitle,
    description: data.description || "",
    publishedAt: normalizeDate(data.publishedAt) || getAddedDate(filePath),
    updatedAt: normalizeDate(data.updatedAt),
    slug,
    fileStem,
    content: inferredTitle ? removeFirstHeading(content) : content,
  });
}

function titleFromName(fileStem) {
  const name = String(fileStem || "").trim();
  if (!name) return "Untitled";
  // A name that already has spaces is a title. Keep hyphens inside it,
  // so "self-made IBL on Abstract Algebra" stays intact. Hyphens only
  // stand in for spaces in a slug-style name such as "is-blue-cold".
  if (/\s/.test(name)) return name.replace(/\s+/g, " ");
  return name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim() || "Untitled";
}

function getTitle(content, fileStem) {
  const heading = content.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
  return heading ? normalizeCapitals(heading) : titleFromName(fileStem);
}

const smallWords = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into",
  "nor", "of", "on", "or", "per", "the", "to", "via", "vs", "with",
]);

// Headings typed in capitals ("MATH 161, SHEET 3: COSETS AND …") read as
// shouting in lists and the sidebar. Each part of the heading (split at
// colons) that is mostly in capitals is turned into title case; parts in
// mixed case are left alone.
export function normalizeCapitals(title) {
  return title.split(/(:\s*)/).map((part, index) => (
    index % 2 ? part : titleCaseIfShouting(part)
  )).join("");
}

function titleCaseIfShouting(text) {
  // Short joining words typed in lower case ("SETS and LIMITS") don't count.
  const words = (text.match(/[\p{L}][\p{L}'’]*/gu) || []).filter((word) => !smallWords.has(word));
  const capitals = words.filter((word) => word.length > 1 && word === word.toUpperCase());
  if (!capitals.length || capitals.length / words.length < 0.7) return text;

  let first = true;
  return text.replace(/[\p{L}][\p{L}'’]*/gu, (word, offset) => {
    const lower = word.toLowerCase();
    const afterDash = /[—–]\s*$/.test(text.slice(0, offset));
    const keepSmall = !first && !afterDash && smallWords.has(lower);
    first = false;
    if (keepSmall) return lower;
    // Roman numerals such as "II" or "IV" stay in capitals.
    if (/^[IVX]+$/.test(word) && word.length <= 4) return word;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });
}

function removeFirstHeading(content) {
  return content.replace(/^#\s+.+?\s*#*\s*(?:\r?\n|$)/m, "");
}

function getAddedDate(filePath) {
  try {
    const relativePath = path.relative(process.cwd(), filePath);
    const output = execFileSync(
      "git",
      ["log", "--follow", "--diff-filter=A", "--format=%aI", "--", relativePath],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    );
    const dates = output.trim().split("\n").filter(Boolean);
    if (dates.length) return normalizeDate(dates.at(-1));
  } catch {
    // Git history may be unavailable in an exported source tree.
  }

  const stats = fs.statSync(filePath);
  const fallback = stats.birthtimeMs > 0 ? stats.birthtime : stats.mtime;
  return normalizeDate(fallback);
}

function normalizeDate(value) {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const stringValue = String(value);
  return stringValue.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || stringValue;
}

function newestFirst(a, b) {
  return b.publishedAt.localeCompare(a.publishedAt)
    || a.slug.localeCompare(b.slug, undefined, { numeric: true });
}

// Orders siblings the way a file browser would, but reads decimals in names
// as numbers, so "Script2" < "Script2.5 Proofs" < "Script3" < "Script10".
function readingOrder(a, b) {
  const tokens = (post) => String(post.name || post.slug.split("/").at(-1))
    .toLowerCase()
    .match(/\d+(?:\.\d+)?|\D+/g) || [];
  const left = tokens(a);
  const right = tokens(b);

  for (let index = 0; index < Math.min(left.length, right.length); index += 1) {
    const x = left[index];
    const y = right[index];
    if (x === y) continue;
    const bothNumbers = /^\d/.test(x) && /^\d/.test(y);
    if (bothNumbers && Number(x) !== Number(y)) return Number(x) - Number(y);
    // Text that ends a name ("Script2") sorts before text that continues it
    // ("Script2 Nov13"), so a piece comes before its later versions.
    return x.localeCompare(y, undefined, { sensitivity: "base" });
  }

  return left.length - right.length;
}

export function getSiblingPosts(post) {
  const posts = post.kind === "musing"
    ? getMusings().filter((entry) => entry.topic === post.topic)
    : post.kind === "literary"
      ? getLiteraryWorks()
      : [];

  return posts
    .filter((entry) => (entry.parentSlug || null) === (post.parentSlug || null))
    .sort(readingOrder);
}

export function getSiblingNavigation(post) {
  const siblings = getSiblingPosts(post);
  const index = siblings.findIndex((entry) => entry.href === post.href);
  if (index === -1) return { previous: null, next: null };
  return { previous: siblings[index - 1] || null, next: siblings[index + 1] || null };
}

function published(posts) {
  return posts.filter((post) => !post.draft).sort(newestFirst).map(publicPost);
}

function publicPost(post) {
  const { fileStem, fromFolder, ...rest } = post;
  return { ...rest, name: fileStem };
}

export function getBlogPosts() {
  return published(readDirectory(path.join(contentDirectory, "blog"), (post) => ({
    ...post,
    kind: "blog",
    topics: Array.isArray(post.topics) ? post.topics : [],
    href: `/blog/${post.slug}`,
  })));
}

function readMusingDirectory(directory, topic, parent) {
  const posts = readEntries(directory, (post) => {
    const slug = parent ? `${parent.slug}/${post.slug}` : post.slug;
    const href = `/musings/${topic}/${slug}`;

    return {
      ...post,
      slug,
      kind: "musing",
      topic,
      topics: [topic],
      parentSlug: parent?.slug,
      parentTitle: parent?.title,
      parentHref: parent?.href,
      href,
    };
  }, true);

  return posts.flatMap((post) => attachChildren(post, (childDirectory, childParent) => (
    readMusingDirectory(childDirectory, topic, childParent)
  ), directory));
}

export function getMusings() {
  return published(topics.flatMap(({ slug: topic }) => readMusingDirectory(
    path.join(contentDirectory, "musings", topic),
    topic,
  )));
}

function readLiteraryDirectory(directory, parent) {
  const posts = readEntries(directory, (post) => {
    const slug = parent ? `${parent.slug}/${post.slug}` : post.slug;

    return {
      ...post,
      slug,
      kind: "literary",
      topics: [],
      parentSlug: parent?.slug,
      parentTitle: parent?.title,
      parentHref: parent?.href,
      href: `/literary-works/${slug}`,
    };
  }, true);

  return posts.flatMap((post) => attachChildren(post, (childDirectory, childParent) => (
    readLiteraryDirectory(childDirectory, childParent)
  ), directory));
}

function attachChildren(post, readChildren, directory) {
  if (post.draft) return [post];

  const children = readChildren(path.join(directory, post.fileStem), post);
  if (post.fromFolder && !String(post.content || "").trim() && children.length === 0) return [];
  return [post, ...children];
}

export function getLiteraryWorks() {
  return published(readLiteraryDirectory(path.join(contentDirectory, "literary")));
}

export function getChildPosts(post) {
  const posts = post.kind === "musing"
    ? getMusings()
    : post.kind === "literary"
      ? getLiteraryWorks()
      : [];

  return posts.filter((child) => child.parentSlug === post.slug).sort(readingOrder);
}

export function getAllPublishedWorks() {
  return [...getBlogPosts(), ...getMusings(), ...getLiteraryWorks()].sort(newestFirst);
}

// Kept as the blog-facing API used throughout the site.
export const getPublishedPosts = getBlogPosts;

export function getPost(slug, topic) {
  const posts = topic ? getMusings() : getBlogPosts();
  return posts.find((post) => post.slug === slug && (!topic || post.topic === topic));
}

export function getLiteraryWork(slug) {
  return getLiteraryWorks().find((work) => work.slug === slug);
}

export function getPostsByTopic(topic) {
  if (!topicLabels[topic]) return [];
  const posts = getMusings().filter((post) => post.topic === topic);

  const withChildren = (post) => ({
    ...post,
    children: posts
      .filter((child) => child.parentSlug === post.slug)
      .sort(readingOrder)
      .map(withChildren),
  });

  return posts
    .filter((post) => !post.parentSlug)
    .map(withChildren);
}

export function getAdjacentPosts(slug, posts = getBlogPosts()) {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 ? posts[index + 1] || null : null,
  };
}

export function getTopicLabel(topic) {
  return topicLabels[topic] || topic;
}

export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
