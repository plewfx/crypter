/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './index.html',
    ],
    theme: {
      screens: {
        'lg': {'max': '1024px'},
        'sm': {'max': '600px'},   
      },
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif']
      },
      fontSize: {
        '12': '0.83vw',
        '12-lg': '1.17vw',
        '14': '0.97vw',
        '14-lg': '1.36vw',
        '24': '1.66vw',
        '24-lg': '2.34vw',
        '24-sm': '6.4vw',
      },
      lineHeight: {
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '610%',
        170: '170%',
        180: '180%',
        190: '190%',
        200: '200%',
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
          '1-hover': 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), #3772FF',
          '2': '#9757D7',
          '3': '#EF466F',
          '4': '#45B26B',
        },
        'secondary': {
          '2': '#E4D7CF',
          '3': '#FFD166',
          '4': '#CDB4DB',
        },
      },
      padding: {
        '8': '0.55vw',
        '8-lg': '0.78vw',
        '10': '0.7vw',
        '10-lg': '0.97vw',
        '12': '0.83vw',
        '12-lg': '1.17vw',
        '16': '1.11vw',
        '16-lg': '1.56vw',
        '20': '1.38vw',
        '20-lg': '1.95vw', 
        '24': '1.66vw',
        '24-lg': '2.34vw',
        '24-sm': '6.4vw',
        '48-sm': '12.8vw'
      },
      gap: {
        '8': '0.55vw',
        '8-lg': '0.78vw',
        '24': '1.66vw',
        '32': '2.22vw',
      },
      margin: {

      },
      borderRadius: {
        '2': '0.138vw',
        '6': '0.416vw',
        '8': '0.555vw',
        'circle': '50%',
      },
      borderWidth: {
        '1': '0.07vw',
        '1-lg': '0.097vw',
        '2': '0.14vw',
        '2-lg': '0.195vw',
      },
    }
  }