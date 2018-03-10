import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import App from './App'
import router from './router'

Vue.use(Buefy)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')