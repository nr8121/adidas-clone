/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      flexBasis: {
        '1/8' : '12.5%',
        '3/8' : '37.5%',
        '5/8' : '62.5%',
        '7/8' : '87.5%',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

