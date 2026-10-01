import { getPublishedPosts } from "../lib/posts";
import portraitImage from "../photo.jpeg";
import { absoluteUrl } from "../lib/site";

export default function sitemap() {
  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/musings", changeFrequency: "weekly", priority: 0.8 },
    { path: "/musings/philosophy", changeFrequency: "weekly", priority: 0.7 },
    { path: "/musings/politics", changeFrequency: "weekly", priority: 0.7 },
    { path: "/musings/mathematics", changeFrequency: "weekly", priority: 0.7 },
    { path: "/media", changeFrequency: "monthly", priority: 0.6 },
  ].map(({ path, ...entry }) => ({ url: absoluteUrl(path), ...entry }));

  pages[0].images = [absoluteUrl(portraitImage.src)];

  const posts = getPublishedPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
