import Link from "next/link";
import { getSiblingNavigation } from "../../lib/posts";

// Previous and next links between pieces in the same folder, such as the
// sheets of a course or the chapters of a story. Loose top-level pieces are
// not a sequence, so they get none.
export default function SeriesNavigation({ post }) {
  if (!post.parentSlug) return null;
  const { previous, next } = getSiblingNavigation(post);
  if (!previous && !next) return null;
  // Drafts of one sheet share a title; their file names tell them apart.
  const label = (entry) => (entry.title === post.title && entry.name ? entry.name : entry.title);

  return (
    <nav className="article-navigation" aria-label="More in this series">
      {previous ? (
        <Link className="article-navigation-previous" href={previous.href} rel="prev">
          <span>← Previous</span>
          {label(previous)}
        </Link>
      ) : <div />}
      {next ? (
        <Link className="article-navigation-next" href={next.href} rel="next">
          <span>Next →</span>
          {label(next)}
        </Link>
      ) : <div />}
    </nav>
  );
}
