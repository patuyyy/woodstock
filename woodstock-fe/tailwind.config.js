/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      fontFamily:{
        title:["Koulen", "sans-serif"]
      },
      colors: {
        darkwood: '#0F0A01',
        lightOrange: '#B86822',
        darkOrange: '#8B380C',
        lightGreen: '#E1FFCF',
        leafGreen: '#5B8844',
        darkGreen: '#3B5934',
        black1: '#141414',
        black2: '#171717',
        black3: '#505050',
        white1: '#DDDDDD',
        white2: '#EEEEEE'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
}
