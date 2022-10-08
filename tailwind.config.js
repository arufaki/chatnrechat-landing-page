/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEF2FF",
        secondary: "#4A72FF",
        dark: "#0C1B4D",

        white: "#F4F7FF",
      },
      boxShadow: {
        xxl: "0px 30px 60px rgba(74, 114, 255, 0.25)",
      },
    },
    fontFamily: {
      inter: ["Inter", "Arial", "sans-serif"],
      dmSans: ["DM Sans", "Arial", "sans-serif"],
      sourceSans: ["Source Sans Pro", "Arial", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1024px",
    },
  },
  plugins: [],
};
