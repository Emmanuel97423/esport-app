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
      primary: '#03071E',
      secondary: '#293133',
      tercary: '#474f40',
      danger: '#B36700',
      blueGray: '#11102A',
      ligthBlue: '#1E1D35',
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
        'bg-login': "url('@/assets/images/background/login/Hero_still.jpg')",
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
}
