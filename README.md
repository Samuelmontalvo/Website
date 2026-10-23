# Samuel Montalvo — Personalized Exercise Medicine

Source for [samuelmontalvo.com](https://www.samuelmontalvo.com/), Samuel
Montalvo's bilingual research profile and tools portfolio.

The site includes English and Spanish pages, research areas, software projects,
selected papers, the publication record, education and service, and downloadable
CVs in both languages.

The October 23, 2026 design refresh uses a restrained white, gray, and Stanford
cardinal palette, with a responsive introduction and interactive research and
workflow maps. The maps describe the relationships between research activities;
they do not imply that every project runs through one automated pipeline.

## Run locally

Requires Node.js **22.13.0 or newer** and npm.

```bash
git clone https://github.com/Samuelmontalvo/Website.git
cd Website
npm ci
npm run dev
```

Use the local URL printed by the development server. The English page is at `/`
and the Spanish page is at `/es`.

```bash
npm run build  # Build the production application
npm test       # Build, then test both languages, metadata, and required assets
npm run start  # Serve an existing production build locally
```

The existing public pages do not require application secrets or a database.

## Source layout

| Location | Purpose |
| --- | --- |
| `app/page.tsx`, `app/es/page.tsx` | English profile and Spanish entry point |
| `app/project-areas.tsx` | Research areas and highlights |
| `app/selected-papers.tsx` | Selected papers and visual summaries |
| `app/publications-data.ts` | Publication records used by both languages |
| `app/globals.css`, `app/layout.tsx` | Styling, page layout, and metadata |
| `app/research-networks.tsx`, `app/research-networks.css` | Bilingual interactive research and workflow maps |
| `app/mobile-menu.tsx` | Mobile navigation with selection and Escape dismissal |
| `public/` | Portraits, project images, paper figures, and bilingual CV PDFs |
| `tests/rendered-html.test.mjs` | Server-rendered page and asset checks |
| `scripts/generate-publications-data.mjs` | Optional publication-data generation from a separately supplied CV Markdown file |
| `worker/`, `build/`, `vite.config.ts` | Vinext/Vite and Cloudflare Workers integration |
| `.openai/hosting.json` | Existing Sites project identity and optional storage bindings |

The stack uses React, TypeScript, Vinext, Vite, and Cloudflare Workers. Optional
ChatGPT authentication helpers and D1/Drizzle examples are retained from the
Sites source; the public profile does not require sign-in.

The generated publication data and final CV PDFs are included. The separate
academic-CV authoring project is not required to build or run this website.

## Hosting and repository history

The production site is hosted by **Sites** at
[www.samuelmontalvo.com](https://www.samuelmontalvo.com/). This GitHub repository
stores its source and history. Pushing here does not, by itself, publish a new
Sites version or change the domain.

The current site was imported on **October 20, 2026**, from saved **Sites
Version 10**, source commit
`3c053b77081006dbf8e5b9e12a112e227fa5b67d`. All 11 source commits leading to that
version are preserved alongside the original GitHub history. Later commits
include the October academic update and the current design refresh.

The former Hugo/blogdown site remains available at tag
[`legacy-hugo-2026-10-20`](https://github.com/Samuelmontalvo/Website/tree/legacy-hugo-2026-10-20),
pointing to commit `108b2a909cef2d3e0225d169d08df093199edb24`. The default branch
remains `master`.

Dependencies, generated build output, runtime state, and environment files are
excluded by `.gitignore`. The lockfile is committed for reproducible installs.
Figure attribution and source links are retained in the site; inclusion in this
repository does not grant additional rights to third-party material.
