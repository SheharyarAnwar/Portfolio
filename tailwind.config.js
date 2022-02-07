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
        grey: "#a9adc1",
        "grey-light": "#282828",
        link: "hsl(230deg, 100%, 67%)",
        aqua: "rgb(0, 190, 255)",

        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.link"),
              "text-decoration": "none",
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.gray.200"),
              "margin-left": 0,
              "margin-right": 0,
              "scroll-margin-top": defaultTheme.spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
          },
        },
        lg: {
          css: {
            "h1,h2,h3,h4,h5,h6": {
              "margin-top": defaultTheme.spacing[16],
              "font-weight": defaultTheme.fontWeight["bold"],
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
