/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "12" :"12%",
        '23': '23%',  
        '31' : '31%',
        '48' :'48%',
        "28" : "28%",
        "70" :"70%"
      },

      height:{
        "450" : "450px"
      }
    },
  },
  plugins: [],
}