import Link from "next/link";
import { getPostsByTopic, topics as topicDefinitions } from "../../lib/posts";

const sections = [
  {
    label: "Writing",
    items: [{ label: "All musings", href: "/musings" }],
  },
  {
    label: "Topics",
    items: topicDefinitions.map((topic) => ({
      label: topic.label,
      href: `/musings/${topic.slug}`,
      children: getPostsByTopic(topic.slug).map((post) => ({
        label: post.title,
        href: post.href,
      })),
    })),
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
                      {item.children?.length > 0 && (
                        <ul className="musings-nav-children">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} aria-current={current === child.href ? "page" : undefined}>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
