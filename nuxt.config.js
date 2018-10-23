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
      { name: 'google-site-verification', content="qLHlnawy_EkPlETzJYROs-4d8U9ZVJN9HoCMP8XJbJ8" },
      { hid: 'description', name: 'description', content: 'Portal Concrelit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script : [
      // { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },
      // { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
      { src: 'js/jquery.min.js' },
      { src: 'js/bootstrap.bundle.min.js' },
      { src: 'js/carousel.js' }
    ]
  },
  css: [
    { src: '~/assets/css/style.css' },
    { src: '~/assets/css/custom.css' },
    { src: '~/assets/fonts/fontawesome-4.7/css/font-awesome.css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS:true,    

    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },

    vendor: ['jquery'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {

  }
}

