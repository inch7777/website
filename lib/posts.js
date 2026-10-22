import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export const topics = [
  { slug: "philosophy", label: "Philosophy" },
  { slug: "politics", label: "Politics" },
  { slug: "mathematics", label: "Mathematics" },
];

const topicLabels = Object.fromEntries(topics.map((topic) => [topic.slug, topic.label]));

function readDirectory(directory, makePost) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(directory, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      const inferredTitle = data.title ? undefined : getTitle(content, slug);
      const post = makePost({
        ...data,
        title: data.title || inferredTitle,
        description: data.description || "",
        publishedAt: normalizeDate(data.publishedAt) || getAddedDate(filePath),
        updatedAt: normalizeDate(data.updatedAt),
        slug,
        content: inferredTitle ? removeFirstHeading(content) : content,
      });

      return post;
    });
}

function getTitle(content, slug) {
  const heading = content.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
  return heading || slug.replace(/[-_]+/g, " ");
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

export function getMusings() {
  return published(topics.flatMap(({ slug: topic }) =>
    readDirectory(path.join(contentDirectory, "musings", topic), (post) => ({
      ...post,
      kind: "musing",
      topic,
      topics: [topic],
      href: `/musings/${topic}/${post.slug}`,
    })),
  ));
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
  return getMusings().filter((post) => post.topic === topic);
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
