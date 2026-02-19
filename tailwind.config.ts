import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0A0A0A',
        'brand-panel': '#F0EDE8',
        'brand-accent': '#C45A3C',
        'brand-bg': '#FAFAF8',
        'brand-border': '#0A0A0A',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'DM Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'Space Mono', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0px 0px hsl(0 0% 0% / 0.50)',
        'brutal': '4px 4px 0px 0px hsl(0 0% 0% / 1.00)',
        'brutal-md': '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00)',
        'brutal-lg': '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00)',
        'brutal-xl': '4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00)',
        'brutal-accent': '4px 4px 0px 0px #C45A3C',
      },
    },
  },
  plugins: [],
} satisfies Config;
