import MusingsLayout from "../../components/MusingsLayout";
import PostList from "../../components/PostList";
import { getPostsByTopic } from "../../../lib/posts";

export const metadata = { title: "Philosophy" };

export default function PhilosophyPage() {
  const posts = getPostsByTopic("philosophy");

  return (
    <MusingsLayout current="/musings/philosophy">
      <header className="musings-header">
        <p className="kicker">Musings</p>
        <h1>Philosophy</h1>
        <p className="musings-deck">Notes and questions about ideas, meaning, and how we live.</p>
      </header>
      <PostList posts={posts} />
    </MusingsLayout>
  );
}
