/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors:{
        primary:"#01D167",
        secondary:"#325BAF",
        cardAction:"#EDF3FF",
        cardActionText:"#0C365A"
      }
    }
  },
  plugins: []
}
