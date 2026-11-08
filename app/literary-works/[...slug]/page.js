import { notFound } from "next/navigation";
import MarkdownArticle from "../../components/MarkdownArticle";
import PostList from "../../components/PostList";
import { getChildPosts, getLiteraryWork, getLiteraryWorks } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLiteraryWorks().map((work) => ({ slug: work.slug.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getLiteraryWork(slug.join("/"));
  if (!work) return {};
  return createPageMetadata({ title: work.title, description: work.description, path: work.href, type: "article" });
}

export default async function LiteraryWorkPage({ params }) {
  const { slug } = await params;
  const work = getLiteraryWork(slug.join("/"));
  if (!work) notFound();
  const children = getChildPosts(work);

  return (
    <main className="article-page shell">
      <article>
        <MarkdownArticle
          item={work}
          backHref={work.parentHref || "/literary-works"}
          backLabel={work.parentTitle || "Literary Works"}
        />
        {children.length > 0 && (
          <section className="blog-archive" aria-labelledby="contents-heading">
            <h2 id="contents-heading">Contents</h2>
            <PostList posts={children} />
          </section>
        )}
      </article>
    </main>
  );
}
