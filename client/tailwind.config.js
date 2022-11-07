/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        mainColor: "#0c111B",
        sliderColor: "#030B17",
        sidebarColor:"#192133",
        formColor: "#182030",
        searchContainerColor:"#0D121C",
        searchItemColor: "#192133"
      },
      screens: {
        'xs'  : "425px",
        'ss'  : "375px",
        'xss' : "320px"
      },
      backgroundImage: {
        'kidsText': "url('https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg')"
      }
    },
  },
  plugins: [],
}