import Vue from 'vue'
import router from './router'
import App from './App.vue'

import '../assets/app.css'

// eslint-disable-next-line no-new
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
