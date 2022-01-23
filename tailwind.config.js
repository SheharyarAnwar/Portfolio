const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"],
  content: [],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        body: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: "#1d1d1d",
        "navy-accent": "#181818",
        pink: "#ff0081",
        green: "#17fbff",
        white: "#fff6ff",
        grey: "#909096",
        "grey-light": "#282828",
        blue: "#002b5c",
      },
    },
  },
  plugins: [],
};
