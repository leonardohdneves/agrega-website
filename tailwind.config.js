/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        agrega: {
          graphite: '#1F2328',
          'graphite-dark': '#0F1113',
          blue: '#1E4E9A',
          orange: '#F26B1D',
        },
      },
    },
  },
  plugins: [],
};
