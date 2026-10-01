import { notFound } from "next/navigation";
import MarkdownArticle from "../../components/MarkdownArticle";
import { getBlogPosts, getPost } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createPageMetadata({ title: post.title, description: post.description, path: post.href, type: "article" });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <main className="article-page shell"><article><MarkdownArticle item={post} backHref="/blog" backLabel="Blog" /></article></main>;
}
