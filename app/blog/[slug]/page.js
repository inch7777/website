import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getAdjacentPosts,
  getPost,
  getPublishedPosts,
  getTopicLabel,
} from "../../../lib/posts";
import { site } from "../../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { default: Post } = await post.load();
  const { newer, older } = getAdjacentPosts(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main className="article-page shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <header className="article-header">
          <Link className="article-back" href="/blog">
            <span aria-hidden="true">←</span> Blog
          </Link>
          <p className="article-meta">
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span aria-hidden="true"> · </span>
            {post.topics.map((topic, index) => (
              <span key={topic}>
                {index > 0 && ", "}
                <Link href={`/musings/${topic}`}>{getTopicLabel(topic)}</Link>
              </span>
            ))}
          </p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.description}</p>
          {post.updatedAt && (
            <p className="article-updated">
              Updated {formatPostDate(post.updatedAt)}
            </p>
          )}
        </header>
        <div className="article-body">
          <Post />
        </div>
      </article>

      <nav className="article-navigation" aria-label="More writing">
        {newer ? (
          <Link href={`/blog/${newer.slug}`}>
            <span>Newer</span>
            {newer.title}
          </Link>
        ) : (
          <span />
        )}
        {older && (
          <Link className="article-navigation-next" href={`/blog/${older.slug}`}>
            <span>Older</span>
            {older.title}
          </Link>
        )}
      </nav>
    </main>
  );
}
