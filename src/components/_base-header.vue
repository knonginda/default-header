<script>
import BaseTopBar from '@components/_base-top-bar'
import BaseNavBar from '@components/_base-nav-bar'

export default {
  components: {
    BaseTopBar,
    BaseNavBar,
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <header v-if="currentUser">
    <BaseTopBar :current-user="currentUser.sessionUser" />
    <BaseNavBar :current-user="currentUser" />
  </header>
</template>
