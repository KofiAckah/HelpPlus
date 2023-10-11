/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html", "./build/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#102E4A",
        secondary: {
          100: "#55C1FF",
          200: "#A682FF",
          300: "#715AFF",
          400: "#5EFCE8",
        },
      },
      fontFamily: {
        robBody: ["Roboto"],
        style: ["Satisfy"],
      },
    },
  },
  plugins: [],
};
