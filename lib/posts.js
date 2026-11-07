import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { toSlug } from "./slug";

const contentDirectory = path.join(process.cwd(), "content");

export const topics = [
  { slug: "philosophy", label: "Philosophy" },
  { slug: "politics", label: "Politics" },
  { slug: "mathematics", label: "Mathematics" },
];

const topicLabels = Object.fromEntries(topics.map((topic) => [topic.slug, topic.label]));

function readDirectory(directory, makePost) {
  if (!fs.existsSync(directory)) return [];

  const usedSlugs = new Set();

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fileStem = file.replace(/\.md$/, "");
      const slug = uniqueSlug(fileStem, usedSlugs);
      const filePath = path.join(directory, file);
      return readMarkdownFile(filePath, slug, fileStem, makePost);
    });
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

function getTitle(content, fileStem) {
  const heading = content.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
  return heading || fileStem.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
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
  return b.publishedAt.localeCompare(a.publishedAt);
}

function published(posts) {
  return posts.filter((post) => !post.draft).sort(newestFirst);
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
  const posts = readDirectory(directory, (post) => {
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
  });

  return posts.flatMap((post) => {
    if (post.draft) return [post];
    return [
      post,
      ...readMusingDirectory(path.join(directory, post.fileStem), topic, post),
    ];
  });
}

export function getMusings() {
  return published(topics.flatMap(({ slug: topic }) => readMusingDirectory(
    path.join(contentDirectory, "musings", topic),
    topic,
  )));
}

export function getLiteraryWorks() {
  return published(readDirectory(path.join(contentDirectory, "literary"), (post) => ({
    ...post,
    kind: "literary",
    topics: [],
    href: `/literary-works/${post.slug}`,
  })));
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
