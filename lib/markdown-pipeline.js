import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import {
  markdownSanitizeSchema,
  remarkDisplayMath,
  remarkObsidianCallouts,
} from "./markdown.js";
import rehypeStructure from "./rehype-structure.js";

// Shared by the site and by scripts/check-content.mjs, so the check renders
// exactly what is published.
export const remarkPlugins = [
  remarkGfm,
  remarkMath,
  remarkBreaks,
  remarkDisplayMath,
  remarkObsidianCallouts,
];

export const rehypePlugins = [
  rehypeRaw,
  [rehypeSanitize, markdownSanitizeSchema],
  rehypeSlug,
  rehypeStructure,
  [rehypeKatex, { strict: false, throwOnError: false }],
  [rehypeHighlight, { detect: false }],
];

export { preprocessObsidianMarkdown } from "./markdown.js";
