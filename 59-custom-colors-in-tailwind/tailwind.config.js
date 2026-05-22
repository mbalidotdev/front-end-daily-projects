/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e8f4f8",
          100: "#d1e9f2",
          200: "#a3d3e4",
          300: "#75bdd7",
          400: "#47a7c9",
          500: "#1a91bc",
          600: "#157496",
          700: "#105771",
          800: "#0a3a4b",
          900: "#051d26",
        },
        secondary: {
          500: "#e94560",
          600: "#ba374d",
        },
        accent: "#f39c12",
      },
    },
  },
  plugins: [],
};
