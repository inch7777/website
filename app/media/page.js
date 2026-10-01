import Image from "next/image";
import JsonLd from "../components/JsonLd";
import { getMediaItems } from "../../lib/media";
import { createPageMetadata } from "../../lib/metadata";
import { createCollectionJsonLd } from "../../lib/structured-data";

const description =
  "A collection of photographs, moving images, and sounds kept by Yanqi Wang.";

export const metadata = createPageMetadata({
  title: "Media",
  description,
  path: "/media",
});

function MediaCaption({ item }) {
  return (
    <figcaption className="media-caption">
      <span>{item.title}</span>
      {item.date && <time dateTime={item.dateValue}>{item.date}</time>}
    </figcaption>
  );
}

function MediaItem({ item, featured }) {
  if (item.type === "image") {
    return (
      <figure className="media-item">
        <Image
          className="media-image"
          src={item.src}
          alt={item.title}
          width={item.width}
          height={item.height}
          sizes="(max-width: 720px) calc(100vw - 36px), (max-width: 1100px) calc(50vw - 36px), 500px"
          fetchPriority={featured ? "high" : undefined}
          unoptimized={
            item.mimeType === "image/svg+xml" || item.mimeType === "image/gif"
          }
        />
        <MediaCaption item={item} />
      </figure>
    );
  }

  if (item.type === "video") {
    return (
      <figure className="media-item">
        <video
          className="media-video"
          controls
          playsInline
          preload="none"
          poster={item.poster || undefined}
          aria-label={item.title}
        >
          <source src={item.src} type={item.mimeType} />
          {item.captions && (
            <track
              default
              src={item.captions}
              kind="captions"
              srcLang="en"
              label="English"
            />
          )}
          Your browser does not support embedded videos.
        </video>
        <MediaCaption item={item} />
      </figure>
    );
  }

  return (
    <figure className="media-item media-audio-item">
      <div className="media-audio-heading">
        <span aria-hidden="true">Sound</span>
        <strong>{item.title}</strong>
      </div>
      <audio
        className="media-audio"
        controls
        preload="none"
        aria-label={item.title}
      >
        <source src={item.src} type={item.mimeType} />
        Your browser does not support embedded audio.
      </audio>
      {item.date && (
        <figcaption className="media-caption media-audio-caption">
          <time dateTime={item.dateValue}>{item.date}</time>
        </figcaption>
      )}
    </figure>
  );
}

export default async function MediaPage() {
  const items = await getMediaItems();
  const jsonLd = createCollectionJsonLd({
    name: "Media",
    description,
    path: "/media",
  });

  return (
    <main className="media-page shell">
      <JsonLd data={jsonLd} />
      <header className="media-header">
        <h1>Media</h1>
        <p>{description}</p>
        {items.length > 0 && (
          <span className="media-count">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </span>
        )}
      </header>
      {items.length > 0 ? (
        <section className="media-grid" aria-label="Media collection">
          {items.map((item, index) => (
            <MediaItem key={item.id} item={item} featured={index < 2} />
          ))}
        </section>
      ) : (
        <div className="media-empty">
          <p>The collection is quiet for now.</p>
          <span>Photographs, films, and recordings will appear here.</span>
        </div>
      )}
    </main>
  );
}
