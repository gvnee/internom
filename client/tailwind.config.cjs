/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js, jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        text: "#1a1a1a",
        rng: "#fc8f43",
        footer: "#f1f1f1",
        popup: "#f39c12"
      },
      backgroundImage: {
      hero: "url('./src/assets/hero.jpg')"
      }
    },
  },
  plugins: [],
}