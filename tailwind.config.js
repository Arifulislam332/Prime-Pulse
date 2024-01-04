/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#1e212b",
        light: "#fafafa",
        gray: "#dedbd8",
        orange: "#f17300",
        cyan: "#64b6ac",
      },
    },
  },
  plugins: [],
};
