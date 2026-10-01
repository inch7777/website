export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="/" aria-label="Yanqi Wang, home">
          Yanqi Wang
        </a>
        <div className="nav-links">
          <a href="/">About</a>
          <div className="nav-menu">
            <a className="nav-menu-label" href="/musings">Musings</a>
            <div className="submenu">
              <a href="/musings/philosophy">Philosophy</a>
              <a href="/musings/politics">Politics</a>
              <a href="/musings/mathematics">Mathematics</a>
            </div>
          </div>
          <a href="/media">Media</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>
    </header>
  );
}
