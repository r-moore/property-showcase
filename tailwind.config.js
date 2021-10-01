module.exports = {
  mode: 'jit',
  purge: ['.index.html', './src/**/*.{ts,tsx}'],
  minify: true,
  theme: {
    colors: {
      gray: {
        200: '#e8eafc',
      },
      blue: {
        900: '#141e30',
        700: '#1c2536',
      },
      teal: {
        400: '#04c2cc',
      },
    },
  },
};
