import { formatPostDate } from "../../lib/posts";

// "Posted 22 October 2026 · Edited 21 November 2026". Both dates come from
// git (lib/git-dates.js) unless the post sets publishedAt/updatedAt itself.
export default function PostDates({ post }) {
  return (
    <p className="article-meta">
      Posted <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
      {post.updatedAt ? (
        <>
          {" · "}Edited <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time>
        </>
      ) : null}
    </p>
  );
}
