import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import { getPostsByTopic } from "../../../lib/posts";

export const metadata = { title: "Politics" };

export default function PoliticsPage() {
  const posts = getPostsByTopic("politics");

  return (
    <MusingsLayout current="/musings/politics">
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Politics</h1>
        <p className="musings-deck">Observations on public life, society, and the choices we share.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
