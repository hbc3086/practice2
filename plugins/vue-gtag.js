import Vue from 'vue';
import VueGtag from 'vue-gtag';

/**
Vue.use(VueGtag, {
  config: {
    id: 'G-VTRWF11C8S'
  }
})
 */

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: {
      id: 'G-VTRWF11C8S',	// 측정 ID
    },
    appName: 'allOk',
  }, app.router)
}
