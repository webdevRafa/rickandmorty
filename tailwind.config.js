/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
    'white': '#ffffff',
    'black': '#02141a',
    'green': '#33d608',
    'red': '#D60808',
    'blue-dark': '#02afc5',
    'blue-med': '#35c9dd',
    
    },
    extend: {
      fontFamily: {
        custom: ['Bebas']
      },
    },
  },
  plugins: [],
}

