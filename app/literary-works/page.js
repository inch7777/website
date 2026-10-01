import PostList from "../components/PostList";
import JsonLd from "../components/JsonLd";
import { getLiteraryWorks } from "../../lib/posts";
import { createPageMetadata } from "../../lib/metadata";
import { createCollectionJsonLd } from "../../lib/structured-data";

const description = "A collection of poetry, fiction, and other literary works by Yanqi Wang.";
export const metadata = createPageMetadata({ title: "Literary Works", description, path: "/literary-works" });

export default function LiteraryWorksPage() {
  const works = getLiteraryWorks();
  return (
    <main className="blog-index shell">
      <JsonLd data={createCollectionJsonLd({ name: "Literary Works", description, path: "/literary-works", items: works.map((work) => ({ name: work.title, path: work.href })) })} />
      <header className="blog-index-header">
        <p className="kicker">Creative writing</p>
        <h1>Literary Works</h1>
        <p className="blog-deck">Poetry, fiction, and other creative writing.</p>
      </header>
      <section className="blog-archive" aria-labelledby="works-heading">
        <h2 id="works-heading">Works</h2>
        <PostList posts={works} emptyTitle="Nothing published here yet." emptyText="New literary work will appear here when it is ready." />
      </section>
    </main>
  );
}
