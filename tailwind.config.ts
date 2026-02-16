import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        holy: {
          gold: '#d4af37',
          blue: '#4a90e2',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
