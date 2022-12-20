/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iowan: ["Iowan Old Style", "san-serif"],
        open: ["Open Sans", "san-serif"],
        prime: ["Courier Prime", "san-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
