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
}
</script>

<template>
  <div class="baseStyle">
    <BaseHeader />
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
  @extend %typography-medium;

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
