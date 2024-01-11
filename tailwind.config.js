/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

const pallete = {
  primary: {
    50: '#EEEEFB',
    100: '#DDDDF7',
    200: '#DDDDF7',
    400: '#7073E4',
    500: '#5457D8',
    600: '#474ACB',
    700: '#474ACB',
    800: '#30329B',
    900: '#30329B',
  },
  black: {
    main: '#1D2025',
    light : '#2A2E39',
    dark : '#16181C',
  },
  common: {
    black: '#2A2E39',
    white: '#FFFFFF',
  },
  grey: {
    50: '#16181C',
    100:'#E9EDF2',
    200: '#DEE3E9',
    400: '#CACCD0',
    500: '#A5A9B0',
    700: '#7D7F86',
    800: '#525458',
    900: '#3D3F44',
  },
  info: {
    main: '#2C9DEF',
    light: '#3D3F44',
    dark: '#1A5E8F',
  },
  success: {
    main: '#85CD00',
    light: '#F0FADD',
    dark: '#507B00'
  },
  warning: {
    main: '#F8B70F',
    light:'#FEF8E7',
    dark : '#956E09'
  },
  error: {
    main: '#DC2E16',
    light: '#FBEAE8',
    dark: '#B02512'
  },
  state: {
    focused: '#5457D81A',
    hovered: '#7D7F861A'
  }
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
      primary: {
        text: {
          default: pallete.primary[500],
          hovered: pallete.primary[600],
        },
        background: {
          default: pallete,
          hovered: pallete,
          disabled: pallete
        },
        border: {
          focus:pallete,
          active: pallete
        }
      },
      track: {
        background: pallete
      },
      background: {
        main:pallete,
        section: pallete
      },
      text: pallete.black.light
    },
    dark: {
      primary: {
        text: {
          default: '#7073E4'
        }
      }
    }
  })],
};
