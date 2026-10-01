import Image from "next/image";
import JsonLd from "./components/JsonLd";
import portraitImage from "../photo.jpeg";
import { absoluteUrl, site } from "../lib/site";

export const metadata = {
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile-page`,
    url: site.url,
    name: "About Yanqi Wang",
    description: site.description,
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@id": `${site.url}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      contentUrl: absoluteUrl(portraitImage.src),
      caption: "Yanqi Wang in Flekke, Norway",
    },
  };

  return (
      <main>
        <JsonLd data={jsonLd} />
        <section className="hero shell" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <h1 id="intro-heading">Yanqi Wang</h1>
            <p className="lede">
              I am a student from China, currently studying at{" "}
              <a href="https://uwcrcn.no/" target="_blank" rel="noreferrer">
                UWC Red Cross Nordic <Arrow />
              </a>
              , in Flekke, Norway.
            </p>
            <p className="intro">
              I am interested in how ideas shape the world around us. Here, I
              share occasional notes on philosophy, politics, mathematics,
              and things I find worth keeping.
            </p>
            <p className="hero-links">
              <a href="/blog">Blog</a>
              <span aria-hidden="true"> · </span>
              <a href="/musings">Musings</a>
            </p>
          </div>

          <figure className="portrait">
            <Image
              className="portrait-image"
              src={portraitImage}
              alt="Yanqi Wang outdoors under a blue sky"
              fill
              sizes="(max-width: 720px) min(360px, calc(100vw - 36px)), 320px"
              placeholder="blur"
              fetchPriority="high"
            />
            <figcaption className="portrait-caption">Flekke, Norway</figcaption>
          </figure>
        </section>
      </main>
  );
}
