import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import JsonLd from "../../components/JsonLd";
import { getPostsByTopic } from "../../../lib/posts";
import { createPageMetadata } from "../../../lib/metadata";
import { createCollectionJsonLd } from "../../../lib/structured-data";

const description =
  "Observations by Yanqi Wang on public life, society, and the choices we share.";

export const metadata = createPageMetadata({
  title: "Politics",
  description,
  path: "/musings/politics",
});

export default function PoliticsPage() {
  const posts = getPostsByTopic("politics");
  const jsonLd = createCollectionJsonLd({
    name: "Politics",
    description,
    path: "/musings/politics",
    items: posts.map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
  });

  return (
    <MusingsLayout current="/musings/politics">
      <JsonLd data={jsonLd} />
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Politics</h1>
        <p className="musings-deck">Observations on public life, society, and the choices we share.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
