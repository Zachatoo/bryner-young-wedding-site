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
      screens: {
        xs: "500px",
      },
    },
    colors: {
      white: {
        DEFAULT: "white",
      },
      cream: {
        DEFAULT: "var(--color-cream)",
        dark: "var(--color-cream-dark)",
      },
      blue: {
        light: "var(--color-blue-light)",
        DEFAULT: "var(--color-blue)",
        dark: "var(--color-blue-dark)",
      },
      purple: {
        light: "var(--color-purple-light)",
        DEFAULT: "var(--color-purple)",
        dark: "var(--color-purple-dark)",
      },
      spruce: {
        light: "var(--color-spruce-light)",
        DEFAULT: "var(--color-spruce)",
        dark: "var(--color-spruce-dark)",
      },
      green: {
        light: "var(--color-green-light)",
        DEFAULT: "var(--color-green)",
        dark: "var(--color-green-dark)",
      },
    },
  },
  plugins: [],
};
