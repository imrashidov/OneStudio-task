/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["TT Livret Display Trl"],
      },
      backgroundImage: {
        hero: "url('./src/assets/Hero/hero.png')",
      },
    },
  },
  plugins: [],
};
