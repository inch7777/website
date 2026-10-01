import fs from "node:fs";
import path from "node:path";
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
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(source);
      const post = makePost({
        ...data,
        publishedAt: normalizeDate(data.publishedAt),
        updatedAt: normalizeDate(data.updatedAt),
        slug,
        content,
      });

      if (!post.title || !post.description || !post.publishedAt) {
        throw new Error(`Content metadata is incomplete: ${path.join(directory, file)}`);
      }

      return post;
    });
}

function normalizeDate(value) {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
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
