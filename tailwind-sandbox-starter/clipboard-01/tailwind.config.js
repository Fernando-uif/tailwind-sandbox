module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        stringCyan: "hsl(171,66%,44%)",
        lightBlue: "hsl(208,100%,69%)",
        darkGrayishBlue: "hsl(210,10%,33%)",
        grayishBlue: "hsl(201, 11%,66%",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
};
