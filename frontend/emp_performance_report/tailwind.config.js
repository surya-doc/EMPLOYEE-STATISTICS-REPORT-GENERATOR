/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': {'max': '2000px'},
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '950px'}, // Adjusted to 767px to hide below md
      'sm': {'max': '639px'},
      'xs': {'max': '479px'},
      'xxs': {'max': '359px'},
    },
  },
  plugins: [],
};
