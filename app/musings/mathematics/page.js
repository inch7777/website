import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import { getPostsByTopic } from "../../../lib/posts";

export const metadata = { title: "Mathematics" };

export default function MathematicsPage() {
  const posts = getPostsByTopic("mathematics");

  return (
    <MusingsLayout current="/musings/mathematics">
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Mathematics</h1>
        <p className="musings-deck">Notes on patterns, problems, and mathematical ideas.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
