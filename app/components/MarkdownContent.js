import ReactMarkdown from "react-markdown";
import {
  preprocessObsidianMarkdown,
  rehypePlugins,
  remarkPlugins,
} from "../../lib/markdown-pipeline";

export default function MarkdownContent({ content, href }) {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins}>
      {preprocessObsidianMarkdown(content, href)}
    </ReactMarkdown>
  );
}
