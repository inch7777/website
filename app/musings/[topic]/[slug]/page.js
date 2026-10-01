import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import JsonLd from "../../../components/JsonLd";
import MusingsLayout from "../../../components/MusingsLayout";
import {
  formatPostDate,
  getPost,
  getMusings,
  getTopicLabel,
  topics,
} from "../../../../lib/posts";
import { createPageMetadata } from "../../../../lib/metadata";
import { site } from "../../../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMusings().map((post) => ({ topic: post.topic, slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { topic, slug } = await params;
  const post = getPost(slug, topic);
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

  const post = getPost(slug, topic);
  if (!post) notFound();

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
        <Link className="article-back" href={`/musings/${post.topic}`}>
          <span aria-hidden="true">←</span> {getTopicLabel(post.topic)}
        </Link>
        <p className="article-meta">
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        </p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.description}</p>
      </header>
      <div className="article-body musing-article-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </MusingsLayout>
  );
}
