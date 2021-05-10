module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#ffd8a6',
        text: '#ffffff',
        background: '#141414',
      },
    },
    fontFamily: {
      caveat: 'Caveat',
      opensans: 'Open Sans',
      majormonodisplay: 'Major Mono Display',
      roboto: 'Roboto'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
