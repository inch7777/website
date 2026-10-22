import Link from "next/link";
import JsonLd from "./JsonLd";
import MarkdownContent from "./MarkdownContent";
import { formatPostDate } from "../../lib/posts";
import { site } from "../../lib/site";

export default function MarkdownArticle({ item, backHref, backLabel }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": item.kind === "blog" ? "BlogPosting" : "Article",
    headline: item.title,
    description: item.description,
    datePublished: item.publishedAt,
    dateModified: item.updatedAt || item.publishedAt,
    url: `${site.url}${item.href}`,
    author: { "@id": `${site.url}/#person` },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className="article-header">
        <Link className="article-back" href={backHref}>
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
        <p className="article-meta">
          <time dateTime={item.publishedAt}>{formatPostDate(item.publishedAt)}</time>
        </p>
        <h1>{item.title}</h1>
        <p className="article-deck">{item.description}</p>
        {item.updatedAt && <p className="article-updated">Updated {formatPostDate(item.updatedAt)}</p>}
      </header>
      <div className="article-body">
        <MarkdownContent content={item.content} href={item.href} />
      </div>
    </>
  );
}
