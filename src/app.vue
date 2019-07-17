<script>
import appConfig from '@src/app.config'

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
  data() {
    return {
      currentUser: '',
    }
  },
  created() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      this.$http
        .get(`/newbo/api/auth/user?cacheSlayer=${new Date().getTime()}`)
        .then((response) => {
          this.currentUser = response.body
        })
    },
  },
}
</script>

<template>
  <div v-if="currentUser" class="baseStyle">
    <BaseHeader :current-user="currentUser" />
  </div>
</template>

<style lang="scss">
@import '~@knonginda/base/src/design/index.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  @extend %typography-small;

  margin: 0;
  background: $color-body-bg;
}

.baseStyle {
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}
</style>
