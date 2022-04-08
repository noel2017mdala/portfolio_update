module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "60px",
      // => @media (min-width: 576px) { ... }

      smd: "640px",

      md: "950px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#2C2C2C",
        secondary: "#FFB533",
        primary2: "#313131",
        secondary2: "#00BFA5",
      },
    },
  },
  plugins: [],
};
