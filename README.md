# A.T Farms and Fields Limited — Company Website

[![Live Site](https://img.shields.io/badge/Live%20Site-atfarmsandfields.com-success?style=for-the-badge)](https://atfarmsandfields.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

A modern, high-performance marketing website for A.T Farms and Fields Limited, an agribusiness company specializing in crop farming, livestock production, forestry, and farm management services across Southwest Nigeria.

## Preview

![AT Farms Website Preview](preview.png)

**Live site:** [atfarmsandfields.com](https://atfarmsandfields.com)

## About the Project

This is a **real client project** built for A.T Farms and Fields Limited, a leading agribusiness in Ogun State, Nigeria. The site serves as the company's digital storefront, designed to:

- Build credibility with farmers, diaspora investors, and agribusinesses
- Showcase core services and expertise
- Generate leads through a professional contact form
- Provide company information and testimonials

The project was developed following a comprehensive **Product Requirements Document (PRD)**, detailed **Technical Specification**, and a **5-phase development plan**, with each phase tracked in Git history for transparency and clarity.

## Features

**Modern Design & UX**
- Fully responsive design optimized for mobile, tablet, and desktop
- Smooth scroll animations using Framer Motion
- Accessible color scheme with high contrast ratios
- Skip-to-content link and keyboard navigation support

**Rich Content Sections**
- Hero section with compelling call-to-action
- Company story and mission/vision statements
- 10 service offerings with icons and descriptions
- Why Choose Us section highlighting competitive advantages
- Live statistics counter (animated)
- Image gallery with lightbox viewer
- Client testimonials carousel
- Contact form with validation and error handling
- Company footer with social media links

**SEO & Performance**
- Meta tags (charset, viewport, robots)
- Open Graph and Twitter Card support
- Canonical URL
- XML sitemap and robots.txt
- Google Analytics 4 integration
- Lazy loading for below-fold images
- Eager loading for hero image
- Explicit image dimensions to prevent layout shift

**Accessibility**
- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and live regions for dynamic content
- Focus management and visible focus states
- Reduced motion support via `prefers-reduced-motion`

**Developer Experience**
- TypeScript for type safety
- Component-based architecture
- Path aliases for clean imports
- ESLint configuration with strict rules
- Hot module replacement (HMR) during development

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [React 19](https://react.dev) with TypeScript |
| **Router** | [TanStack Router](https://tanstack.com/router) with file-based routing |
| **Build Tool** | [Vite 7](https://vitejs.dev) with TanStack Start |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) with CSS variables |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) (Radix UI + Tailwind) |
| **Animations** | [Framer Motion](https://www.framer.com/motion) |
| **Forms** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **Icons** | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons) |
| **Analytics** | [Google Analytics 4](https://marketingplatform.google.com/about/analytics) |
| **Form Backend** | [Web3Forms](https://web3forms.com) |
| **Deployment** | [Netlify](https://www.netlify.com) (static hosting with redirects) |
| **Package Manager** | [Bun](https://bun.sh) |

## Sections

The website consists of 10 carefully designed sections:

1. **Navbar** — Fixed header with mobile menu and navigation links
2. **Hero Section** — Full-screen hero with background image, headline, and CTAs
3. **About Section** — Company story, mission/vision, and core values
4. **Services Section** — 10 service offerings (Livestock, Crops, Farm Management, etc.)
5. **Why Choose Us Section** — Key differentiators and competitive advantages
6. **Statistics Bar** — Animated counters showing company metrics
7. **Gallery Section** — Lightbox image gallery of farm operations
8. **Testimonials Section** — Client feedback carousel with autoplay
9. **Contact Section** — Web form with validation and client social links
10. **Footer** — Company info, quick links, and legal information

## Performance & Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Alt text for all images
- ARIA labels and live regions
- Keyboard navigation support
- Focus management in modals and overlays
- Color contrast ratios ≥ 4.5:1 (normal text) and ≥ 3:1 (large text)
- Reduced motion support

### SEO & Meta Tags
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Canonical URL
- XML sitemap at `/sitemap.xml`
- `robots.txt` for search engine crawling
- Structured data ready for schema.org integration

### Image Optimization
- WebP format for gallery images (smaller file size)
- JPEG for hero background (browser compatibility)
- Explicit width/height to prevent Cumulative Layout Shift
- Lazy loading for below-fold images
- Eager loading for hero image (LCP optimization)

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Development Process

The project followed a structured 5-phase development approach:

### Phase 1: Foundation & Setup
- Project initialization with TanStack Start
- Configuration of build tools and TypeScript
- Tailwind CSS and shadcn/ui setup
- CLAUDE.md documentation

### Phase 2: Content & Markup
- All 10 sections built and content added
- Responsive design implementation
- Accessibility audit and fixes (WCAG 2.1 AA)
- Focus area ID anchor navigation

### Phase 3: Interactivity & Polish
- Framer Motion animations
- Contact form with Web3Forms backend
- Testimonials and gallery carousels
- Image gallery lightbox
- Mobile menu with animation

### Phase 4: Responsiveness & QA
- Comprehensive responsive testing
- Accessibility refinements
- Reduced motion support
- Cross-browser testing

### Phase 5: Optimization & Deployment
- Static build configuration for Netlify
- Google Analytics 4 integration
- SEO meta tags and Open Graph
- Production optimization and monitoring

Each phase is reflected in the Git history for transparency and learning value.

## Getting Started

### Prerequisites
- Node.js 18 or higher
- Bun (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/at-farms-fields.git
cd at-farms-fields

# Install dependencies
bun install
# or: npm install

# Start development server
bun run dev
# or: npm run dev
```

The dev server will start at `http://localhost:5173` (or the next available port).

### Building for Production

```bash
# Build for production
bun run build
# or: npm run build

# Preview production build locally
bun run preview
# or: npm run preview
```

The production build outputs to `dist/client/` for Netlify static hosting.

### Linting

```bash
# Run ESLint
bun run lint
# or: npm run lint
```

## Project Structure

```
src/
├── routes/                    # File-based routing (TanStack Router)
│   ├── __root.tsx            # Root layout & error boundary
│   └── index.tsx             # Home page (10 sections)
├── components/
│   ├── Navbar.tsx            # Fixed header with mobile menu
│   ├── HeroSection.tsx        # Hero with background image
│   ├── AboutSection.tsx       # Company story & values
│   ├── ServicesSection.tsx    # 10 service cards
│   ├── WhyChooseUsSection.tsx # Competitive advantages
│   ├── StatsBarSection.tsx    # Animated statistics
│   ├── GallerySection.tsx     # Image gallery + lightbox
│   ├── TestimonialsSection.tsx # Client testimonials carousel
│   ├── ContactSection.tsx     # Contact form + socials
│   ├── Footer.tsx            # Footer with links
│   └── ui/                   # shadcn/ui components
├── hooks/
│   ├── use-mobile.ts         # Mobile breakpoint detection
│   ├── use-count-up.ts       # Animated counter for stats
│   └── use-reduced-motion.ts # Respect prefers-reduced-motion
├── lib/
│   └── utils.ts              # Utility functions (classname merging)
├── assets/                   # Images (jpg, webp)
├── styles.css               # Tailwind + custom CSS variables
├── client.tsx               # Client entry point
├── router.tsx               # Router configuration
└── routeTree.gen.ts         # Auto-generated router types
```

## Live Demo

**Visit the live site:** [atfarmsandfields.com](https://atfarmsandfields.com)

The site is deployed on **Netlify** with a custom domain and **Let's Encrypt SSL** certificate. All content updates push automatically through Git-based CI/CD.

## License

This project was built for A.T Farms and Fields Limited.
All rights to the design, content, and brand assets belong to the client.
The source code is shared for portfolio viewing purposes only.

---

**Built for A.T Farms and Fields Limited**
