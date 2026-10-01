import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="page shell">
      <header className="page-header">
        <p className="kicker">404</p>
        <h1>Post not found</h1>
      </header>
      <div className="empty-state">
        <p>This post may have moved, or it may not be published yet.</p>
        <p>
          <Link href="/blog">Return to the blog</Link>
        </p>
      </div>
    </main>
  );
}
