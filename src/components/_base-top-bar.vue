<script>
import { format } from 'date-fns'

export default {
  computed: {
    loginTime: () => format(new Date(), 'MM/DD/YYYY hh:mm:ss'),
  },
}
</script>

<template>
  <div class="bar">
    <div class="left">
      <BaseFasIcon :name="['far', 'clock']" />
      Previous Login: {{ loginTime }}
    </div>
    <ul class="right">
      <li
        ><BaseFasIcon class="icon" :name="['far', 'user-circle']" />Jett Liu</li
      >
      <li>
        <a href="/logout" class="logout"
          ><BaseFasIcon class="icon" name="sign-out-alt" />Sign Out</a
        >
      </li>
      <li class="dropdown userRole">
        <div class="dropdownToggle"
          ><BaseFasIcon class="icon" name="cog" />User Role</div
        >
        <ul class="dropdownMenu">
          <li>
            <a href="#">Administrator</a>
          </li>
          <li>
            <a href="#">Medicare Sales</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '~@knonginda/base/src/design/index.scss';

.bar {
  display: flex;
  justify-content: space-between;
  padding: 7px 10px 6px 10px;
  font-size: 14px;
  color: $medium-grey;
  background-color: $lightestx-grey;

  .icon {
    margin-right: 5px;
  }
}

.left > span {
  vertical-align: sub;
}

.right {
  display: flex;

  > li {
    display: flex;
    margin-left: 20px;
  }
}

.logout {
  color: $medium-grey;
}

.dropdownMenu {
  position: absolute;
  top: 17px;
  right: 0;
  z-index: $layer-dropdown-z-index;
  display: none;
  min-width: 220px;
  min-width: 160px;
  padding: 5px 0;
  text-align: left;
  background-color: $color-modal-bg;
  border: 1px solid $color-modal-border;
  box-shadow: $color-modal-box-shadow;

  > li a {
    display: block;
    padding: 5px 20px;
    clear: both;
    color: $color-text;
    white-space: nowrap;

    &:hover {
      color: #fff;
      background-color: lighten($brand-green, 5%);
    }
  }
}

.dropdown {
  position: relative;

  &:hover {
    > .dropdownMenu {
      display: block;
    }
  }
}

.dropdownToggle {
  cursor: pointer;
}
</style>
