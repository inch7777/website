import { notFound } from "next/navigation";
import MarkdownArticle from "../../components/MarkdownArticle";
import { getLiteraryWork, getLiteraryWorks } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLiteraryWorks().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = getLiteraryWork(slug);
  if (!work) return {};
  return createPageMetadata({ title: work.title, description: work.description, path: work.href, type: "article" });
}

export default async function LiteraryWorkPage({ params }) {
  const { slug } = await params;
  const work = getLiteraryWork(slug);
  if (!work) notFound();
  return <main className="article-page shell"><article><MarkdownArticle item={work} backHref="/literary-works" backLabel="Literary Works" /></article></main>;
}
