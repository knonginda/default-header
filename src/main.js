import Vue from 'vue'
import App from './app'

import '@knonginda/base'
import '@components/_globals'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
