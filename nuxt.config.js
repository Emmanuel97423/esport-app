const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/esport-app/',
        },
      }
    : {}

export default {
  ...routerBase,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'esport-app',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/fonts.scss',
    '~assets/scss/queries.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/bracketsViewer.client.js',
    '~/plugins/auth.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-mq'],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    Loaders: {
      limit: 0,
    },
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId:
        '938819892013-b1qb6cpgn6mltrht19nf4i4lamdla786.apps.googleusercontent.com',
    },
  },
  privateRuntimeConfig: {},
  //PLUGIN SASS
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    },
  },
}
