import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import MarkdownContent from "../../../components/MarkdownContent";
import MusingsLayout from "../../../components/MusingsLayout";
import PostList from "../../../components/PostList";
import {
  formatPostDate,
  getChildPosts,
  getPost,
  getMusings,
  getTopicLabel,
  topics,
} from "../../../../lib/posts";
import { createPageMetadata } from "../../../../lib/metadata";
import { site } from "../../../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMusings().map((post) => ({
    topic: post.topic,
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const { topic, slug } = await params;
  const post = getPost(slug.join("/"), topic);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: post.href,
    type: "article",
  });
}

export default async function MusingPage({ params }) {
  const { topic, slug } = await params;
  if (!topics.some((entry) => entry.slug === topic)) notFound();

  const post = getPost(slug.join("/"), topic);
  if (!post) notFound();
  const children = getChildPosts(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `${site.url}${post.href}`,
    author: { "@id": `${site.url}/#person` },
    articleSection: getTopicLabel(post.topic),
  };

  return (
    <MusingsLayout current={post.href}>
      <JsonLd data={jsonLd} />
      <header className="musing-article-header">
        <Link
          className="article-back"
          href={post.parentHref || `/musings/${post.topic}`}
        >
          <span aria-hidden="true">←</span>{" "}
          {post.parentTitle || getTopicLabel(post.topic)}
        </Link>
        <p className="article-meta">
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        </p>
        <h1>{post.title}</h1>
        {post.description ? <p className="article-deck">{post.description}</p> : null}
      </header>
      {post.content.trim() ? (
        <div className="article-body musing-article-body">
          <MarkdownContent content={post.content} href={post.href} />
        </div>
      ) : null}
      {children.length > 0 && (
        <section className="blog-archive" aria-labelledby="contents-heading">
          <h2 id="contents-heading">Contents</h2>
          <PostList posts={children} />
        </section>
      )}
    </MusingsLayout>
  );
}
