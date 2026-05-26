/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'powder-blue': {
          50: '#f0f5fa',
          100: '#dce8f3',
          200: '#b9d1e7',
          300: '#8fb5d8',
          400: '#6a9ccb',
          500: '#4a82bf',
          DEFAULT: '#96bfe0',
          600: '#3a6ba3',
          700: '#2f5682',
          800: '#284568',
          900: '#1e3350',
        },
        'french-blue': '#96bfe0',
        'cafe-cream': '#faf8f2',
        'cafe-warm': '#f5efe3',
        'cafe-sand': '#e8dcc8',
        'cafe-green': '#5a7d6a',
        'cafe-green-light': '#7fa38e',
        'cafe-green-dark': '#3d5a49',
        'cafe-olive': '#6b7c5e',
        'cafe-charcoal': '#2c2c2c',
        'cafe-black': '#1a1a1a',
      },
      fontFamily: {
        economica: ['Economica', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
