import Link from "next/link";
import { getPostsByTopic, topics as topicDefinitions } from "../../lib/posts";

function musingNavigationItem(post, label = post.title) {
  return {
    label,
    href: post.href,
    children: navigationLabels(post.children),
  };
}

// Sibling titles such as "Math 161, Sheet 1: Sets" and "Sheet 9: Limits"
// repeat a course label. In the sidebar they are shortened to "1: Sets" and
// "9: Limits" when most siblings follow that "… number: title" pattern;
// otherwise a shared opening ("Notes on …") is dropped. Siblings with the
// same title, such as drafts of one sheet, are told apart by file name.
function navigationLabels(posts) {
  const titles = posts.map((post) => post.title);
  const numbered = titles.map((title) => title.match(/^(.{0,30}?)(\d+(?:\.\d+)*)\s*:\s+(.+)$/));
  const useNumbers = posts.length >= 3 && numbered.filter(Boolean).length >= posts.length * 0.6;
  const prefix = useNumbers ? "" : sharedPrefix(titles);

  return posts.map((post, index) => {
    let label = post.title;
    if (titles.filter((title) => title === post.title).length > 1 && post.name) {
      label = post.name;
    } else if (useNumbers && numbered[index]) {
      label = `${numbered[index][2]}: ${numbered[index][3]}`;
    } else if (prefix && post.title.startsWith(prefix) && post.title.slice(prefix.length).trim()) {
      label = post.title.slice(prefix.length).trim();
    }
    return musingNavigationItem(post, label);
  });
}

function sharedPrefix(titles) {
  if (titles.length < 3) return "";
  const needed = Math.max(2, Math.ceil(titles.length * 0.6));
  let best = "";

  for (const title of titles) {
    // Candidate prefixes end after a space, at a word boundary.
    for (let end = title.indexOf(" ") + 1; end > 0; end = title.indexOf(" ", end) + 1) {
      const candidate = title.slice(0, end);
      if (candidate.length <= best.length) continue;
      const count = titles.filter((other) => other.startsWith(candidate)).length;
      if (count >= needed) best = candidate;
    }
  }

  return best.length >= 4 ? best : "";
}

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
      children: navigationLabels(getPostsByTopic(topic.slug)),
    })),
  },
];

export const topics = sections[1].items;

function NavigationItems({ items, current, nested = false }) {
  return (
    <ul className={nested ? "musings-nav-children" : undefined}>
      {items.map((item) => {
        const active = current === item.href;
        return (
          <li key={item.href}>
            <Link href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </Link>
            {item.children?.length > 0 && (
              <NavigationItems items={item.children} current={current} nested />
            )}
          </li>
        );
      })}
    </ul>
  );
}

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
              <NavigationItems items={section.items} current={current} />
            </section>
          ))}
        </nav>
      </aside>
      <article className="musings-content">{children}</article>
    </main>
  );
}
