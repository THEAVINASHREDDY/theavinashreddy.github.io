import postsData from '../data/posts.json';

// In production, drafts are already stripped by the Vite plugin (see vite.config.js).
// In dev, optionally show drafts when VITE_SHOW_DRAFTS=true.
const SHOW_DRAFTS = import.meta.env.DEV && import.meta.env.VITE_SHOW_DRAFTS === 'true';

export function getVisiblePosts() {
  const posts = postsData.posts || [];
  return posts.filter((post) => post.published || SHOW_DRAFTS);
}

export function getVisiblePostBySlug(slug) {
  return getVisiblePosts().find((post) => post.slug === slug);
}
