/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kalnia: ["Kalnia", "serif"],
      roboto: ["Roboto", "san-serif"],
    },
    screens: {
      tablet: "800px",
      "medium-desktop": "1024px",
      desktop: "1920px",
      lg: "1280px",
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('../assets/images/mobile/image1.png')",
      },
      colors: {
        black: "#424244",
        orange: "#FF6700",
      },
    },
  },
  plugins: [],
};
