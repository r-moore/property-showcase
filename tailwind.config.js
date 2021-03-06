const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['index.html', './src/**/*.{ts,tsx}'],
  minify: true,
  theme: {
    extend: {
      translate: {
        200: '200%',
      },
      fontSize: {
        '2xs': '.65rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      mirage: {
        DEFAULT: '#1C2536',
        50: '#D7DEEA',
        100: '#BCC7DC',
        200: '#869AC0',
        300: '#546FA1',
        400: '#384A6C',
        500: '#1C2536',
        600: '#171E2C',
        700: '#121722',
        800: '#0C1018',
        900: '#07090E',
      },
      sand: {
        DEFAULT: '#DEAD50',
        50: '#FBF5EA',
        100: '#F8EDD9',
        200: '#F1DDB7',
        300: '#EBCD95',
        400: '#E4BD72',
        500: '#DEAD50',
        600: '#CF9527',
        700: '#A0731E',
        800: '#705115',
        900: '#412F0C',
      },
      teal: {
        DEFAULT: '#04C2CC',
        50: '#E5FDFE',
        100: '#C7FBFE',
        200: '#8BF7FD',
        300: '#4FF3FC',
        400: '#13EFFA',
        500: '#04C2CC',
        600: '#03979F',
        700: '#026C72',
        800: '#014245',
        900: '#001718',
      },
    },
  },
};
