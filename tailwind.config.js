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
        hero: "url('../src/assets/Hero/hero.png')",
        contact: "url('../src/assets/Contact/contactMap.png')",
      },
      colors: {
        bluePrimary: "#142949",
        whiteSecondary: "#F6F7F9",
        cyanPrimary: "#57ACA3",
        grayPrimary: "#868686",
        graySecondary: "#54585F",
      },
      height: {
        hero: "calc(100vh + 140px)",
        heroMobile: "calc(100vh - 60px)",
      },
    },
  },
  plugins: [],
};
