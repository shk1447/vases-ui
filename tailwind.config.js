/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
// hsla
// hue : primary, secondary
// saturation : 0은 회색
// lightness : 밝기
const pallete = {
  
}

module.exports = {
  darkMode:'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: pallete ,
      fontFamily: {
        sans:["MinSans"]
      }
    },
  },
  plugins: [createThemes({
    light: {
      
    },
    dark: {
      
    }
  })],
};
