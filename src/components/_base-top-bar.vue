<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeRole(event, roleName) {
      event.target.href =
        event.target.href + '&bo.returnUrl=' + window.location.href
    },
  },
}
</script>

<template>
  <div class="bar">
    <div class="left">
      <span><BaseFasIcon :name="['far', 'clock']"/></span>
      <span v-if="currentUser.preFailDate"
        >Previous Login Failed:
        {{
          currentUser.preFailDate
            | moment('timezone', 'America/Los_Angeles', 'MM-DD-YYYY hh:mm:ss A')
        }}</span
      >
      <span v-if="currentUser.preLoginDate"
        >Previous Login:
        {{
          currentUser.preLoginDate
            | moment('timezone', 'America/Los_Angeles', 'MM-DD-YYYY hh:mm:ss A')
        }}</span
      >
      <span
        >Last Login:
        {{
          currentUser.lastLoginDate
            | moment('timezone', 'America/Los_Angeles', 'MM-DD-YYYY hh:mm:ss A')
        }}</span
      >
    </div>
    <ul class="right">
      <li>
        <BaseFasIcon class="icon" :name="['far', 'user-circle']" />
        {{ currentUser.firstName }} {{ currentUser.lastName }} (<span>{{
          currentUser.currentRole.roleName
        }}</span
        >)
      </li>
      <li>
        <a href="/ehi/Logout.ds?mcei.app.terminalID=__tid__1_" class="logout">
          <BaseFasIcon class="icon" name="sign-out-alt" />
          Sign Out
        </a>
      </li>
      <li class="dropdown userRole">
        <div class="dropdownToggle">
          <BaseFasIcon class="icon" name="cog" />
          User Role
        </div>
        <ul class="dropdownMenu">
          <li v-for="(role, index) in currentUser.roles" :key="index">
            <a
              :href="
                `/ehi/MainMenu.ds?mcei.app.terminalID=__tid__1_&mcei.html.screen=MainMenu&ehi.JAVASCRIPT_ENABLED=TRUE&bo.current_principal=${
                  role.roleID
                }`
              "
              :class="{
                active: role.roleID === currentUser.currentRole.roleID,
              }"
              @click="changeRole($event, role.roleName)"
            >
              {{ role.roleName }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '~@bo/base/design/index.scss';

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

.left {
  display: flex;
  align-items: center;

  > span {
    margin-right: 10px;
  }
}

.right {
  display: flex;

  > li {
    display: flex;
    align-items: center;
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

    &:hover,
    &.active {
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
