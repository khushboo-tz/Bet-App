/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        // Core design tokens pulled from Figma
        ink: {
          DEFAULT: '#121212',
          soft: '#1a1a1a',
          muted: '#525056',
          subtle: '#8a8790',
        },
        cream: '#f9f0df',
        mist: '#e7e6eb',
        lavender: {
          50: '#f5f2ff',
          100: '#ebe5ff',
          200: '#d9ccff',
          300: '#b9a6f5',
          400: '#9a80ec',
          500: '#7a5ce0',
        },
        lime: {
          400: '#d9f25e',
          500: '#c9f158',
          600: '#a8d43e',
        },
        paper: '#fdfbf6',
        card: '#ffffff',
        line: '#ececee',
      },
      borderRadius: {
        card: '24px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 20px -6px rgba(20, 20, 30, 0.08)',
        soft: '0 2px 12px -4px rgba(20, 20, 30, 0.06)',
      },
      backgroundImage: {
        'splash-gradient': 'linear-gradient(203.85deg, #f9f0df 0.45%, #e7e6eb 99.05%)',
        'lime-gradient': 'linear-gradient(180deg, #d9f25e 0%, #a8d43e 100%)',
        'lavender-gradient': 'linear-gradient(180deg, #ebe5ff 0%, #b9a6f5 100%)',
      },
    },
  },
  plugins: [],
};
