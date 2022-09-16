module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CompanyAdvisor',
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      // { name: "viewport", content: "width=1680, user-scalable=yes" },
      {
        name: "viewport",
        content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "기업대출, 정책자금 다된다에서 다된다!",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "중소기업대출 다된다",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "기업대출, 정책자금 다된다에서 다된다!",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/allok/img/main/main_v2.jpg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/allok/img/favicon.ico",},
      { rel: "stylesheet ", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/animate.min.css" },
      { rel: "stylesheet ", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/swiper.min.css" },
    ],
    // script: [
    //   {
    //     hid: 'stripe',
    //     src: '//wcs.naver.net/wcslog.js',
    //     defer: true,
    //     callback: ()=>{
    //       if(!wcs_add) var wcs_add = {};
    //       wcs_add["wa"] = "154b3f18ed64270";
    //       if(window.wcs) {
    //         wcs_do();
    //       }
    //     }
    //   }
    // ]
  },
  // css: ["~/static/scss/style.scss","animate.css"],
  css: ["~/static/scss/style.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // Server MiddleWare
  serverMiddleware:[
    '~/api/index.js'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/plugins/indexPlugins.js',
    '~/plugins/vue-gtag.js',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === "production" ? true : false,
    postcss: {
      plugins: {
        autoprefixer: {
          grid: process.env.NODE_ENV === "production" ? true : false,
          flexbox: process.env.NODE_ENV === "production" ? true : false,
        },
      },
    },
  },
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    "@nuxt/postcss8",
  ],
}

