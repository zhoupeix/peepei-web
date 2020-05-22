import colors from 'vuetify/es5/util/colors'
import dotenv from 'dotenv'
dotenv.config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'keywords', content:'棋牌游戏开发,棋牌公司杭州,棋牌游戏定制,手机棋牌开发公司,棋牌app开发,棋牌源码出售,地方麻将定制，棋牌软件开发，棋牌平台制作,手机棋牌定制开发公司,棋牌游戏开发哪家好,杭州棋牌定制,浙江棋牌游戏开发,温州手机棋牌开发'},
      { name: 'description', content:"【西窗游戏工作室】专注于地方特色棋牌游戏定制开发，手机棋牌游戏APP开发，提供棋牌游戏平台制作，地方麻将定制,棋牌源码出售，棋牌搭建外包技术服务，是一家业界知名的棋牌游戏开发公司"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {


  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      
    }
  },

  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    }

    //或者

    //警告 webpack 的性能提示
  //   performance: {
  //     hints:'warning',
  //     //入口起点的最大体积
  //     maxEntrypointSize: 50000000,
  //     //生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     //只给出 js 文件的性能提示
  //     assetFilter: function(assetFilename) {
  //       return assetFilename.endsWith('.js');
  //     }
  //   }
  }

}
