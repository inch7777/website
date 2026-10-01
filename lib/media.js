import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MEDIA_DIRECTORY = path.join(process.cwd(), "public", "media");

const IMAGE_TYPES = new Map([
  [".avif", "image/avif"],
  [".gif", "image/gif"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

const VIDEO_TYPES = new Map([
  [".m4v", "video/mp4"],
  [".mp4", "video/mp4"],
  [".ogv", "video/ogg"],
  [".webm", "video/webm"],
]);

const AUDIO_TYPES = new Map([
  [".flac", "audio/flac"],
  [".m4a", "audio/mp4"],
  [".mp3", "audio/mpeg"],
  [".oga", "audio/ogg"],
  [".ogg", "audio/ogg"],
  [".wav", "audio/wav"],
]);

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

async function walk(directory, prefix = "") {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = await Promise.all(
    entries
      .filter((entry) => !entry.name.startsWith("."))
      .map(async (entry) => {
        const relativePath = path.posix.join(prefix, entry.name);
        const absolutePath = path.join(directory, entry.name);

        return entry.isDirectory()
          ? walk(absolutePath, relativePath)
          : [{ absolutePath, relativePath }];
      }),
  );

  return files.flat();
}

function publicUrl(relativePath) {
  return `/media/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

function detailsFromFilename(relativePath) {
  const extension = path.extname(relativePath);
  const filename = path.basename(relativePath, extension);
  const dateMatch = filename.match(/^(\d{4})[-_](\d{2})[-_](\d{2})(?:[-_ ]+|$)/);
  const parsedDate = dateMatch
    ? new Date(`${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}T00:00:00Z`)
    : null;
  const dateValue = dateMatch
    ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`
    : null;
  const validDate =
    parsedDate &&
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === dateValue;
  const name = filename
    .replace(/^(\d{4})[-_](\d{2})[-_](\d{2})(?:[-_ ]+|$)/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    date: validDate ? dateFormatter.format(parsedDate) : null,
    dateValue: validDate ? dateValue : null,
    title: name ? name.charAt(0).toUpperCase() + name.slice(1) : "Untitled",
  };
}

async function imageDimensions(absolutePath) {
  try {
    const { width, height, orientation } = await sharp(absolutePath).metadata();
    if (!width || !height) return { width: 1600, height: 1200 };

    const rotated = orientation >= 5 && orientation <= 8;

    return {
      width: rotated ? height : width,
      height: rotated ? width : height,
    };
  } catch {
    return { width: 1600, height: 1200 };
  }
}

function findSidecar(files, video, suffix, extensions) {
  const base = video.relativePath.slice(0, -path.extname(video.relativePath).length);
  const candidates = extensions.map((extension) => `${base}${suffix}${extension}`);
  const match = files.find((file) =>
    candidates.some(
      (candidate) => candidate.toLowerCase() === file.relativePath.toLowerCase(),
    ),
  );

  return match ? publicUrl(match.relativePath) : null;
}

export async function getMediaItems() {
  const files = await walk(MEDIA_DIRECTORY);
  const items = await Promise.all(
    files.map(async (file) => {
      const extension = path.extname(file.relativePath).toLowerCase();
      const lowerPath = file.relativePath.toLowerCase();

      if (lowerPath.includes(".poster.") || lowerPath.endsWith(".vtt")) return null;

      const shared = {
        ...detailsFromFilename(file.relativePath),
        id: file.relativePath,
        src: publicUrl(file.relativePath),
      };

      if (IMAGE_TYPES.has(extension)) {
        return {
          ...shared,
          type: "image",
          mimeType: IMAGE_TYPES.get(extension),
          ...(await imageDimensions(file.absolutePath)),
        };
      }

      if (VIDEO_TYPES.has(extension)) {
        return {
          ...shared,
          type: "video",
          mimeType: VIDEO_TYPES.get(extension),
          poster: findSidecar(files, file, ".poster", [...IMAGE_TYPES.keys()]),
          captions: findSidecar(files, file, "", [".vtt"]),
        };
      }

      if (AUDIO_TYPES.has(extension)) {
        return { ...shared, type: "audio", mimeType: AUDIO_TYPES.get(extension) };
      }

      return null;
    }),
  );

  return items
    .filter(Boolean)
    .sort((a, b) =>
      (b.dateValue || "").localeCompare(a.dateValue || "") ||
      b.id.localeCompare(a.id, undefined, { numeric: true }),
    );
}
