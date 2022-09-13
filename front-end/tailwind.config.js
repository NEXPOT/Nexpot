/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': "475px",
      // => @media (min-width: 475px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '960px',
      // => @media (min-width: 960px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      labtop: "1440px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1920px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
