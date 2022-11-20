/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'highlight' : ["Bebas Neue", "sans-serif"],
      'headings' : ["Neomatric", "sans-serif"]
    },

    colors: {
      transparent : "transparent",
      white : "#FFFFFF",

      blue : "#021033",

      light_50 : "#6FCF97",
      green_100 : "#27AE60",
      green_200 : "#05972A",
      green_300 : "#05A52E",

      gray_50 : "rgba(51, 51, 51, 0.5)",
      gray_100 : "rgba(242, 242, 242, 0.5)",
      gray_200 : "#828282",
      gray_300 : "rgba(217, 217, 217, 0.1)",
      gray_400 : "rgba(217, 217, 217, 0.79)",
      gray_500 : "#BDBDBD",
      gray_600 : "#D9D9D9",
      gray_700 : "#E0E0E0",
      gray_800: "#F2F2F2",

      black_100 : "#1E1E1E",
      black_200 : "#000000",
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    extend: {
      spacing: {
        '17' : '17px',
        '26' : '26px',
        '53' : '53px',
        '64' : '64px',
        '100' : '100px',
      }
    },
  },
  plugins: [],
}
