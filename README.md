# Ravi Chandu's Portfolio - Modern Animated Astro Site

A modern, animated portfolio website built with **Astro**, **Tailwind CSS**, **Framer Motion**, and **React**. Features a sleek design with smooth animations, dark mode support, and a fully responsive interface.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Interactive Components**: [React](https://react.dev/) - For dynamic features
- **Content**: Markdown-based blog posts and projects
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## 📋 Features

✨ **Modern Design**
- Vibrant gradient hero section with animated backgrounds
- Smooth scroll animations and hover effects
- Beautiful card components for projects and blog posts
- Professional resume page with timeline layout

🌙 **Dark Mode**
- Toggle dark/light theme with smooth transitions
- Persistent theme selection via localStorage
- Respects system color scheme preference

📱 **Responsive**
- Mobile-first design approach
- Animated hamburger menu for mobile navigation
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

📝 **Content Management**
- Markdown-based blog posts with frontmatter
- Project showcase with categorization and filtering
- Archive system for older content
- Dynamic page generation from collections

⚡ **Performance**
- Static site generation for fast load times
- Minimal JavaScript by default
- Optimized images and assets
- Impressive Lighthouse scores

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site.

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/          # Reusable Astro/React components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.tsx         # Animated hero section
│   ├── ProjectCard.astro
│   ├── BlogCard.astro
│   └── ScrollAnimation.tsx
├── layouts/
│   └── BaseLayout.astro # Main layout wrapper
├── pages/
│   ├── index.astro      # Homepage
│   ├── portfolio.astro  # Projects showcase
│   ├── resume.astro     # Resume page
│   ├── about.astro      # About page
│   ├── archive.astro    # Archived posts
│   └── blog/
│       ├── index.astro  # Blog listing
│       └── [slug].astro # Individual blog posts
├── content/
│   ├── blog/           # Markdown blog posts
│   └── projects/       # Markdown project files
├── data/
│   └── resume.ts       # Resume data structure
└── styles/
    └── global.css      # Global styles & theme variables
```

## 🎨 Customization

### Colors & Design System
Edit `tailwind.config.cjs` to modify colors, typography, and spacing.

### Resume Data
Update `src/data/resume.ts` with your experience, skills, and education.

### Website Config
Edit `astro.config.mjs` to change:
- Site URL
- Build output directory
- Integrations

### Content
Add new blog posts to `src/content/blog/` and projects to `src/content/projects/` as Markdown files.

## 📝 Adding Content

### New Blog Post
Create a `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Short description"
pubDate: 2024-08-15
author: "Ravi Chandu"
category: "Power BI"
tags: ["tag1", "tag2"]
archived: false
---

Your content here using Markdown...
```

### New Project
Create a `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Title"
description: "Project description"
image: "https://images.unsplash.com/photo-xxx"
technologies: ["Power BI", "DAX", "SQL Server"]
link: "https://project-link.com"
github: "https://github.com/username/repo"
date: 2024-06-15
featured: true
category: "Power BI"
---

Project details...
```

## 🚀 Deployment

### GitHub Pages (Automatic)
The site automatically deploys to GitHub Pages when you push to the `main` branch thanks to the GitHub Actions workflow in `.github/workflows/deploy.yml`.

**Setup:**
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings (set source to `GitHub Actions`)
3. The workflow will automatically build and deploy your site

### Manual Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 🔧 Performance Optimization

- Images are lazy-loaded automatically
- CSS is minified in production
- JavaScript is only loaded for interactive components
- Static HTML pages are pre-rendered

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This project is open source under the MIT License.

---

Built with ❤️ using Astro
