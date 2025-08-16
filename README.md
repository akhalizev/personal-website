# Personal Website (Astro + Tailwind)

A modern, macOS‑inspired portfolio built with Astro, Tailwind CSS, and optional React islands. Includes a project showcase, experiments, themed UI components, and an in‑progress admin dashboard backed by in‑browser storage.

## What’s inside

- Astro 5 with Tailwind and MDX integrations
- Class-based dark mode with a `DarkModeToggle`
- macOS-style components: Dock, Window, Tabs, and more
- Home page with grid/list view toggle (persisted in localStorage)
- Experiments section powered by structured data
- Admin dashboard scaffolding (stats, search/filters, publish/draft flags)
- Simple data layer using localStorage (no external DB yet)

## Requirements

- Node.js 18+ (LTS recommended)
- npm (or pnpm/yarn, adjust commands accordingly)

## Getting started

1. Install dependencies

```bash
npm install
```

1. Start the dev server

```bash
npm run dev
```

1. Open the site

- App: <http://localhost:4321>
- Admin (WIP): <http://localhost:4321/admin>

## Scripts

- `npm run dev` — Start Astro dev server
- `npm run build` — Build to `dist/` (static output)
- `npm run preview` — Preview the production build locally

## Project structure

```text
astro.config.mjs
package.json
public/
  favicon.svg
src/
  components/
    DarkModeToggle.astro
    Dock.astro
    ProjectCard.astro
    ProjectForm.astro
    ProjectListItem.astro
    TabsComponent.astro
    Window.astro
  layouts/
    Layout.astro
  pages/
    admin.astro
    experiments.astro
    figma-tabs-demo.astro
    index.astro
    projects.astro
    tabs-demo.astro
    test-dark-mode.astro
  types/
    index.ts
  utils/
    dataStore.ts
    experimentsData.ts
```

## Routes and features

- `/` Home
  - Hero, About, Skills, Contact
  - Projects section with grid/list toggle (persisted via `localStorage`)
  - Dock navigation to sections and pages
- `/projects` Projects listing page
- `/experiments` Experiments overview (data from `src/utils/experimentsData.ts`)
- `/admin` Admin dashboard (WIP)
  - Stats, search, filters, publish/draft/featured flags
  - Portfolio settings form (title, description, bio, custom URL)
  - Project modal/form is not implemented yet (currently a placeholder alert)
- `/tabs-demo`, `/figma-tabs-demo` UI demos
- `/test-dark-mode` Dark mode demo

## Tech notes

- Astro config integrates Tailwind, React, and MDX, with `output: 'static'` for simple static hosting
- Tailwind dark mode: `darkMode: 'class'` (toggle by adding/removing the `dark` class on `<html>`)
- Data store (`src/utils/dataStore.ts`) persists portfolio/projects to `localStorage`
  - Works in the browser; there’s no server/database by default
  - Image/file uploads are stubbed; replace with real handling if needed
- Type definitions live in `src/types`

## Customization

- Content: edit page content in `src/pages/*`
- Styling: update Tailwind config (`tailwind.config.mjs`) and component classes
- Components: reuse or extend `Dock`, `Window`, `TabsComponent`, etc.
- Experiments: add/edit items in `src/utils/experimentsData.ts`

## Deployment

This site builds to static assets (`dist/`). Deploy the `dist/` folder to any static host (Netlify, Vercel static, GitHub Pages, Cloudflare Pages, etc.).

```bash
npm run build
npm run preview # optional local smoke test
```

## Current limitations (WIP)

- Project creation/edit modal in `/admin` is not implemented yet
- File/image uploads are placeholders
- Contact info capture is minimal; no email backend
- Home projects are sample data; hook up to the store or a CMS/backend as next steps

## Roadmap ideas

- Implement full CRUD modal/forms in Admin with validation
- Replace localStorage with a real backend or CMS (Supabase, Firebase, etc.)
- Drive homepage/projects from the store instead of samples
- Add basic unit tests and accessibility checks
- Optional: image optimization pipeline and upload handling

## Assets / Images Structure

Place images inside `public/images` following this convention:

```text
public/
  images/
    testimonials/   # Headshots for testimonials (e.g. jane.png, john.webp)
    projects/       # Each project can have its own subfolder
      project-slug/
        cover.png   # Primary cover image
        screen-1.png
        screen-2.png
    avatars/        # (Optional) main profile or alternate avatars
```

Guidelines:

- Prefer `.webp` where possible; fall back to `.png`.
- Keep testimonial headshots ~256x256 (square) for consistency.
- Name project folder with a URL-friendly slug (e.g. `design-system-dashboard`).
- For retina quality, you can include `@2x` versions if needed (not required yet).

### Adding / Updating Testimonials

1. Add headshot to `public/images/testimonials/`.
2. Edit `src/utils/testimonials.ts` to update name, role, quote, photo path.
3. Rebuild or refresh dev server; homepage section updates automatically.

## License

MIT (or your preferred license)
