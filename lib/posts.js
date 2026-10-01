const posts = [];

const topicLabels = {
  philosophy: "Philosophy",
  politics: "Politics",
  mathematics: "Mathematics",
};

function validatePosts(entries) {
  const slugs = new Set();

  for (const post of entries) {
    if (!post.slug || !post.title || !post.description || !post.publishedAt) {
      throw new Error(`Post metadata is incomplete: ${post.slug || "unknown post"}`);
    }

    if (slugs.has(post.slug)) {
      throw new Error(`Duplicate post slug: ${post.slug}`);
    }

    for (const topic of post.topics) {
      if (!topicLabels[topic]) {
        throw new Error(`Unknown topic "${topic}" in post "${post.slug}"`);
      }
    }

    slugs.add(post.slug);
  }
}

validatePosts(posts);

function newestFirst(a, b) {
  return b.publishedAt.localeCompare(a.publishedAt);
}

export function getPublishedPosts() {
  return posts.filter((post) => !post.draft).sort(newestFirst);
}

export function getPost(slug) {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function getPostsByTopic(topic) {
  return getPublishedPosts().filter((post) => post.topics.includes(topic));
}

export function getAdjacentPosts(slug) {
  const publishedPosts = getPublishedPosts();
  const index = publishedPosts.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? publishedPosts[index - 1] : null,
    older: index >= 0 ? publishedPosts[index + 1] || null : null,
  };
}

export function getTopicLabel(topic) {
  return topicLabels[topic] || topic;
}

export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
