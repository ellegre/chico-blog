const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV  === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-image': `url('/img/2.jpeg')`,
        'texture-brick': `url('/img/texture.jpeg')`
      }),
      fontFamily: {
        caveat: ['Caveat', 'cursive']
      },
      fontSize: {

      },
      colors: {
        brand: {
          DEFAULT: "#0d9488",
          light: "#5eead4",
          dark: "#115e59"
        },
        gray: colors.blueGray
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },
      container: {

      }
    }
  },
  variants: {
    extend: {
      textColor: ['hover','active']
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
