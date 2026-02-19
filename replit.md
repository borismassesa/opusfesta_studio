# Opusfesta Studio - Digital Creative Studio

## Overview
This is a Next.js 15 website for Opusfesta Studio, a digital creative studio. The site showcases their portfolio, services, and contact information.

## Tech Stack
- **Framework**: Next.js 15.5.7
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **TypeScript**: 5.x
- **Fonts**: Inter, Geist Mono (via Google Fonts)

## Project Structure
```
├── app/               # Next.js App Router pages and layouts
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Home page
├── components/        # React components
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Development
The development server runs on port 5000 with:
```bash
npm run dev
```

## External Services
- **Supabase**: Used for image hosting (hoirqrkdgbmvpwutwuwj.supabase.co)
- **UnicornStudio**: External script for visual effects

## Design
- **Theme**: Brutalist light theme with warm off-white backgrounds
- **Palette**: brand-bg (#FAFAF8), brand-panel (#F0EDE8), brand-accent (#C45A3C terracotta), brand-dark (#0A0A0A)
- **Style**: Bold typography, thick black borders, minimal decoration, high contrast

## Recent Changes
- Redesigned entire site from dark to brutalist light theme
- Updated color palette to warm off-white with terracotta accent
- Renamed studio to Opusfesta Studio
- Focused content on wedding, event, and corporate photography/videography
- Configured Next.js to run on port 5000 with host 0.0.0.0
- Added allowedDevOrigins for Replit proxy compatibility
