import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

// Reads the whole git history once and works out, for every file that exists
// now, when it was first added and when it was last changed. Renames and
// moves are followed, so moving a post into a folder keeps its original date.
// So is uploading a post into a folder and deleting the old copy later.
//
// On a build server the clone may be shallow; scripts/fetch-git-history.mjs
// fetches the full history from GitHub before `next build` so these dates
// are the real ones.

let history;

function readHistory() {
  if (history) return history;
  history = new Map();

  let output;
  try {
    output = execFileSync(
      "git",
      ["-c", "core.quotePath=false", "log", "-M", "-C", "--find-copies-harder", "--name-status", "-z", "--format=%x01%aI"],
      { cwd: process.cwd(), encoding: "utf8", maxBuffer: 256 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] },
    );
  } catch {
    // Git history may be unavailable in an exported source tree.
    return history;
  }

  // Maps a path as it was named in an older commit to the files it became.
  const currentNames = new Map();
  const namesOf = (file) => currentNames.get(file) ?? [file];
  const born = new Set();

  // Commits come newest first.
  for (const chunk of output.split("\x01")) {
    if (!chunk) continue;
    const [date, ...tokens] = chunk.split("\0");
    for (let index = 0; index < tokens.length;) {
      const status = tokens[index].trim();
      if (!status) { index += 1; continue; }

      if (status.startsWith("R") || status.startsWith("C")) {
        const [from, to] = [tokens[index + 1], tokens[index + 2]];
        index += 3;
        const names = namesOf(to).filter((name) => !born.has(name));
        names.forEach((name) => record(name, date));
        currentNames.delete(to);
        // A copy whose source still exists is a new file that happens to match
        // an old one (often a placeholder such as .gitkeep), so it starts here.
        // A copy whose source was deleted later was a move done in two steps.
        if (status.startsWith("C") && fs.existsSync(path.join(process.cwd(), from))) {
          names.forEach((name) => born.add(name));
          continue;
        }
        // Earlier commits to the source are history of these files too.
        currentNames.set(from, names);
        continue;
      }

      const file = tokens[index + 1];
      index += 2;
      for (const name of namesOf(file)) {
        record(name, date);
        if (status === "A") born.add(name);
      }
      if (status === "A") currentNames.delete(file);
    }
  }

  function record(name, date) {
    if (born.has(name)) return;
    const entry = history.get(name);
    if (entry) entry.createdAt = date;
    else history.set(name, { createdAt: date, updatedAt: date });
  }

  // Deleted files would otherwise count towards the dates of their folder.
  for (const name of history.keys()) {
    if (!fs.existsSync(path.join(process.cwd(), name))) history.delete(name);
  }

  return history;
}

// Returns { createdAt, updatedAt } as ISO timestamps for a file, or for a
// folder (its oldest and newest file), or undefined when git doesn't know it.
export function getGitDates(absolutePath) {
  const relative = path.relative(process.cwd(), absolutePath).split(path.sep).join("/");
  const entries = readHistory();
  const exact = entries.get(relative);
  if (exact) return exact;

  const prefix = `${relative}/`;
  let result;
  for (const [file, dates] of entries) {
    if (!file.startsWith(prefix)) continue;
    if (!result) result = { ...dates };
    else {
      if (Date.parse(dates.createdAt) < Date.parse(result.createdAt)) result.createdAt = dates.createdAt;
      if (Date.parse(dates.updatedAt) > Date.parse(result.updatedAt)) result.updatedAt = dates.updatedAt;
    }
  }
  return result;
}
