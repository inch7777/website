import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import JsonLd from "../../components/JsonLd";
import { getPostsByTopic } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";
import { createCollectionJsonLd } from "../../../lib/structured-data";

const description = "Notes by Yanqi Wang on patterns, problems, and mathematical ideas.";

export const metadata = createPageMetadata({
  title: "Mathematics",
  description,
  path: "/musings/mathematics",
});

export default function MathematicsPage() {
  const posts = getPostsByTopic("mathematics");
  const jsonLd = createCollectionJsonLd({
    name: "Mathematics",
    description,
    path: "/musings/mathematics",
    items: posts.map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
  });

  return (
    <MusingsLayout current="/musings/mathematics">
      <JsonLd data={jsonLd} />
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Mathematics</h1>
        <p className="musings-deck">Notes on patterns, problems, and mathematical ideas.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
