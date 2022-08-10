/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'labtop': '1440px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1920px'
       // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
