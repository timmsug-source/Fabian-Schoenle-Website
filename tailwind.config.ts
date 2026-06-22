import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:        '#182A3A',
        'navy-dark': '#0D1721',
        'navy-mid':  '#2A3A4A',
        gold:        '#C99A3D',
        'gold-light':'#F2D27A',
        'gold-dark': '#8A5D1F',
        'neutral-1': '#5B6773',
        'neutral-2': '#A1A9B3',
        'neutral-3': '#E6E8EB',
      },
      fontFamily: {
        inter:  ['var(--font-inter)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
