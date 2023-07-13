module.exports = {
  content: [
    './**/*.html',
    './**/*.md',
    './_assets/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
