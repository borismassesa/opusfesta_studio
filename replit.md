# TojoStudio - Digital Creative Studio

## Overview
This is a Next.js 15 website for TojoStudio, a digital creative studio. The site showcases their portfolio, services, and contact information.

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

## Recent Changes
- Configured Next.js to run on port 5000 with host 0.0.0.0
- Added allowedDevOrigins for Replit proxy compatibility
