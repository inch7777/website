import { absoluteUrl, site } from "./site";

export function createCollectionJsonLd({
  name,
  description,
  path,
  items = [],
  type = "CollectionPage",
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#collection`,
    url,
    name,
    description,
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#website` },
    author: { "@id": `${site.url}/#person` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}
