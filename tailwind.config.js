/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "black":"#1b1b1b",
        "white":"#f5f5f5",
        "primary":"#863E96",
        "Primarydark":"#58E6D9",
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)'
      }
    },
  },
  plugins: [],
};
