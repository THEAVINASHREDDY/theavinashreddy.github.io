import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { copyFile } from 'node:fs/promises'

/**
 * Strips unpublished (draft) posts from posts.json at build time so they
 * never ship in the production bundle, even if the JSON file contains them.
 * In dev mode, drafts are kept so authors can preview them locally.
 */
function stripDraftPosts() {
  return {
    name: 'strip-draft-posts',
    transform(code, id) {
      if (!id.endsWith('posts.json') || this.environment?.mode === 'development') return null;
      try {
        const data = JSON.parse(code);
        if (!Array.isArray(data.posts)) return null;
        data.posts = data.posts.filter(p => p.published);
        data.includeDrafts = false;
        return { code: JSON.stringify(data), map: null };
      } catch {
        return null;
      }
    }
  };
}

/**
 * Copies index.html to 404.html after build so GitHub Pages serves the SPA
 * for unknown routes, allowing React Router to handle them client-side.
 */
function ghPages404() {
  return {
    name: 'gh-pages-404',
    closeBundle: async () => {
      const outDir = resolve('dist');
      await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [stripDraftPosts(), react(), ghPages404()],
})
