export default {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#000000',
      secondary: '#293133',
      tercary: '#474f40',
      danger: '#B36700',
      blueGray: '#11102A',
      ligthBlue: '#1E1D35',
      white: '#ffffff',
      black: '#000000',
    }),
    textColor: (theme) => theme('colors'),
    textColor: {
      primary: '#c0c0c0',
      secondary: '#293133',
      tercary: '#474f40',
      danger: '#B36700',
      white: '#FFFFFF',
      blue: '#0096c7',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
}
