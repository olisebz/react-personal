/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "deep-blue-ligher": "#0A0A3D",
        blue: "#2563eb",
        red: "#DC4492",
        green: "#4ade80",
        grey: "#ededed",
        purple: "#6b34c8",
        "purple2": "#8b5af7",
        "purple-dark": "#4a2491",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-violet":
          "linear-gradient(81.66deg, theme('colors.violet.600') 7.21%, theme('colors.violet.600') 45.05%, theme('colors.violet.600') 78.07%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add this line to include the forms plugin which includes the backdrop-filter utilities
  ],
};
