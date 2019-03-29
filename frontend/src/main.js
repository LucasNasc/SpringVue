import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}
 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
