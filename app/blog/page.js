import PostList from "../components/PostList";
import JsonLd from "../components/JsonLd";
import { getBlogPosts } from "../../lib/posts";
import { createPageMetadata } from "../../lib/metadata";
import { createCollectionJsonLd } from "../../lib/structured-data";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Occasional essays and notes by Yanqi Wang about ideas, school, and life.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const jsonLd = createCollectionJsonLd({
    name: "Yanqi Wang's Blog",
    description: metadata.description,
    path: "/blog",
    type: "Blog",
    items: posts.map((post) => ({
      name: post.title,
      path: post.href,
    })),
  });

  return (
    <main className="blog-index shell">
      <JsonLd data={jsonLd} />
      <header className="blog-index-header">
        <p className="kicker">Notes and essays</p>
        <h1>Blog</h1>
        <p className="blog-deck">
          Occasional writing about ideas, school, life, and things I am still
          learning.
        </p>
        <a className="feed-link" href="/feed.xml">
          RSS feed <span aria-hidden="true">↗</span>
        </a>
      </header>
      <section className="blog-archive" aria-labelledby="writing-heading">
        <h2 id="writing-heading">Writing</h2>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
