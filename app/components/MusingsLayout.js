import Link from "next/link";

const sections = [
  {
    label: "Writing",
    items: [{ label: "All musings", href: "/musings" }],
  },
  {
    label: "Topics",
    items: [
      { label: "Philosophy", href: "/musings/philosophy" },
      { label: "Politics", href: "/musings/politics" },
      { label: "Mathematics", href: "/musings/mathematics" },
    ],
  },
];

export const topics = sections[1].items;

export default function MusingsLayout({ current, children }) {
  return (
    <main className="musings shell">
      <aside className="musings-sidebar" aria-label="Musings navigation">
        <Link className="musings-title" href="/musings">
          Musings
        </Link>
        <p className="musings-sidebar-intro">
          Notes, questions, and ideas worth returning to.
        </p>
        <nav className="musings-tree">
          {sections.map((section) => (
            <section className="musings-nav-section" key={section.label}>
              <h2>{section.label}</h2>
              <ul>
                {section.items.map((item) => {
                  const active = current === item.href;
                  return (
                    <li key={item.href}>
                      <Link href={item.href} aria-current={active ? "page" : undefined}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </aside>
      <article className="musings-content">{children}</article>
    </main>
  );
}
