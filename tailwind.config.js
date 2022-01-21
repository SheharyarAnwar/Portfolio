const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"],
  content: [],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        body: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: "#00022e",
        pink: "#ff0081",
        green: "#17fbff",
        white: "#fff6ff",
        blue: "#002b5c",
      },
    },
  },
  plugins: [],
};
