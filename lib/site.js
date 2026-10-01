const url = process.env.NEXT_PUBLIC_SITE_URL || "https://yanqiw.com";

export const site = {
  name: "Yanqi Wang",
  description:
    "The personal website of Yanqi Wang, a student from China at UWC Red Cross Nordic in Norway, featuring writing on philosophy, politics, mathematics, school, and life.",
  shortDescription:
    "Student and writer interested in philosophy, politics, mathematics, school, and life.",
  url: url.replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  socialImageAlt:
    "Yanqi Wang, student and writer interested in philosophy, politics, and mathematics",
  keywords: [
    "Yanqi Wang",
    "UWC Red Cross Nordic",
    "philosophy",
    "politics",
    "mathematics",
    "student writing",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}
