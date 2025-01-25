/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        "6xl": "5000px",
        "5xl": "4000px",
        "4xl": "2800px",
        "3xl": "2200px",
      },
    },
  },
  plugins: [],
};
