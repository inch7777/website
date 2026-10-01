import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Yanqi Wang, home">
          Yanqi Wang
        </Link>
        <div className="nav-links">
          <Link href="/">About</Link>
          <div className="nav-menu">
            <Link className="nav-menu-label" href="/musings">Musings</Link>
            <div className="submenu">
              <Link href="/musings/philosophy">Philosophy</Link>
              <Link href="/musings/politics">Politics</Link>
              <Link href="/musings/mathematics">Mathematics</Link>
            </div>
          </div>
          <Link href="/literary-works">Literary Works</Link>
          <Link href="/media">Media</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
