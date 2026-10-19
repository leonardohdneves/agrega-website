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
          graphite: '#2B2F36',
          'graphite-dark': '#1C1F24',
          blue: '#1E4E9A',
          orange: '#F26B1D',
        },
      },
    },
  },
  plugins: [],
};
