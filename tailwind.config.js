const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        // body: ["Nunito", ...defaultTheme.fontFamily.sans],
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
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme("colors.gray.700"),
      //       a: {
      //         color: theme("colors.blue.500"),
      //         "&:hover": {
      //           color: theme("colors.blue.700"),
      //         },
      //         code: { color: theme("colors.blue.400") },
      //       },

      //       thead: {
      //         borderBottomColor: theme("colors.gray.200"),
      //       },
      //       code: { color: theme("colors.pink.500") },
      //       "blockquote p:first-of-type::before": false,
      //       "blockquote p:last-of-type::after": false,
      //     },
      //   },
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
