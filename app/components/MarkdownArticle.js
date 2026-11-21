import Link from "next/link";
import JsonLd from "./JsonLd";
import MarkdownContent from "./MarkdownContent";
import PostDates from "./PostDates";
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
        <PostDates post={item} />
        <h1>{item.title}</h1>
        {item.description ? <p className="article-deck">{item.description}</p> : null}
      </header>
      {item.content.trim() ? (
        <div className="article-body">
          <MarkdownContent content={item.content} href={item.href} />
        </div>
      ) : null}
    </>
  );
}
