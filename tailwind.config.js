/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7fc',
          100: '#b3eaf8',
          200: '#80dbf3',
          300: '#4dccee',
          400: '#26c1ea',
          500: '#01a2ca', // Main primary color
          600: '#0191b6',
          700: '#017d9d',
          800: '#016984',
          900: '#015161',
        },
        secondary: {
          50: '#fce0f0',
          100: '#f9b3de',
          200: '#f580ca',
          300: '#f14db6',
          400: '#ee26a7',
          500: '#ed2087', // Main secondary color
          600: '#d61c7a',
          700: '#b71869',
          800: '#981458',
          900: '#791148',
        },
        accent: {
          50: '#fffce0',
          100: '#fff9b3',
          200: '#fff580',
          300: '#fff24d',
          400: '#fff026',
          500: '#ffe501', // Main accent color
          600: '#e6cf01',
          700: '#ccb801',
          800: '#b39f01',
          900: '#998801',
        },
        gray: {
          900: '#383b3c', // Dark gray
          800: '#4e5152',
          700: '#646768',
          600: '#7a7d7e',
          500: '#909395',
          400: '#a7a9ab',
          300: '#bdbfc0',
          200: '#d3d5d6',
          100: '#e9eaeb',
          50: '#f4f4f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};