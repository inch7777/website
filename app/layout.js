import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Yanqi Wang | Student at UWC RCN",
    template: "%s | Yanqi Wang",
  },
  description:
    "Yanqi Wang is a student from China at UWC Red Cross Nordic in Norway.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrap">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
