/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', "sans-serif"],
      },
      colors:{
        'primary':{
          100:"#678C92",
          200:"#486A6F",
          300:"#4397A4",
          400:"#C6DBFF",
          500:"#E1EBFA",
          700:"#5BCCDE",
          900:"#C6DBFF",

        }
      }
    },
  },
  plugins: [],
}
