/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
      colors: {
      'blue-bg': '#08415C',
      'orange-menu' : '#AA4100',
      'green-content' : '#BEEE62',
      'blue-content' : '#0496FF',
      'pink-content' : '#D81159'
    },
    extend: {
      height: {
        'screen/1': '60vh',
        'screen/2': '50vh',
        'screen/3': '33vh',
        'screen/4': '25vh',
      },
      width: {
        'screen/2-5': '55vw',
        'screen/2': '50vw',
        'screen/3': '33vw',
        'screen/4': '25vw',
      },
    
    },
  },
  plugins: [],
};
