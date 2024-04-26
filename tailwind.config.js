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
      colors: {
        bluePrimary: "#142949",
        whiteSecondary: "#F6F7F9",
        cyanPrimary: "#57ACA3",
        grayPrimary: "#868686",
      },
    },
  },
  plugins: [],
};
