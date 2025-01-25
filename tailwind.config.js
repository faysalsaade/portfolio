/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        "5xl": "4000px",
        "4xl": "3300px",
        "3xl": "2200px",
      },
    },
  },
  plugins: [],
};
