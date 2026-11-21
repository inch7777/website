// Runs before `next build`. Hosts such as Vercel clone only the latest few
// commits, so every post would look as if it was first posted in the oldest
// commit they fetched. This pulls the full history from GitHub so
// lib/git-dates.js can find when each post was first posted and last edited.
// It never fails the build: without history the dates are just less exact.

import { execFileSync } from "node:child_process";

const repository = "https://github.com/inch7777/website.git";

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

try {
  if (git("rev-parse", "--is-shallow-repository") !== "true") process.exit(0);

  console.log("Shallow clone: fetching full git history from GitHub for post dates…");
  try {
    git("fetch", "--unshallow", "--quiet", "origin");
  } catch {
    // The host's origin may be missing or need credentials; the repository is public.
    git("fetch", "--unshallow", "--quiet", repository);
  }
  console.log("Fetched full git history.");
} catch (error) {
  console.warn(`Could not fetch full git history; post dates may be wrong. ${error.stderr || error.message}`);
}
