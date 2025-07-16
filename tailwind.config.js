/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fm-black': '#050505',
        'fm-dark': '#111111',
        'fm-light': '#f5f5f5',
        'fm-primary': '#0055FF',
        'fm-accent': '#00F0FF',
        'fm-gray': {
          100: '#f8f8f8',
          200: '#e0e0e0',
          800: '#333333',
          900: '#1a1a1a',
        }
      }
  }
  },
  plugins: [],
}

