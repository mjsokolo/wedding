/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Times New Roman", "serif"],
        sans: ["Montserrat", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
