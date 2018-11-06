const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portal-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portal Concrelit' },
      { hid: 'description', name: 'google-site-verification', content: "qLHlnawy_EkPlETzJYROs-4d8U9ZVJN9HoCMP8XJbJ8" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script : [
      { src: 'js/jquery.min.js', type: "text/javascript" },
      { src: 'js/bootstrap.bundle.min.js', type: "text/javascript" },
      { src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
      { src: 'js/adsense.js', type:"text/javascript" }
    ]
  },

  css: [
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
    '~/assets/fonts/fontawesome-4.7/css/font-awesome.css'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff6501' },

  // /* Plugins */
  // plugins: ['~/plugins/facebook.js'],

  build: {
    extractCSS:true
  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  router: {

    extendRoutes (routes, resolve) {
      routes.push({
        name: 'notFound',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}

