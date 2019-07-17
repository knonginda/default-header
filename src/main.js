import Vue from 'vue'
import App from './app'

import '@knonginda/base'
import '@components/_globals'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// Check current user session
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    checkAuth(response)
  })
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')

function checkAuth(response) {
  if (response.status === 401) {
    window.location.href = '/ehi/BOLogin.ds'
  } else if (response.status === 403) {
    window.location.href = '/bov2/index.html#/forbid'
  }
}
