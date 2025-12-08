# TojoStudio

A modern, dark-themed creative studio portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with dark theme
- Animated hero section with gradient backgrounds
- Featured projects grid showcase
- Services/capabilities section with interactive cards
- Video lightbox section with Unicorn Studio background
- Signature work section with project grid
- Studio journal/blog section
- Testimonials carousel with auto-rotation
- Navigation footer with page links
- Comprehensive footer with CTA and contact info
- Back to top button
- Sliding menu and cart sidebars
- Grid overlay design pattern
- Custom glass morphism effects
- Smooth transitions and hover effects

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter, Geist Mono (Google Fonts)

## Project Structure

```
tojostudio/
├── app/
│   ├── globals.css                # Global styles and custom CSS
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main homepage
├── components/
│   ├── Header.tsx                 # Fixed header with navigation
│   ├── MenuSidebar.tsx            # Sliding menu sidebar
│   ├── CartSidebar.tsx            # Sliding cart/projects sidebar
│   ├── GridOverlay.tsx            # Background grid pattern
│   ├── HeroSection.tsx            # Hero section with CTA
│   ├── FeaturedProjects.tsx       # Project showcase grid
│   ├── ServicesSection.tsx        # Services cards section
│   ├── VideoLightboxSection.tsx   # Video section with Unicorn Studio
│   ├── SignatureWorkSection.tsx   # Signature work grid
│   ├── JournalSection.tsx         # Blog/journal articles
│   ├── TestimonialsCarousel.tsx   # Testimonials carousel
│   ├── NavigationFooter.tsx       # Navigation footer bar
│   ├── MainFooter.tsx             # Main footer with CTA
│   └── BackToTop.tsx              # Back to top button
└── public/                        # Static assets
```

## Customization

### Colors

Edit the color scheme in [tailwind.config.ts](tailwind.config.ts):

```ts
colors: {
  'brand-dark': '#0a0a0f',
  'brand-panel': '#13131a',
  'brand-accent': '#7DD3FC',
}
```

### Content

Update the content in the respective component files to match your studio's information.

## License

MIT
