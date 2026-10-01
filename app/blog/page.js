import PostList from "../components/PostList";
import { getPublishedPosts } from "../../lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Occasional essays and notes by Yanqi Wang about ideas, school, and life.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main className="blog-index shell">
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
