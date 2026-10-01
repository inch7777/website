import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import JsonLd from "./components/JsonLd";
import portraitImage from "../photo.jpeg";
import { absoluteUrl, site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Yanqi Wang | Student and Writer",
    template: "%s | Yanqi Wang",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: site.keywords,
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    title: "Yanqi Wang | Student and Writer",
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanqi Wang | Student and Writer",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const portraitUrl = absoluteUrl(portraitImage.src);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: portraitUrl,
        description: site.shortDescription,
        nationality: { "@type": "Country", name: "China" },
        affiliation: {
          "@type": "EducationalOrganization",
          name: "UWC Red Cross Nordic",
          url: "https://uwcrcn.no/",
        },
        knowsAbout: ["Philosophy", "Politics", "Mathematics"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.language,
        author: { "@id": `${site.url}/#person` },
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={jsonLd} />
        <div className="site-wrap">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
