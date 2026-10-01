import Link from "next/link";
import { formatPostDate, getTopicLabel } from "../../lib/posts";

export default function PostList({
  posts,
  emptyTitle = "Nothing published here yet.",
  emptyText = "New writing will appear here when it is ready.",
}) {
  if (posts.length === 0) {
    return (
      <div className="writing-empty">
        <p className="writing-status">{emptyTitle}</p>
        <p>{emptyText}</p>
      </div>
    );
  }

  return (
    <ol className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link className="post-row" href={post.href}>
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span className="post-row-copy">
              <span className="post-row-title">{post.title}</span>
              <span className="post-row-description">{post.description}</span>
            </span>
            <span className="post-row-topic">
              {post.kind === "musing"
                ? getTopicLabel(post.topic)
                : post.kind === "literary"
                  ? "Literary"
                  : "Blog"}
            </span>
            <span className="post-row-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
