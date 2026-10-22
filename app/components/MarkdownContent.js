import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import {
  markdownSanitizeSchema,
  preprocessObsidianMarkdown,
  remarkObsidianCallouts,
} from "../../lib/markdown";

export default function MarkdownContent({ content, href }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkObsidianCallouts]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeSanitize, markdownSanitizeSchema],
        [rehypeKatex, { strict: false, throwOnError: false }],
        [rehypeHighlight, { detect: false }],
        rehypeSlug,
      ]}
    >
      {preprocessObsidianMarkdown(content, href)}
    </ReactMarkdown>
  );
}
