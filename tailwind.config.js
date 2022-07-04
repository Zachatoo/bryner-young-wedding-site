/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "great-vibes": [
          '"Great Vibes"',
          "Montserrat",
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "6.5xl": "4rem",
        ...defaultTheme.fontSize,
      },
    },
    colors: {
      cream: {
        DEFAULT: "var(--color-cream)",
      },
      blue: {
        DEFAULT: "var(--color-blue)",
      },
      purple: {
        DEFAULT: "var(--color-purple)",
      },
      green: {
        DEFAULT: "var(--color-green)",
        dark: "var(--color-green-dark)",
      },
    },
  },
  plugins: [],
};
