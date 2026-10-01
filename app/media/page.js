import JsonLd from "../components/JsonLd";
import { createPageMetadata } from "../../lib/metadata";
import { createCollectionJsonLd } from "../../lib/structured-data";

const description =
  "A collection of links, images, and other things worth keeping, curated by Yanqi Wang.";

export const metadata = createPageMetadata({
  title: "Media",
  description,
  path: "/media",
});

export default function MediaPage() {
  const jsonLd = createCollectionJsonLd({
    name: "Media",
    description,
    path: "/media",
  });

  return (
    <main className="page shell">
      <JsonLd data={jsonLd} />
      <header className="page-header">
        <h1>Media</h1>
      </header>
      <div className="empty-state">
        <p>A collection of links, images, and other things worth keeping.</p>
      </div>
    </main>
  );
}
