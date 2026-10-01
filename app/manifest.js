import { site } from "../lib/site";

export default function manifest() {
  return {
    name: "Yanqi Wang",
    short_name: "Yanqi Wang",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
