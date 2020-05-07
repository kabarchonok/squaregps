import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
