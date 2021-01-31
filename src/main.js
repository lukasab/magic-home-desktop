import Vue from 'vue'

import router from '@/router'

import App from '@/App.vue'

const files = require.context('@/components', true, /\.vue$/i)
files.keys().map((key) => {
  const id = `magic${key.split('/').pop().split('.')[0].replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()}`

  Vue.component(id, files(key).default)
})
 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
