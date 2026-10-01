import { getPublishedPosts } from "../lib/posts";
import { site } from "../lib/site";

export default function sitemap() {
  const pages = [
    "",
    "/blog",
    "/media",
    "/musings",
    "/musings/philosophy",
    "/musings/politics",
    "/musings/mathematics",
  ].map((path) => ({ url: `${site.url}${path}` }));

  const posts = getPublishedPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
  }));

  return [...pages, ...posts];
}
