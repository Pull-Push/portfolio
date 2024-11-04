/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'social-green': 'hsl(75, 94%, 57%)',
      }
    },
  },
  plugins: [],
}