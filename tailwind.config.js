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
      scale: {
        'flip': '-1',
      },
      // keyframes: {
      //   roll: {
      //     '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
      //     '50%': { transform: 'translateX(20rem) rotate(385deg)' }
      //   }
      // },
      // animations: {
      //   roll: 'roll 3s ease-in-out infinite'
      // }
    },
    fontFamily: {
      caveat: 'Caveat',
      opensans: 'Open Sans',
      majormonodisplay: 'Major Mono Display',
      roboto: 'Roboto',
      robotomono: 'Roboto Mono',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
