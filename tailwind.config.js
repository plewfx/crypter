/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './index.html',
    ],
    theme: {
      screens: {
        'desktop': {'max': '1440px'},
        'tablet': {'max': '1024px'},
        'mobile': {'max': '600px'},   
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif']
      },
      fontSize: {
        24: '1.66vw',
      },
      lineHeight: {
        110: '110%'
        120: '120%'
        130: '130%'
        140: '140%'
        150: '150%'
        160: '610%'
        170: '170%'
        180: '180%'
        190: '190%'
        200: '200%'
      },
      colors: {
        'white': '#FFFFFF',
        'neutrals': {
          '1': '#141416',
          '2': '#23262F',
          '3': '#353945',
          '4': '#777E90',
          '5': '#B1B5C3',
          '6': '#E6E8EC',
          '7': '#F4F5F6',
          '8': '#FCFCFD'
        },
        'primary': {
          '1': '#3772FF',
          '2': '#9757D7',
          '3': '#EF466F',
          '4': '#45B26B'
        },
        'secondary': {
          '2': '#E4D7CF',
          '3': '#FFD166',
          '4': '#CDB4DB',
        },
      },
      boxShadow: {

      },
      padding: {

      },
      gap: {
        8: '0.55vw',
      },
      margin: {

      },
      borderRadius: {

      },
      backgroundImage: {

      }
    }
  }