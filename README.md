# Lucas Bittar - Personal Site

A personal website that goes beyond a traditional portfolio - showcasing who I am as a person while maintaining professional credibility.

**Live Site:** [lucasbittar.rocks](https://lucasbittar.rocks) | [lucasbittar.dev](https://lucasbittar.dev)

## Tech Stack

- **React** 18.3.1 - UI component library
- **Vite** 5.4.2 - Fast build tool with HMR
- **Vercel** - Hosting with serverless functions
- **JavaScript/JSX** - Modern ES6+ syntax
- **CSS** - Custom properties with light/dark theming
- **Google Analytics 4** - User engagement tracking
- **Spotify API** - Now playing integration

## Features

- **Light/Dark theme toggle** with localStorage persistence
- **Scroll animations** using Intersection Observer
- **Spotify integration** - Shows currently playing or recently played track
- **Content-driven** - All content managed via single JSON file
- Responsive mobile-first layout
- Professional experience with tech tags
- Writing showcase (Substack integration)
- YouTube channel embed
- Reading list section
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
```

## Project Structure

```
src/
├── App.jsx                 # Main app with scroll animation logic
├── data/
│   └── content.json        # All site content (edit this to update)
├── components/
│   ├── Header.jsx          # Hero with conversational intro
│   ├── ThemeToggle.jsx     # Light/dark mode switch
│   ├── Now.jsx             # Current focuses + Spotify
│   ├── Writing.jsx         # Substack posts
│   ├── Listening.jsx       # YouTube channel
│   ├── Reading.jsx         # Book list
│   ├── About.jsx           # Work section with skills
│   ├── Experiences.jsx     # Professional experience cards
│   ├── Projects.jsx        # Featured projects
│   └── Social.jsx          # Contact links
└── css/
    └── styles.css          # Global styles with theme variables
api/
└── spotify.js              # Vercel serverless function for Spotify
scripts/
└── get-spotify-token.js    # One-time setup for Spotify auth
```

## Updating Content

All content is managed in `src/data/content.json`:

- **intro** - Hero section text
- **now** - Current focuses (working on, reading, listening, thinking about)
- **writing** - Substack posts array
- **listening** - YouTube channel info and featured video
- **reading** - Book list with status and thoughts
- **experiences** - Professional experience array
- **social** - Social media links

## Spotify Setup

1. Create app at [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Add `http://127.0.0.1:3000/callback` as redirect URI
3. Run: `SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=xxx node scripts/get-spotify-token.js`
4. Add environment variables to Vercel:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `SPOTIFY_REFRESH_TOKEN`

## Color Scheme

### Dark Theme (default)
- Background: `#020202`
- Primary text: `#d0d0d0`
- Accent: `#9c479b` (purple)

### Light Theme
- Background: `#f5f5f5`
- Primary text: `#333333`
- Accent: `#9c479b` (purple)

## Deployment

Deployed on Vercel with automatic deployments from the `master` branch.

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```

## License

Personal project - All rights reserved.

---

Built with React + Vite | Deployed on Vercel
