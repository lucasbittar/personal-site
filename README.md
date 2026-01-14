# Personal Portfolio - Lucas Bittar

A modern, minimalist portfolio website showcasing my work as a Senior Software Engineer specializing in Frontend development.

**Live Site:** [lucasbittar.rocks](https://lucasbittar.rocks)

## Tech Stack

- **React** 18.3.1 - UI component library
- **Vite** 5.4.2 - Fast build tool with HMR
- **JavaScript/JSX** - Modern ES6+ syntax
- **CSS** - Custom properties for theming
- **Google Analytics 4** - User engagement tracking

## Features

- Clean, dark-themed design with purple accents
- Responsive mobile-first layout
- Professional experience timeline with auto-calculated durations
- Project showcase with GitHub and live demo links
- Skills organized by technology categories
- Google Analytics event tracking
- Accessible design with semantic HTML

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── App.jsx              # Main application entry
├── components/          # React components
│   ├── Header.jsx       # Hero section
│   ├── About.jsx        # Bio and skills
│   ├── Experiences.jsx  # Work history
│   ├── Projects.jsx     # Portfolio projects
│   └── Social.jsx       # Contact links
└── css/
    └── styles.css       # Global styles
```

## Development

- Built with **Vite** for fast development experience
- **ESLint** and **Prettier** for code quality
- **Functional components** with data-driven rendering
- **CSS custom properties** for easy theme customization

## Updating Content

### Add Experience
Edit `src/components/Experiences.jsx` and add to the `experiences` array.

### Add Project
Edit `src/components/Projects.jsx` and add to the `projects` array.

### Update Skills
Edit `src/components/About.jsx` and modify the `skills` array.

## Color Scheme

- Background: `#020202` (near-black)
- Primary text: `#d0d0d0` (light gray)
- Accent: `#9c479b` (purple)
- Font: Ubuntu (300, 400, 700)

## License

Personal project - All rights reserved.

---

Built with React + Vite | Deployed at lucasbittar.rocks / lucasbittar.dev
