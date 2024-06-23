import NuxtConfiguration from '@nuxt/config'

declare const process;

const config: NuxtConfiguration = {
  // Type or Press `Ctrl + Space` for autocompletion
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Martina a Jakub 28.9.2024",
    htmlAttrs: {
      lang: "sk",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-MJ-outline.png?v8' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' },
      { rel: 'stylesheet', href: '/common-css/bootstrap.css' },
      { rel: 'stylesheet', href: '/common-css/font-icon.css' },
      { rel: 'stylesheet', href: '/styles.v1.css' },
      { rel: 'stylesheet', href: '/responsive.v1.css' }
    ],
    script: [
      { src: '/common-js/jquery-3.1.1.min.js', type: "application/javascript" },
      { src: '/common-js/tether.min.js', type: "application/javascript" },
      { src: '/common-js/bootstrap.js', type: "application/javascript" },
      { src: '/common-js/jquery.countdown.min.js', type: "application/javascript" },
      { src: 'https://kit.fontawesome.com/db99df463b.js', type: "application/javascript" },
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
