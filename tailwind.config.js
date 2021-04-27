module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#8CFFFF',
        background: '#141414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
