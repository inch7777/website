// Gives mathematical notes their structure without any markup beyond what
// Obsidian already writes:
//
// - A paragraph that opens with a bold label such as **Theorem 3.4.** or
//   **Definition 1.2 (Subset).** is marked as a statement, gets an id from
//   its number, and its label becomes a link to itself.
// - A paragraph that opens with "Proof", "**Proof.**", or `$Proof:$` starts
//   a proof. The proof runs until the next statement, heading, rule, or
//   proof, and ends with ∎. A proof whose opening paragraph is highlighted
//   continues only while the paragraphs that follow are highlighted too.
// - Mentions such as "by Theorem 3.10" or "definition1.3" link to that
//   statement when it is on the same page.
// - Section headings get a link to themselves, and a page with three or more
//   sections gets an "On this page" list.
//
// Runs after rehype-slug (headings need ids) and before rehype-katex, so math
// is still `code.language-math` here.

const statementKinds = {
  theorem: "theorem",
  lemma: "theorem",
  corollary: "theorem",
  proposition: "theorem",
  claim: "theorem",
  conjecture: "theorem",
  fact: "theorem",
  definition: "definition",
  axiom: "definition",
  notation: "definition",
  exercise: "exercise",
  problem: "exercise",
  question: "exercise",
  example: "example",
  examples: "example",
  remark: "remark",
  note: "remark",
  warning: "remark",
  commentary: "remark",
  prerequisites: "remark",
};

const statementLabel = new RegExp(
  `^\\s*(${Object.keys(statementKinds).join("|")})s?\\b[\\s.:]*(\\d+(?:\\.\\d+)*'?)?`,
  "i",
);

const referencePattern = new RegExp(
  `\\b(?:${Object.keys(statementKinds).join("|")})s?\\s*(\\d+(?:\\.\\d+)+'?)`,
  "gi",
);

const blockStops = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "hr"]);
const noReferences = new Set(["a", "code", "pre", "h1", "h2", "h3", "h4", "h5", "h6", "nav"]);

export default function rehypeStructure() {
  return (tree) => {
    const ids = new Set();
    collectIds(tree, ids);

    const statementIds = new Set();
    groupBlocks(tree, ids, statementIds);
    linkReferences(tree, statementIds, false);
    addContents(tree);
    addHeadingAnchors(tree);
  };
}

// Statements and proofs ------------------------------------------------------

function groupBlocks(parent, ids, statementIds) {
  if (!Array.isArray(parent.children)) return;

  for (const child of parent.children) {
    if (child.type === "element" && (child.tagName === "aside" || child.tagName === "blockquote")) {
      groupBlocks(child, ids, statementIds);
    }
  }

  const children = parent.children;
  for (let index = 0; index < children.length; index += 1) {
    const node = children[index];
    if (!isElement(node, "p")) continue;

    const statement = statementOf(node);
    if (statement) {
      markStatement(node, statement, ids, statementIds);
      continue;
    }

    if (!startsProof(node)) continue;

    const highlighted = isFullyHighlighted(node);
    let end = index + 1;
    while (end < children.length) {
      const next = children[end];
      if (next.type === "text" && !next.value.trim()) {
        end += 1;
        continue;
      }
      if (next.type !== "element") break;
      if (blockStops.has(next.tagName)) break;
      if (next.tagName === "p" && (statementOf(next) || startsProof(next))) break;
      if (highlighted && !isFullyHighlighted(next)) break;
      end += 1;
    }

    // Leave trailing whitespace outside the proof.
    while (end > index + 1 && children[end - 1].type === "text") end -= 1;

    const body = children.slice(index, end);
    labelProof(node);
    addEndMark(body);
    children.splice(index, end - index, {
      type: "element",
      tagName: "div",
      properties: { className: ["proof"] },
      children: body,
    });
  }
}

function statementOf(paragraph) {
  const lead = leadingNode(paragraph);
  if (!isElement(lead, "strong")) return null;
  const match = textOf(lead).match(statementLabel);
  if (!match) return null;
  return { lead, kind: match[1].toLowerCase(), number: match[2] };
}

function markStatement(paragraph, { lead, kind, number }, ids, statementIds) {
  paragraph.properties = {
    ...paragraph.properties,
    className: ["statement", `statement-${statementKinds[kind]}`],
  };
  if (!number) return;

  const id = statementId(number);
  if (ids.has(id)) return;
  ids.add(id);
  statementIds.add(id);
  paragraph.properties.id = id;
  lead.children = [{
    type: "element",
    tagName: "a",
    properties: { className: ["statement-link"], href: `#${id}` },
    children: lead.children,
  }];
}

function startsProof(paragraph) {
  const lead = leadingNode(paragraph);
  if (!lead) return false;
  if (lead.type === "text") return /^\s*proofs?\b/i.test(lead.value);
  if (isElement(lead, "code")) return /^\s*proof\s*[:.]?\s*$/i.test(textOf(lead));
  if (isElement(lead, "strong") || isElement(lead, "em")) return /^\s*proofs?\b/i.test(textOf(lead));
  return false;
}

// Whether the opening word is typed as `$Proof:$`, `**Proof.**` or plain
// "Proof:", it is shown the same way: an italic label.
function labelProof(paragraph) {
  const parent = leadingParent(paragraph);
  const index = parent.children.findIndex((child) => child.type !== "text" || child.value.trim());
  const lead = parent.children[index];
  const label = (text) => ({
    type: "element",
    tagName: "em",
    properties: { className: ["proof-label"] },
    children: [{ type: "text", value: text }],
  });

  if (lead.type === "text") {
    const match = lead.value.match(/^(\s*)(proofs?\b[^\s]*)/i);
    const rest = lead.value.slice(match[0].length);
    parent.children.splice(index, 1, label(match[2]), ...(rest ? [{ type: "text", value: rest }] : []));
  } else if (isElement(lead, "code")) {
    parent.children[index] = label(textOf(lead).trim());
  } else {
    lead.properties = { ...lead.properties, className: ["proof-label"] };
  }
}

function leadingParent(node) {
  for (const child of node.children || []) {
    if (child.type === "text" && !child.value.trim()) continue;
    if (isElement(child, "mark")) return leadingParent(child);
    return node;
  }
  return node;
}

// The first piece of content in a paragraph, looking inside highlights.
function leadingNode(node) {
  for (const child of node.children || []) {
    if (child.type === "text" && !child.value.trim()) continue;
    if (isElement(child, "mark")) return leadingNode(child);
    return child;
  }
  return null;
}

function isFullyHighlighted(node) {
  if (!isElement(node, "p")) return false;
  let hasMark = false;
  for (const child of node.children) {
    if (child.type === "text" && !child.value.trim()) continue;
    if (isElement(child, "br")) continue;
    if (!isElement(child, "mark")) return false;
    hasMark = true;
  }
  return hasMark;
}

function addEndMark(body) {
  const mark = {
    type: "element",
    tagName: "span",
    properties: { className: ["qed"], role: "img", ariaLabel: "End of proof" },
    children: [{ type: "text", value: "∎" }],
  };
  const last = [...body].reverse().find((node) => node.type === "element");
  if (isElement(last, "p")) {
    last.children.push(mark);
  } else {
    body.push({
      type: "element",
      tagName: "p",
      properties: { className: ["qed-line"] },
      children: [mark],
    });
  }
}

function statementId(number) {
  return `statement-${number.replace(/'/g, "-prime").replace(/\./g, "-")}`;
}

// Cross-references -----------------------------------------------------------

function linkReferences(node, statementIds, skip) {
  if (!Array.isArray(node.children)) return;
  const skipChildren = skip
    || (node.type === "element" && noReferences.has(node.tagName))
    || (node.type === "element" && node.tagName === "strong" && hasStatementLink(node));

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    if (child.type === "text" && !skipChildren) {
      const replacement = referenceNodes(child.value, statementIds);
      if (replacement) {
        node.children.splice(index, 1, ...replacement);
        index += replacement.length - 1;
      }
    } else if (child.type === "element") {
      linkReferences(child, statementIds, skipChildren);
    }
  }
}

function hasStatementLink(node) {
  return node.children.some((child) => isElement(child, "a")
    && child.properties?.className?.includes("statement-link"));
}

function referenceNodes(value, statementIds) {
  const nodes = [];
  let lastIndex = 0;

  for (const match of value.matchAll(referencePattern)) {
    const id = statementId(match[1]);
    const targetId = statementIds.has(id) ? id : statementIds.has(id.replace(/-prime$/, ""))
      ? id.replace(/-prime$/, "")
      : null;
    if (!targetId) continue;

    if (match.index > lastIndex) nodes.push({ type: "text", value: value.slice(lastIndex, match.index) });
    nodes.push({
      type: "element",
      tagName: "a",
      properties: { className: ["statement-ref"], href: `#${targetId}` },
      children: [{ type: "text", value: match[0] }],
    });
    lastIndex = match.index + match[0].length;
  }

  if (!nodes.length) return null;
  if (lastIndex < value.length) nodes.push({ type: "text", value: value.slice(lastIndex) });
  return nodes;
}

// Headings -------------------------------------------------------------------

function addContents(tree) {
  const headings = tree.children.filter((node) => isElement(node, "h2") && node.properties?.id);
  if (headings.length < 3) return;

  tree.children.unshift({
    type: "element",
    tagName: "nav",
    properties: { className: ["toc"], ariaLabel: "On this page" },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: { className: ["toc-title"] },
        children: [{ type: "text", value: "On this page" }],
      },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: headings.map((heading) => ({
          type: "element",
          tagName: "li",
          properties: {},
          children: [{
            type: "element",
            tagName: "a",
            properties: { href: `#${heading.properties.id}` },
            children: plainCopy(heading.children),
          }],
        })),
      },
    ],
  });
}

function addHeadingAnchors(tree) {
  for (const node of tree.children) {
    if (!(isElement(node, "h2") || isElement(node, "h3")) || !node.properties?.id) continue;
    node.children.push({
      type: "element",
      tagName: "a",
      properties: {
        className: ["heading-anchor"],
        href: `#${node.properties.id}`,
        ariaLabel: "Link to this section",
      },
      children: [{ type: "text", value: "#" }],
    });
  }
}

// A copy of heading content for the contents list: highlights and links are
// unwrapped, math is kept so KaTeX still renders it.
function plainCopy(children) {
  return children.flatMap((child) => {
    if (child.type === "text") return [{ ...child }];
    if (child.type !== "element") return [];
    if (child.tagName === "code") {
      return [{ ...child, properties: { ...child.properties }, children: plainCopy(child.children) }];
    }
    if (["mark", "a", "span", "strong", "em"].includes(child.tagName)) return plainCopy(child.children);
    return [];
  });
}

// Helpers --------------------------------------------------------------------

function collectIds(node, ids) {
  if (node.properties?.id) ids.add(String(node.properties.id));
  for (const child of node.children || []) collectIds(child, ids);
}

function isElement(node, tagName) {
  return node?.type === "element" && node.tagName === tagName;
}

function textOf(node) {
  if (node.type === "text") return node.value;
  return (node.children || []).map(textOf).join("");
}
