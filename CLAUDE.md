## Project Overview

This is a personal portfolio website for Lucas Bittar, a Senior Software Engineer specializing in Frontend development. The site showcases professional experience, projects, and technical skills through a modern, minimalist dark-themed interface.

**Domain:** lucasbittar.rocks / lucasbittar.dev
**Analytics ID:** G-C0B279PWTL (Google Analytics 4)

## Technology Stack

### Core
- **Framework:** React 18.3.1 (functional components only)
- **Language:** JavaScript (JSX syntax)
- **Build Tool:** Vite 5.4.2 (fast development and optimized production builds)
- **Node.js** runtime environment

### Development Tools
- **ESLint** 9.9.1 - Code quality and linting
- **Prettier** 3.3.3 - Code formatting
- **eslint-config-prettier** 9.1.0 - ESLint/Prettier integration

### External Dependencies
- **react-ga4** 2.1.0 - Google Analytics 4 tracking
- **Font Awesome** (CDN) - Icon library
- **Google Fonts** (CDN) - Ubuntu font family (300, 400, 700 weights)

## Project Structure

```
/Users/lucasbittar/Code/personal/
├── src/
│   ├── App.jsx              # Main application entry - orchestrates all sections
│   ├── components/          # React components directory
│   │   ├── Header.jsx       # Hero section with introduction
│   │   ├── About.jsx        # Bio and skills section
│   │   ├── Experiences.jsx  # Professional experience timeline
│   │   ├── Projects.jsx     # Portfolio projects showcase
│   │   └── Social.jsx       # Contact and social media links
│   └── css/
│       └── styles.css       # Global styling with CSS custom properties
├── index.html               # HTML entry point with root div
├── vite.config.js           # Vite configuration (minimal)
├── eslint.config.mjs        # ESLint configuration
├── package.json             # Project manifest
└── .gitignore              # Git ignore patterns
```

## Architecture Patterns

### Component Design
- **All functional components** - No class components
- **Stateless/Presentational** - No useState or useEffect hooks
- **Data-driven rendering** - Arrays of objects mapped to JSX
- **Single responsibility** - Each component handles one major section
- **Flat hierarchy** - No nested component folders

### Data Management Pattern
```javascript
// Projects and experiences are defined as JavaScript arrays within components
const projects = [
  { id: 1, title: "...", description: "...", links: {...} },
  // ...
];

// Rendered using .map()
projects.map((project) => (
  <li key={project.id}>
    {/* JSX */}
  </li>
))
```

### Key Features by Component

**Header.jsx**
- Hero section with main heading and subtitle
- Professional introduction text
- Text shadow effect on heading

**About.jsx**
- Professional bio (15 years experience)
- Structured skills list by category:
  - Frontend, Backend, Mobile, Tools, Learning
- Easy to update by modifying the skills array

**Experiences.jsx**
- Timeline of 7 professional positions
- **Auto-calculated durations** via `calculateDuration(startDate, endDate)` function
- Each position includes: title, company, period, startDate, endDate, responsibilities
- Current position marked with "(Present)" label
- Toptal contractor positions indicated

**Projects.jsx**
- 3 featured projects with descriptions and links
- **GA4 event tracking** on project link clicks
  - Category: "Projects", Action: "Click", Label: URL
- Projects: Weather App, MyScrobble, FastFeet
- Links to GitHub (lucasbittar.dev) and live demos

**Social.jsx**
- Contact call-to-action
- Social links: Email, LinkedIn, X (Twitter), GitHub
- **Accessibility:** `sr-only` class for screen reader text on icon links

## Design System

### CSS Custom Properties (in styles.css)
```css
:root {
  --primary: #d0d0d0        /* Light gray - body text */
  --secondary: #4a4a4a      /* Dark gray - secondary text/borders */
  --accent: #9c479b         /* Purple - headings, links, accents */
  --background: #020202     /* Near-black - background */
  --white: #ffffff          /* Pure white */
  --border: #ccc            /* Light gray - borders */
  --font: "Ubuntu", sans-serif
}
```

### Color Scheme
- **Dark theme** with near-black background
- **Purple accent color** (#9c479b) for visual hierarchy
- High contrast for readability
- Minimalist aesthetic

### Responsive Design
- **Mobile breakpoint:** 768px
- Mobile-first approach with media queries
- Adjusted font sizes, padding, borders for mobile
- Full viewport height header on mobile devices

### Key Design Elements
- 4px purple border accent on body (top and right)
- Text shadow on main h1 (2px in accent color)
- 1px dotted section separators in accent color
- 3px left border on project/experience items (2px on mobile)
- Ubuntu font family throughout

## Development Workflow

### Available Scripts
```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

### Build Configuration
- **Output directory:** `dist/`
- Vite handles optimization, code splitting, asset bundling
- Fast Refresh enabled for instant component updates
- Minimal configuration (6-line vite.config.js)

### Code Quality Standards
- ESLint with JavaScript recommended config
- Prettier for consistent formatting
- Run linting before commits
- Simple, readable JSX patterns preferred

## Common Modification Patterns

### Adding a New Experience
1. Open `src/components/Experiences.jsx`
2. Add new object to `experiences` array:
```javascript
{
  id: 8, // Increment ID
  title: "Position Title",
  company: "Company Name",
  toptal: false, // Set true if Toptal contract
  period: "Start - End",
  startDate: "2026-01-01",
  endDate: "present", // or "YYYY-MM-DD"
  responsibilities: [
    "Responsibility 1",
    "Responsibility 2",
  ]
}
```
3. Duration will be auto-calculated

### Adding a New Project
1. Open `src/components/Projects.jsx`
2. Add new object to `projects` array:
```javascript
{
  id: 4, // Increment ID
  title: "Project Name",
  description: "Project description text",
  links: {
    github: "https://github.com/...",
    live: "https://..." // optional
  }
}
```
3. GA4 tracking is automatic on clicks

### Updating Skills
1. Open `src/components/About.jsx`
2. Modify the `skills` array within categories:
```javascript
const skills = [
  { category: "Category Name", items: ["Skill 1", "Skill 2"] },
  // ...
];
```

### Styling Changes
1. **Theme colors:** Update CSS custom properties in `styles.css` `:root`
2. **Component-specific:** Add/modify classes in `styles.css`
3. **Mobile responsive:** Adjust media query at `@media (max-width: 768px)`

## Performance Considerations

- External scripts (Font Awesome, Google Fonts) loaded via CDN
- Preconnect to Google Fonts for faster loading
- React production build with Vite optimization
- Google Analytics loaded and initialized in App.jsx
- Minimal dependencies (only 3 production packages)

## Accessibility Features

- Semantic HTML structure (header, ul, li, a tags)
- `sr-only` class for screen reader only text on icon links
- High color contrast ratios for readability
- Proper link attributes: `target="_blank"` with `rel="noopener noreferrer"`
- Keyboard-navigable interface

## Analytics Integration

Google Analytics 4 is configured in `App.jsx`:
```javascript
ReactGA.initialize('G-C0B279PWTL');
ReactGA.send({ hitType: "pageview", page: "/" });
```

Project link clicks are tracked:
```javascript
ReactGA.event({
  category: "Projects",
  action: "Click",
  label: url,
});
```

## Common Issues and Solutions

### Issue: Component not rendering
- Check that component is imported in App.jsx
- Verify component is included in the render method

### Issue: Styles not applying
- Ensure styles.css is imported in App.jsx
- Check CSS class names match exactly
- Verify CSS custom properties are defined in :root

### Issue: Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for JSX syntax errors (proper closing tags, valid attribute names)
- Ensure all imports use correct file paths

### Issue: Analytics not tracking
- Verify GA4 measurement ID is correct in App.jsx
- Check browser console for GA errors
- Ensure react-ga4 is installed: `npm install react-ga4`

## File Modification Guidelines

### When editing components:
1. **Always read the file first** before making changes
2. **Maintain data-driven patterns** - Keep arrays of objects for projects/experiences
3. **Preserve the functional component pattern** - No class components
4. **Keep components stateless** - No unnecessary hooks
5. **Follow existing naming conventions** - camelCase for variables, PascalCase for components
6. **Test responsive design** after changes - Check both desktop and mobile views

### When editing styles:
1. **Use CSS custom properties** for theme values
2. **Maintain mobile-first approach** - Base styles, then media queries
3. **Preserve the dark theme aesthetic** - High contrast, purple accents
4. **Test color contrast** for accessibility
5. **Keep selectors simple** - Avoid deep nesting

## Git Workflow

- Main branch: master (not main)
- Clean working directory preferred before commits
- Git ignored: node_modules, dist/, .env, .DS_Store, coverage/, .claude, references/

## Project Context for AI Assistants

### What this project is:
- Personal portfolio for a senior frontend engineer
- Showcase of professional experience and projects
- Modern, minimalist design reflecting technical expertise

### What this project is NOT:
- Not a blog or CMS
- Not a full-stack application with backend
- Not a template or theme for others
- Not a commercial product

### Design Philosophy:
- **Simplicity over complexity** - Minimal dependencies, straightforward patterns
- **Performance-focused** - Fast loads, optimized builds
- **Maintainable** - Easy to update content, clear structure
- **Professional** - Clean, modern aesthetic appropriate for senior engineer

### When making changes:
1. Respect the minimalist design philosophy
2. Keep the dark theme with purple accents
3. Maintain the data-driven component pattern
4. Preserve accessibility features
5. Test responsive design on mobile
6. Don't over-engineer solutions
7. Keep dependencies minimal

## Quick Reference

**Dev server:** `npm run dev` (runs on http://localhost:5173 by default)
**Production build:** `npm run build`
**Main entry:** `src/App.jsx`
**Styles:** `src/css/styles.css`
**Color accent:** `#9c479b` (purple)
**Font:** Ubuntu (Google Fonts)
**Breakpoint:** 768px

---

**Last Updated:** 2026-01-14
**Version:** 1.0
**Maintained by:** Lucas Bittar
