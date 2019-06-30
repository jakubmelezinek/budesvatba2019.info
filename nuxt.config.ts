import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Jana & Pepa 19.10.2019",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Courgette|Kaushan+Script|Quando&display=swap' },
      { rel: 'stylesheet', href: '/common-css/bootstrap.css' },
      { rel: 'stylesheet', href: '/common-css/fluidbox.min.css' },
      { rel: 'stylesheet', href: '/common-css/font-icon.css' },
      { rel: 'stylesheet', href: '/styles.css' },
      { rel: 'stylesheet', href: '/responsive.css' }
    ],
    script: [
      { src: '/common-js/jquery-3.1.1.min.js', type: "application/javascript", async: true, defer: true },
      { src: '/common-js/tether.min.js', type: "application/javascript", async: true, defer: true },
      { src: '/common-js/bootstrap.js', type: "application/javascript", async: true, defer: true },
      { src: '/common-js/jquery.countdown.min.js', type: "application/javascript", async: true, defer: true },
      { src: '/common-js/jquery.fluidbox.min.js', type: "application/javascript", async: true, defer: true },
      { src: '/common-js/scripts.js', type: "application/javascript", async: true, defer: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.ts',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    middleware: 'i18n',
  }
};


export default config
