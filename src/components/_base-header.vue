<script>
import BaseTopBar from '@components/_base-top-bar'
import BaseNavBar from '@components/_base-nav-bar'

export default {
  components: {
    BaseTopBar,
    BaseNavBar,
  },
  data: () => {
    return {}
  },
  created() {
    this.getData()
    this.getAuthData()
  },
  methods: {
    getData() {
      console.log('ready to logout')
      this.$http.get('/ehi/sessionSync/bo-session-sync', true).then(
        (response) => {
          setTimeout(() => {
            console.log(response)
            window.location.href = '/bov2/login.html'
          }, 5000)
        },
        (response) => {
          console.warn(response)
        }
      )
    },
    getAuthData() {
      this.$http
        .get(`/newbo/api/auth/user?cacheSlayer=${new Date().getTime()}`)
        .then(
          (response) => {
            console.log(response)
          },
          (response) => {
            console.warn(response)
          }
        )
    },
  },
}
</script>

<template>
  <header>
    <BaseTopBar />
    <BaseNavBar />
  </header>
</template>
