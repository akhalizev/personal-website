# Personal Portfolio Website (Astro + Tailwind)

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.**

Modern, macOS-inspired portfolio website built with Astro 5, Tailwind CSS, and React islands. Features project showcase, experiments section, themed UI components, and admin dashboard backed by localStorage.

## Working Effectively

### Bootstrap and Build the Repository
- **CRITICAL**: Install Node.js 18+ if not available
- `npm install` — Install dependencies (takes ~60 seconds)
- `npm run build` — Build to `dist/` directory (takes ~6 seconds - NEVER CANCEL, but very fast)
- `npm run preview` — Preview production build locally (serves on port 4322 if 4321 is busy)

### Development Workflow
- **Start development**: `npm run dev` — Starts Astro dev server on http://localhost:4321
- **NEVER CANCEL**: Development server startup takes ~10 seconds max
- Build is extremely fast (~6 seconds) - no need for long timeouts, but always wait for completion

### Available Commands
- `npm run dev` — Start Astro development server
- `npm run build` — Build for production (static output to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run astro` — Access Astro CLI directly

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS perform these end-to-end validation steps after making changes:**

1. **Homepage Navigation Test**:
   - Visit http://localhost:4321/
   - Test dark mode toggle (button in bottom right)
   - Click through dock navigation (About, Projects, Skills, Experiments, Contact)
   - Verify projects grid/list view toggle works
   - Test "Git activity" flip card in Skills section

2. **Page Navigation Test**:
   - Navigate to `/experiments` page
   - Navigate to `/admin` page 
   - Test admin "New Project" button (shows placeholder alert)
   - Navigate to `/projects` page
   - Test back navigation

3. **Interactive Features Test**:
   - Test window expand/close buttons on About and Skills sections
   - Verify localStorage persistence for view mode toggle
   - Test responsive behavior at different screen sizes

4. **Git Activity Feature Test**:
   - Click "Git activity" button in Skills section
   - Verify GitHub API connection works
   - Test refresh functionality

### Build Validation
- Always build before finalizing changes: `npm run build`
- Verify no build errors or warnings
- Test preview functionality: `npm run preview`

## Project Structure and Navigation

### Key Directories
```
/src/
  components/     — Reusable Astro and React components
    DarkModeToggle.astro    — Dark mode toggle functionality
    Dock.astro              — Bottom navigation dock
    Window.astro            — macOS-style window component
    ProjectCard.astro       — Project display component
    TabsComponent.astro     — Accessible tabs implementation
  layouts/
    Layout.astro            — Main page layout
  pages/
    index.astro             — Homepage with hero, about, projects, skills
    admin.astro             — Admin dashboard (WIP)
    experiments.astro       — Experiments showcase
    projects.astro          — Projects listing
    *-demo.astro           — UI component demos
  utils/
    dataStore.ts            — localStorage-based data management
    experimentsData.ts      — Static experiments data
    personal.ts             — Personal information constants
```

### Configuration Files
- `astro.config.mjs` — Astro configuration (Tailwind, React, MDX integrations)
- `tailwind.config.mjs` — Custom macOS-style color system and utilities
- `tsconfig.json` — TypeScript configuration
- `package.json` — Dependencies and scripts

## Architecture and Technical Notes

### Tech Stack
- **Framework**: Astro 5 with static output
- **Styling**: Tailwind CSS with custom macOS-inspired design system
- **Interactivity**: React islands for dynamic components
- **TypeScript**: Full TypeScript support
- **Data**: localStorage for admin dashboard, static data for experiments

### Design System
- Uses custom `macos-*` color tokens (gray, blue, red, green, yellow, orange)
- Class-based dark mode: `darkMode: 'class'` in Tailwind config
- Toggle dark mode by adding/removing `dark` class on `<html>`
- Custom fonts: SF Pro Display system font stack

### Data Management
- **Admin Dashboard**: Uses localStorage via `src/utils/dataStore.ts`
- **Experiments**: Static data in `src/utils/experimentsData.ts` 
- **Homepage Projects**: Sample data (not connected to store yet)
- **Git Activity**: Live GitHub API integration

## Development Guidelines

### Making Changes
- **Components**: Modify `.astro` files for static components, React for interactive
- **Styling**: Use Tailwind classes with custom macOS tokens
- **Data**: Update `experimentsData.ts` for experiments, `dataStore.ts` for admin features
- **Pages**: Standard Astro page structure in `/src/pages/`

### Accessibility Requirements
- All interactive components include ARIA attributes
- Dark mode implementation maintains contrast ratios
- Tab navigation supported throughout
- Components like `TabsComponent.astro` demonstrate accessibility best practices

### Image and Asset Handling
- Static assets in `/public/` directory
- Images referenced with leading slash: `/favicon.svg`
- No image optimization pipeline currently implemented

## Common Tasks

### Repository Root Structure
```
.github/           — GitHub workflows and configurations
.vscode/           — VS Code settings (Astro extension recommended)
public/            — Static assets (favicon, etc.)
src/               — Source code
dist/              — Build output (generated)
node_modules/      — Dependencies (generated)
astro.config.mjs   — Astro configuration
package.json       — Project metadata and scripts
tailwind.config.mjs — Tailwind configuration
tsconfig.json      — TypeScript configuration
README.md          — Project documentation
CHANGELOG.md       — Version history
```

### Key Package.json Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build", 
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Troubleshooting

#### Port Conflicts
- Dev server defaults to :4321, preview auto-selects available port
- Use `--port` flag to specify different port if needed

#### Build Issues
- Ensure Node.js 18+ is installed
- Run `npm install` if dependencies are missing
- Check for TypeScript errors in console output

#### Missing Features
- **Project creation modal**: Currently shows placeholder alert in admin
- **File uploads**: Placeholder functionality only
- **Email backend**: No backend for contact form
- **Unit tests**: No test framework configured

#### GitHub API Features
- Git activity widget requires internet connection
- Uses public GitHub API (no authentication required)
- May hit rate limits with frequent requests

## Deployment

### Static Build
- Site builds to static assets in `dist/` directory
- Deploy `dist/` folder to any static host:
  - Netlify
  - Vercel Static
  - GitHub Pages
  - Cloudflare Pages
  - AWS S3 + CloudFront

### Build Command for CI/CD
```bash
npm install
npm run build
```

### Preview Before Deploy
```bash
npm run build
npm run preview  # Test locally before deployment
```

## Current Limitations

### Work in Progress Features
- Project creation/edit modal in admin dashboard (shows alert placeholder)
- File/image upload functionality (placeholders only)
- Email backend for contact form
- Homepage projects not connected to admin store (sample data)

### No Built-in Tooling
- **No linting configured** — Project has no ESLint or Prettier setup
- **No testing framework** — No unit or integration tests
- **No type checking** — `@astrojs/check` not installed (would need manual installation)

### Future Roadmap
- Replace localStorage with real backend (Supabase, Firebase)
- Add unit tests and accessibility checks
- Implement full CRUD for admin dashboard
- Add image optimization pipeline
- Connect homepage projects to admin store

## Working with GitHub Copilot

### Always Reference These Instructions
- Use this file as primary reference for commands, timing, and validation
- Only search codebase when instructions don't cover specific implementation details
- Always perform manual validation scenarios after changes

### Making Code Changes
- Focus on components in `/src/components/` for UI changes  
- Update page content in `/src/pages/` for route-specific changes
- Modify `/src/utils/experimentsData.ts` for experiments content
- Use admin dashboard localStorage API in `/src/utils/dataStore.ts`

### Testing Your Changes
- Always run `npm run dev` and manually test affected functionality
- Verify dark mode still works after UI changes
- Test responsive behavior on different screen sizes
- Ensure admin dashboard placeholders still show appropriate alerts