/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "srm-blue":"#0C4DA2",
        "snow-white":"#F3F6FB"
      },
    },
  },
  plugins: [],
}