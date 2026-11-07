// A filename can be used as a URL segment when every character is a letter,
// number, hyphen, or underscore. Spaces and other punctuation are not.
const safeSlug = /^[\p{L}\p{N}_-]+$/u;

export function toSlug(value) {
  const stem = String(value).trim();
  if (safeSlug.test(stem)) return stem;

  const slug = stem
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "post";
}
