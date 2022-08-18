/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1360px",
    },
    extend: {
      colors: {
        orange: "#FF6A00",
        bor: "rgba(0,0,0,0.15);",
      },
      boxShadow: {
        navbar: "rgb(0 0 0 / 5%) 0 0 20px 3px",
        menu: "0 7px 13px 0 rgb(0 0 0 / 10%);",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme, addUtilites }) => {
      addComponents({});
    }),
  ],
};
