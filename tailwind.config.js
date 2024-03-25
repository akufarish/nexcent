/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#28CB8B",
        },
        secondary: {
          DEFAULT: "#263238",
        },
        info: {
          DEFAULT: "#2194f3",
        },
        silver: {
          DEFAULT: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};
