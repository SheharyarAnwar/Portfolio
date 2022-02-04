const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/layouts/**/*.tsx",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
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
      //       color: theme("colors.white"),
      //       a: {
      //         color: theme("colors.green"),
      //         "&:hover": {
      //           color: theme("colors.blue.600"),
      //         },
      //       },
      //       code: { color: theme("colors.pink") },
      //       blockquote: {
      //         borderLeftColor: theme("colors.gray.700"),
      //         color: theme("colors.gray.300"),
      //       },
      //       "h1,h2,h3,h4,h5,h6": {
      //         color: theme("colors.green"),
      //         "scroll-margin-top": defaultTheme.spacing[32],
      //       },
      //       hr: { borderColor: theme("colors.gray.700") },
      //       ol: {
      //         li: {
      //           "&:before": { color: theme("colors.gray.500") },
      //         },
      //       },
      //       ul: {
      //         li: {
      //           "&:before": { backgroundColor: theme("colors.gray.500") },
      //         },
      //       },
      //       strong: { color: theme("colors.gray.100") },
      //       thead: {
      //         color: theme("colors.gray.100"),
      //         borderBottomColor: theme("colors.gray.600"),
      //       },
      //       tbody: {
      //         tr: {
      //           borderBottomColor: theme("colors.gray.700"),
      //         },
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
