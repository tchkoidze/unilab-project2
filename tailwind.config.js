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
      desktop: "1920px",
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('../assets/images/mobile/image1.png')",
      },
    },
  },
  plugins: [],
};
