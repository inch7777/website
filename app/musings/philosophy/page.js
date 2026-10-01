import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import JsonLd from "../../components/JsonLd";
import { getPostsByTopic } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";
import { createCollectionJsonLd } from "../../../lib/structured-data";

const description = "Notes and questions by Yanqi Wang about ideas, meaning, and how we live.";

export const metadata = createPageMetadata({
  title: "Philosophy",
  description,
  path: "/musings/philosophy",
});

export default function PhilosophyPage() {
  const posts = getPostsByTopic("philosophy");
  const jsonLd = createCollectionJsonLd({
    name: "Philosophy",
    description,
    path: "/musings/philosophy",
    items: posts.map((post) => ({ name: post.title, path: post.href })),
  });

  return (
    <MusingsLayout current="/musings/philosophy">
      <JsonLd data={jsonLd} />
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Philosophy</h1>
        <p className="musings-deck">Notes and questions about ideas, meaning, and how we live.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
