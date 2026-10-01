import { site } from "./site";

export function createPageMetadata({ title, description, path, type = "website" }) {
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      type,
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: site.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: site.socialImageAlt,
        },
      ],
    },
  };
}
