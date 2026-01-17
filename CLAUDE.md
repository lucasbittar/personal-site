## Project Overview

This is a personal website for Lucas Bittar, a Senior Software Engineer specializing in Frontend development. The site goes beyond a traditional portfolio to showcase who Lucas is as a person - his writing, music interests, reading habits, and current focuses - while maintaining professional credibility.

**Vision:** "Someone interesting you'd want to grab coffee with"
**Domain:** lucasbittar.rocks / lucasbittar.dev
**Hosting:** Vercel (with serverless functions)
**Analytics ID:** G-C0B279PWTL (Google Analytics 4)

## Technology Stack

### Core
- **Framework:** React 18.3.1 (functional components)
- **Language:** JavaScript (JSX syntax)
- **Build Tool:** Vite 5.4.2
- **Hosting:** Vercel with serverless functions
- **Node.js** runtime environment

### Features
- **Theme Toggle:** Light/dark mode with localStorage persistence
- **Scroll Animations:** Intersection Observer API
- **Spotify Integration:** Vercel serverless function for OAuth
- **Content Management:** Single JSON file for all dynamic content

### External Dependencies
- **react-ga4** 2.1.0 - Google Analytics 4 tracking
- **Font Awesome** (CDN) - Icon library
- **Google Fonts** (CDN) - Ubuntu font family (300, 400, 700 weights)
- **Spotify Web API** - Now playing / recently played

## Project Structure

```
/Users/lucasbittar/Code/personal/
├── api/
│   └── spotify.js              # Vercel serverless function for Spotify OAuth
├── scripts/
│   └── get-spotify-token.js    # One-time setup script for Spotify refresh token
├── src/
│   ├── App.jsx                 # Main app entry with scroll animation logic
│   ├── data/
│   │   └── content.json        # ALL SITE CONTENT - edit this to update
│   ├── components/
│   │   ├── Header.jsx          # Hero section with conversational intro
│   │   ├── ThemeToggle.jsx     # Light/dark mode toggle button
│   │   ├── Now.jsx             # Current focuses + Spotify integration
│   │   ├── Writing.jsx         # Substack posts showcase
│   │   ├── Listening.jsx       # YouTube channel embed
│   │   ├── Reading.jsx         # Book list with status
│   │   ├── About.jsx           # Work section with Toptal badge + skills
│   │   ├── Experiences.jsx     # Professional experience cards with tech tags
│   │   ├── Projects.jsx        # Featured side projects
│   │   └── Social.jsx          # Contact and social links
│   └── css/
│       └── styles.css          # Global styles with light/dark theme variables
├── index.html
├── vite.config.js
├── eslint.config.mjs
├── package.json
└── .gitignore
```

## Site Sections (in order)

1. **Header** - Name + conversational intro from content.json
2. **Now** - Current focuses: working on, reading, listening (Spotify), thinking about
3. **Writing** - Featured Substack posts with links
4. **Listening** - YouTube channel with embedded video
5. **Reading** - Book list organized by status (reading, finished, favorite)
6. **Work (About)** - Professional summary, Toptal badge, skills grid
7. **Experience** - Card grid with company, description, tech tags
8. **Projects** - 2 featured side projects
9. **Connect (Social)** - Social media links

## Content Management

**All dynamic content lives in `src/data/content.json`**

### Structure:
```json
{
  "intro": "Conversational hero text...",
  "now": {
    "workingOn": "Current project description",
    "reading": [
      { "title": "Book Title", "author": "Author" }
    ],
    "listening": "Fallback text when Spotify unavailable",
    "thinkingAbout": "Current intellectual interest"
  },
  "writing": [
    { "id": 1, "title": "...", "excerpt": "...", "url": "...", "date": "YYYY-MM-DD" }
  ],
  "listening": {
    "channelName": "...",
    "channelUrl": "...",
    "channelDescription": "...",
    "featuredVideo": { "id": "youtube-id", "title": "..." }
  },
  "reading": [
    { "id": 1, "title": "...", "author": "...", "status": "reading|finished|favorite", "thoughts": "..." }
  ],
  "experiences": [
    { "id": "...", "title": "...", "company": "...", "period": "...", "description": "...", "tech": ["..."] }
  ],
  "social": {
    "substack": "...", "youtube": "...", "email": "...", "linkedin": "...", "twitter": "...", "github": "..."
  }
}
```

## Design System

### CSS Custom Properties

**Dark Theme (default):**
```css
:root {
  --primary: #d0d0d0;
  --secondary: #4a4a4a;
  --accent: #9c479b;
  --background: #020202;
  --white: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.02);
  --card-hover-bg: rgba(156, 71, 155, 0.05);
}
```

**Light Theme (.light-theme on body):**
```css
.light-theme {
  --primary: #333333;
  --secondary: #666666;
  --accent: #9c479b;
  --background: #f5f5f5;
  --white: #1a1a1a;
  --card-bg: rgba(0, 0, 0, 0.02);
  --card-hover-bg: rgba(156, 71, 155, 0.08);
}
```

### Key Design Elements
- Purple accent (#9c479b) maintained across both themes
- Card-based layouts with hover effects
- Tech tags as pills with hover color inversion
- Scroll-triggered fade-in animations
- Mobile breakpoint: 768px

## Component Patterns

### State Management
- **ThemeToggle:** Uses useState + useEffect with localStorage
- **Now (Spotify):** Uses useState + useEffect with fetch + setInterval
- **All others:** Stateless, data-driven from content.json

### Animation System
```javascript
// In App.jsx - Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
```

Sections get `.animate-section` class (opacity: 0, translateY: 40px) and `.animate-in` when visible.

## Spotify Integration

### Architecture
- **Serverless function:** `api/spotify.js` handles OAuth token refresh
- **Frontend:** `Now.jsx` fetches from `/api/spotify` every 30 seconds
- **Fallback:** Shows `now.listening` from content.json if Spotify unavailable

### Environment Variables (Vercel)
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

### Setup Script
```bash
SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=xxx node scripts/get-spotify-token.js
```

## Development Workflow

### Available Scripts
```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run format    # Format with Prettier
```

### Deployment
- Push to `master` branch triggers Vercel deployment
- Environment variables configured in Vercel dashboard

## Common Modifications

### Update any content
Edit `src/data/content.json` - changes reflect immediately on rebuild.

### Add new experience
Add object to `experiences` array in content.json:
```json
{
  "id": "unique-id",
  "title": "Job Title",
  "company": "Company Name",
  "period": "Jan 2026 – Present",
  "description": "One impactful sentence about the role.",
  "tech": ["React", "TypeScript", "etc"]
}
```

### Add new book
Add to `reading` array in content.json with status: "reading", "finished", or "favorite"

### Change theme colors
Update CSS custom properties in `styles.css` `:root` and `.light-theme`

## File Modification Guidelines

1. **Content changes:** Edit `content.json` only
2. **Styling:** Use CSS custom properties, maintain both themes
3. **Components:** Keep stateless unless state is necessary
4. **New sections:** Add to App.jsx, create component, add styles
5. **Always test:** Both themes, mobile responsiveness, scroll animations

## Git Workflow

- **Main branch:** master
- **Deployment:** Automatic via Vercel on push to master
- **Ignored:** node_modules, dist/, .env, .DS_Store, .claude

## Quick Reference

| Item | Value |
|------|-------|
| Dev server | `npm run dev` → localhost:5173 |
| Content file | `src/data/content.json` |
| Styles | `src/css/styles.css` |
| Spotify API | `api/spotify.js` |
| Accent color | `#9c479b` (purple) |
| Font | Ubuntu (Google Fonts) |
| Breakpoint | 768px |

---

**Last Updated:** 2026-01-17
**Version:** 2.0
**Maintained by:** Lucas Bittar
