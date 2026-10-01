import Link from "next/link";
import MusingsLayout, { topics } from "../components/MusingsLayout";

export const metadata = { title: "Musings" };

const descriptions = {
  Philosophy: "Ideas about meaning, knowledge, and how we choose to live.",
  Politics: "Observations on public life, society, and shared decisions.",
  Mathematics: "Patterns, problems, and mathematical ways of seeing.",
};

export default function MusingsPage() {
  return (
    <MusingsLayout current="/musings">
      <header className="musings-header">
        <p className="kicker">A collection in progress</p>
        <h1>Musings</h1>
        <p className="musings-deck">
          A home for unfinished thoughts and longer pieces. Browse the writing
          by subject; this collection will grow and change over time.
        </p>
      </header>

      <section className="musings-index" aria-labelledby="topics-heading">
        <h2 id="topics-heading">Topics</h2>
        <div className="topic-list">
          {topics.map((topic, index) => (
            <Link className="topic-row" href={topic.href} key={topic.href}>
              <span className="topic-number">0{index + 1}</span>
              <span>
                <strong>{topic.label}</strong>
                <small>{descriptions[topic.label]}</small>
              </span>
              <span className="topic-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </MusingsLayout>
  );
}
