const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1150px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      PColor: "#2b2e4a",
      SColor: "#e84545",
      TColor: "#903749",
      AColor: "#53354a",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      TransColor: "#988f8f",
      whiteTr: "rgba(255,255,255,0.94)",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "35/4": "85%",
      full: "100%",
      "1/4h": "25vh",
      "1/2h": "50vh",
      "3/4h": "75vh",
      "35/4h": "85vh",
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "35/4": "85%",
      full: "100%",
      "1/4h": "25vh",
      "1/2h": "50vh",
      "3/4h": "75vh",
      "35/4h": "85vh",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
