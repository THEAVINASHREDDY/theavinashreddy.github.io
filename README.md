# theavinashreddy.github.io

Personal portfolio and blog of **Avinash Reddy** — Data Scientist, Physics Enthusiast, and Builder of Intelligent Systems.

**Live:** [theavinashreddy.github.io](https://theavinashreddy.github.io)

## Sections

- **Hero** — Animated landing with retro-grid background
- **Experience** — Professional timeline at ClickZ Media and Blenheim Chalcot
- **Atomic Skills** — Periodic-table-styled tech stack (ML, GenAI, Dev, Cloud & Ops)
- **Signal Logs** — Blog powered by Notion as a CMS
- **Contact** — Form with Cloudflare Turnstile protection, backed by a Cloudflare Worker

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19, React Router 7 |
| Build | Vite (Rolldown), Tailwind CSS 4 |
| Animations | Framer Motion |
| Blog CMS | Notion API → static JSON at build time |
| Contact Backend | Cloudflare Workers + Turnstile |
| Hosting | GitHub Pages (auto-deploy via GitHub Actions) |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Blog: Fetching Posts from Notion

Blog content lives in a Notion database. To pull the latest posts:

```bash
NOTION_TOKEN=<your-token> NOTION_DATABASE_ID=<your-db-id> npm run fetch-posts
```

This downloads images locally to `public/images/blog/` and writes `src/data/posts.json`. Drafts can be included with the `--include-drafts` flag (they are stripped from production builds automatically).

## Build & Deploy

```bash
npm run build
```

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.

## License

This project is the personal portfolio of Avinash Reddy. Source code is available for reference.
