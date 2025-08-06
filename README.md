# macOS Portfolio Website

A modern, responsive portfolio website built with Astro and styled with Tailwind CSS, featuring a macOS-inspired design.

## Features

### 🚀 Core Functionality (Implemented)
- **Modern macOS-inspired design** with glassmorphism effects
- **Responsive layout** that works on all devices
- **Project showcase** with detailed project cards
- **About section** with personal information
- **Skills display** organized by categories
- **Contact information** with social links
- **Dock navigation** for smooth scrolling between sections

### 🔧 Management Features (Implemented)
- **Admin dashboard** for managing projects and portfolio settings
- **Project CRUD operations** (Create, Read, Update, Delete)
- **Project categorization** with filtering capabilities
- **Draft/Published status** for projects
- **Featured projects** highlighting
- **Portfolio settings** management
- **Local storage** for data persistence (can be replaced with a backend)

## Technology Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React](https://reactjs.org/)** - Interactive components (where needed)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:4321`

4. **Admin Dashboard**
   Navigate to `http://localhost:4321/admin` to manage projects

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Dock.astro      # Navigation dock
│   │   ├── Window.astro    # macOS-style window
│   │   ├── ProjectCard.astro # Project display card
│   │   └── ProjectForm.astro # Project creation/edit form
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro    # Main layout wrapper
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   ├── projects.astro  # Projects gallery
│   │   └── admin.astro     # Management dashboard
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Project and portfolio types
│   └── utils/              # Utility functions
│       └── dataStore.ts    # Data management
├── public/                 # Static assets
└── tailwind.config.mjs     # Tailwind configuration
```

## Customization

### Personal Information
Edit the content in `src/pages/index.astro` to update:
- Your name and title
- Bio/about section  
- Contact information
- Skills and technologies

### Projects
Use the admin dashboard at `/admin` to:
- Add new projects
- Edit existing projects
- Manage project categories
- Set featured projects
- Publish/unpublish projects

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages  
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your GitHub Pages repository

## PRD Implementation Status

### ✅ Completed Features

#### Project Management (FR001-FR005, FR011, FR014)
- [x] Creating new projects with form validation
- [x] Adding project details (title, description, images, links, technologies)
- [x] Viewing all projects in a responsive grid
- [x] Editing project details with pre-filled forms
- [x] Deleting projects with confirmation prompts
- [x] Dashboard view for project management
- [x] Project categorization and filtering

#### Portfolio Management (FR006-FR008, FR012-FR013, FR015)
- [x] Custom URL configuration (ready for backend)
- [x] Automatic URL generation
- [x] Portfolio publishing system
- [x] Portfolio deletion functionality
- [x] Bio/About section management
- [x] Portfolio preview mode

#### Sharing and Access (FR009-FR010)
- [x] Shareable portfolio URL
- [x] Public portfolio view
- [x] Social media integration ready

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or join the [Discord server](https://astro.build/chat).

**Built with ❤️ using modern web technologies**
