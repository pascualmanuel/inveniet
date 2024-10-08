/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ssm: "450px",
      
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      med: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        iDBlue: "#161C2D",
        iLBlue: "#0057BE",
        iBlue: "#021E5F",
        iGrey: "#F4F7FA",
        iGrey2: "#D9D9D9",
        iGrey3: "#8D9098",
        iBlueGrey: "#2C3242",
      },
    },
  },
  plugins: [],
};
