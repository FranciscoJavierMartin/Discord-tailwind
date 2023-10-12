// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B9BBBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225',
        },
      },
      fontFamily: {
        sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
        title: ['Ginto', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
