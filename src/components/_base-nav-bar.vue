<script>
import { NAVBAR_DATA } from '@resources'

export default {
  data: () => {
    return {
      menus: NAVBAR_DATA,
    }
  },
  computed: {
    getPermission() {
      const currentUser = {
        name: 'Jett Liu',
        resources: [
          'RIGHT_GLOBAL_SEARCH',
          'RIGHT_VIEW_EDIT_SCREEN',
          'RIGHT_VIEW_HTML_APP',
          'RIGHT_VIEW_UTILITIES',
          'RIGHT_VIEW_WK_QUEUE',
          'RIGHT_MAINTAIN_FFM_CREDENTIAL',
          'RIGHT_MANAGE_IFP_CALL_VOLUME',
          'RIGHT_EDIT_ROLE_Carrier Sync Standard',
          'RIGHT_EDIT_ROLE_XM Developer',
          'RIGHT_CAN_SUBMIT_TEXT_OPT_IN',
          'RIGHT_VIEW_PRINT_SG_PDF',
          'RIGHT_EDIT_ROLE_Extranet - Lead Seller',
          'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
          'RIGHT_SAVE_LETTER_TEMPLATE',
          'RIGHT_CROSS_SELL_ATTEMPT',
          'RIGHT_CROSS_SELL_COMMITMENT',
          'RIGHT_EDIT_ROLE_Extranet - Lead Buyer',
          'RIGHT_CARRIER_ADMINISTRATION',
          'RIGHT_EDIT_ROLE_Email Admin',
          'RIGHT_EDIT_ROLE_Extranet - Carrier Bidder',
          'RIGHT_EDIT_ROLE_Extranet - EOD Read Only',
          'RIGHT_EDIT_ROLE_Extranet - EOD with XML',
          'RIGHT_EDIT_ROLE_Finance',
          'RIGHT_EDIT_ROLE_Outbound Rep',
          'WEBCONSOLE.BASIC',
          'RIGHT_LEAD_GLOBAL_SEARCH',
          'RIGHT_START_TPI_APPLICATION',
          'RIGHT_UPLOAD_DOCUMENT',
          'RIGHT_VIEW_AUTO_EMAIL_LEADS',
          'RIGHT_VIEW_EXCEPTIONS',
          'RIGHT_VIEW_HYPERLINK_APPLICATION_STATUS',
          'RIGHT_VIEW_IFP_DOC_MANAGER',
          'RIGHT_VIEW_OUTGOING_TEMPLATE',
          'RIGHT_VIEW_SEARCH',
          'RIGHT_VIEW_UNIV_WRK_QUEUE',
          'RIGHT_RESEND_APPLICATION',
          'RIGHT_TO_DRX_DATA_ENTRY',
          'RIGHT_TRIGGER_UHC_ACE',
          'RIGHT_CAN_SUBMIT_TCPAS',
          'RIGHT_EDIT_ROLE_Carrier Administrator',
          'RIGHT_TODAY_OPPORTUNITY',
          'RIGHT_EDIT_ROLE_Carrier Sync Admin',
          'RIGHT_SMBO_PILOT_TESTING',
          'RIGHT_VIEW_MEDICARE_MANAGER_OVERRIDE_CODE_ADMIN',
          'RIGHT_EDIT_ROLE_Medicare Sales',
          'RIGHT_SAVE_DOC_SERVICE_TICKET',
          'RIGHT_EDIT_ROLE_Medicare Developer',
          'RIGHT_SALES_PROGRAMS',
          'RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT',
          'RIGHT_EDIT_ROLE_Finance - Rider Admin',
          'RIGHT_VIEW_MEDICARE_OUTBOUND_SCRIPT',
          'RIGHT_EDIT_ROLE_External Supervisor',
          'RIGHT_ADD_MEMBERS',
          'RIGHT_EDIT_ROLE_Auction Access (CR)',
          'RIGHT_EDIT_ROLE_Auction Access (Finance)',
          'RIGHT_EDIT_ROLE_Clerk',
          'RIGHT_EDIT_ROLE_Extranet - EPI',
          'RIGHT_EDIT_ROLE_sbg-Sales Rep',
          'RIGHT_GENERAL_AGENT_MAINTEN',
          'RIGHT_IFP_ADD_RIDERS',
          'RIGHT_VIEW_MEDICARE_APPOINTMENT_SUMMARY',
          'RIGHT_VIEW_KEY_INFO',
          'RIGHT_VIEW_LEAD_SEARCH',
          'RIGHT_VIEW_SALES_REP_ASSIGN',
          'RIGHT_SENT_PASSWORD_RESET_EMAIL',
          'RIGHT_LIVE_OPS_MAPPING',
          'RIGHT_EDIT_ROLE_sbg-Retention Account Manager',
          'RIGHT_SMB_AGENT_DASHBOARD',
          'RIGHT_VIEW_KEYINFO_APPOINTMENTS',
          'RIGHT_AGENT_CONTROLLER_EDIT',
          'RIGHT_WC_REPORTING',
          'RIGHT_CREATE_SUBMITTED_APP_BATCH',
          'RIGHT_EDIT_ROLE_Customer Service',
          'RIGHT_EDIT_ROLE_Extranet - Benefit Administrator',
          'RIGHT_EDIT_ROLE_Reviewer',
          'RIGHT_VIEW_SGDOCMANAGER',
          'RIGHT_WRK_QUEUE_CREATION',
          'RIGHT_SAVE_PLAN_PROFILE',
          'RIGHT_VIEW_CREATE_NEW_LEAD',
          'RIGHT_MANAGE_IFP_CHAT_VOLUME',
          'RIGHT_SG_RTC_SCHEDULE',
          'RIGHT_EDIT_ROLE_MS Enrollment Specialist',
          'RIGHT_EDIT_AS',
          'RIGHT_TRANSCRIBE_SUBSIDY_DATA',
          'RIGHT_VIEW_SALES_LICENSING',
          'RIGHT_RESEND_T2S_TEXT_EMAIL',
          'RIGHT_SBG_TIER_RULE_MAINTENANCE',
          'RIGHT_VIEW_SUBSIDY_DATA',
          'RIGHT_AUTO_LOGIN_AGENT_PORTAL',
          'RIGHT_ADD_EMPLOYEES',
          'RIGHT_EDIT_MEMBERS',
          'RIGHT_EDIT_ROLE_Auction Access (Legal)',
          'RIGHT_EDIT_ROLE_External User',
          'RIGHT_EDIT_ROLE_Forms Administrator',
          'RIGHT_EDIT_ROLE_Partner Approver',
          'RIGHT_EDIT_ROLE_Supervisor',
          'RIGHT_EDIT_TRACKING_DATES',
          'RIGHT_VIEW_BATCH_ENTRY',
          'RIGHT_VIEW_COMPANY_INFO',
          'RIGHT_VIEW_SERVICE_TICKET',
          'RIGHT_WORK_SKIPPED_BATCH',
          'RIGHT_AGENT_MANAGEMENT_CONSOLE',
          'RIGHT_EDIT_ROLE_sbg-External User',
          'USER.UPDATE_USER_FOR_BO',
          'RIGHT_EDIT_ROLE_Subsidy Entry Clerk',
          'RIGHT_EDIT_ROLE_sbg-Enrollment User',
          'RIGHT_EDIT_ROLE_Carrier Sync Read-Only',
          'RIGHT_EDIT_ROLE_sbg-NB Account Manager',
          'RIGHT_EDIT_MEDICARE_CARRIER_PLAN',
          'RIGHT_DELETE_LETTER_TEMPLATE',
          'RIGHT_EDIT_ROLE_Medicare Customer Service',
          'RIGHT_VIEW_SCRIPT_ERROR_REPORTING',
          'RIGHT_ADMIN_CALENDAR',
          'RIGHT_SAVE_COM_LOG',
          'RIGHT_CREATE_APPLICATION_WITH_PLAN',
          'RIGHT_EDIT_ROLE_Auction Access (PM)',
          'RIGHT_EDIT_ROLE_EOD Administrator',
          'RIGHT_EDIT_ROLE_Extranet - EPI with XML',
          'RIGHT_EDIT_ROLE_Telesales Rep',
          'RIGHT_RECEIVE_EMAIL_WQ_FOR_SALES',
          'RIGHT_VIEW_AUTO_EMAIL',
          'RIGHT_VIEW_COMP_CREDIT_ASSIGN',
          'RIGHT_VIEW_EMPLOYEES',
          'RIGHT_VIEW_EXPANDED_REVENUE_IMPACT_DATE',
          'RIGHT_VIEW_SUBMITTED_APP_MANAGER',
          'RIGHT_REAL_TIME_CALLING_DASHBOARD',
          'RIGHT_EDIT_ROLE_EOD Email Approver',
          'RIGHT_EDIT_ROLE_Workforce Manager',
          'RIGHT_SALES_PERFORMANCE',
          'RIGHT_LEAD_MONETIZATION',
          'RIGHT_VIEW_ORGANIZATION_CONFIGURATION',
          'RIGHT_SEND_PROPOSAL_EMAIL',
          'RIGHT_ADD_OFFLINE_CARRIER',
          'RIGHT_ATTACHMENT_MANAGER',
          'RIGHT_EDIT_POLICIES',
          'RIGHT_EDIT_REVENUE_COUNTS',
          'RIGHT_EDIT_ROLE_Auction Administrator',
          'RIGHT_EDIT_ROLE_Extranet - EOD',
          'RIGHT_EDIT_ROLE_Extranet - EOD Administrator',
          'RIGHT_EDIT_ROLE_Extranet - Prescreen',
          'RIGHT_EDIT_ROLE_Inquiry Only',
          'RIGHT_EDIT_ROLE_Reviewer-CS',
          'RIGHT_EDIT_ROLE_Standard Developer',
          'RIGHT_SBG_ADD_RIDERS',
          'RIGHT_EDIT_LATE_PAYMENT',
          'RIGHT_VIEW_SEND_BULK_EMAIL',
          'RIGHT_VIEW_UPDATE_USERS',
          'RIGHT_CAN_NOTIFY_CUSTOMER',
          'RIGHT_MEDICARE_ENROLLMENT_DASHBOARD',
          'RIGHT_CALL_CISCO_CAD',
          'RIGHT_ACE_MISSION_CONSOLE',
          'RIGHT_Agent_Call',
          'RIGHT_SEND_PPE_CROSS_SELL',
          'RIGHT_EDIT_DOCUMENT_CONTENT',
          'RIGHT_EDIT_ROLE_Customer Retention',
          'RIGHT_EDIT_ROLE_sbg-Finance-XM',
          'RIGHT_MEDICARE_CALL_VOLUME',
          'RIGHT_SCRIPT_MESSAGE',
          'RIGHT_EDIT_ROLE_Extranet - Quoting Service',
          'RIGHT_EDIT_ROLE_Medicare Supervisor',
          'RIGHT_EDIT_BENEFIT_ADMIN_TEXT',
          'RIGHT_EDIT_ROLE_Auction Access (AS)',
          'RIGHT_EDIT_ROLE_Benefit Summary Admin',
          'RIGHT_EDIT_ROLE_EOD Sales Support',
          'RIGHT_EDIT_ROLE_Extranet - EOD Agent Admin',
          'RIGHT_EDIT_ROLE_Partner Manager',
          'RIGHT_EDIT_ROLE_ifp-Sales Rep',
          'RIGHT_GEN_OUTGOING_CORR',
          'RIGHT_VIEW_ACCOUNT_MNGER_ASSIGN',
          'RIGHT_VIEW_BENEFIT_SUMMARY',
          'RIGHT_VIEW_BULK_EMAIL',
          'RIGHT_VIEW_IFP_DOC_SCREEN',
          'RIGHT_VIEW_OPS_SRCH_ASSIGN',
          'RIGHT_EDIT_ROLE_EOD Sales Supervisor',
          'RIGHT_EDIT_ROLE_Medicare Compliance',
          'RIGHT_EDIT_ROLE_Senior Enrollment Rep',
          'RIGHT_VIEW_PRINT_IFP_PDF',
          'RIGHT_OFFLINE_CARRIER_PLAN',
          'RIGHT_OFFLINE_CARRIER_CREATE_APP',
          'RIGHT_IFP_ADMIN_RIDERS',
          'RIGHT_EDIT_ROLE_Medicare Enrollment',
          'RIGHT_EDIT_ROLE_Finance - XM',
          'RIGHT_EDIT_ROLE_Email Approver',
          'RIGHT_SAVE_SERVICE_TICKET',
          'RIGHT_AGENT_CONTROLLER',
          'RIGHT_EDIT_ROLE_Admin Developer',
          'RIGHT_EDIT_ROLE_Sales Support',
          'RIGHT_EDIT_ROLE_sbg-Account Manager',
        ],
      }
      return currentUser.resources
    },
  },
  methods: {
    hasPermission(requirePermissions) {
      for (let permission of requirePermissions) {
        return this.getPermission.includes(permission)
      }
    },
  },
}
</script>

<template>
  <nav class="nav">
    <ul>
      <li class="brandContainer">
        <a href="./" class="brand"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAdCAMAAACwqpNNAAACuFBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////up14bAAAA53RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojw9Pj9AQUJERUdISUpLTE1OT1FVV1hZWltcXV5fYGJjZGdoaWprbG1ucHFyc3R1dnd5ent8fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmp2en6ChoqOkpaanqKusra6vsLGys7S1tre5uru8vr/AwcLDxMXGx8rLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm6Onq6+zt7u/w8fLz9PX29/j5+vv8/f6MqePZAAAE5ElEQVRIicWX+0NURRTHB0h2RUABURFMwACX5y6ty4KVFmqhmWYPLZM02aQyehmLGALimiRS9EAQFTMiChUQATXBgDCyEDR6mAXycM+/0Zm5d+9juZfHL3l+2Dlz5jvzmbkzc+5dQpQstLGtq0AeCrpwqesVRbGy7e74/mKELJLf1dr0wGS6xgDAGXkoHEMFympFO4l6oyzyLUb0k+kaOQRwUh5ahH2zpkD/wsHSr1yR6Eqd4wAj0f83/RuAbu09o38N0HXv6KcA2ieku/r6z5wCfZa/j9uYMbTa+2T0eOocA2hjkUqkx1DHx9/PRdbvicKmPwf66nKMk6I/vKfht4H+lgOrxGb3FGtZY0fnpfJ3zCI9av7yhIR6gGuPmJKSSBnAqI6EZp3rH7jVlJ0gdF2IJ4O3Qx4T0r0+FtTHA7nGqMxrQgxK/Xi6fX6eGAX3QoA7mqW3HfWP+IGTb0tEl+dNQI/olqj/iGONH4DUeoN5+rzDkqj2Q4BfbHYxUM666gbQvblr7aMb2aKap3P0Sjk9hKf7X0fHnr8+eYON9rsRxJ4VHaHSlp9Tcp0NMY1fey7YOdxdAA2ufQTdtiyLpfgfGkyjO9aOzqkFDLGMPsAcjl4hp8/m6RVYtpq4aV8AxyRPfLXamzmeb9Bxn+X2PXq2WW+oA/g5KXbJEpcyNo/UaVQW3ozuLeySgWWdg6GjCwti9N7SMokdqeLoa7Do8ebVHnSyidRzFaf5KsbOqpx5gI28akYvVtYRTR/AYLDQ14rBdLJ4CJQM6TVYrBTUG7BWRJzsB4DfvZXvOxwVVBnsKT9GT6nYNWAQoJaEq9EDsaFRVLt24UnSOGpuaFjk4DYbVOhrhK5RbC50DkslM8fE2EeCETLQ3i2xzh5GT8HfzRL1Hqwvps6s5w63/op2/simEjvdDuVcpxN6+v6NF5bQS9FwWrDvcD9G5s5BepW7l8S0saizkq34e1FUn/6RX09aj+QRId2kQo8U6B6d9GBXKjzhCF+kH5Pv5hyMZ9KnOsbWE1LCecNDo3xMjS7mea+fKL1cYbwwH+Vsk0neU1CvI6m0qN5m0un0Ka8V9kyBbqP7+bJFYukWj2BlupU8j7/FqVL1jvQFmhsYzRaUb0+Bvh1VjxMni1bLtA/h75vO6gSQZAxCdk6BTj/hGpzHU83znv2YXKc7qZ/GppfE6mdj6Fc0anRSi7JnxL6GTePRCSZr2C1GPV8kXM7ZLoR8bsrpmCSvElW6GWV3hSwQ9xfs0o5Dv58esC2OYEA9fOJH4jHUIQirnc48JpDRCFU6KaDyvcE0FGodRv8plmmV6WQLVX8aQxP73NdxHzBdul/BopYN7Lai2fnGHUTncvwMNbpLBburZ4sOnqFsKJo57vt9Hxu+qfhANfssOBeFX0bUGTr6VoatBZ1BebZJZvoWjQqdsFsn2LsYiMayRk4Pw1Au83ZI1SUslC6JWLOBZlq6JPaOI5+zuXnSLYBYYTxvvKZVnLu6ztG3hr0wI++M+bpYZKf3nVnil8O8+vxavnV5PR/peIGkYa41MSb/z2X/v+h70lftsGTtVyVvvKQ024lS69YHuZo2zmgOldM1hnhzgKMStS23omJf+jJJe6Jlb17ezifxJRdoMho8yEJTvMFxNcM2v5/pTkLMRr1W0LtGGhNC/gOyCdi0UXarQAAAAABJRU5ErkJggg=="
        /></a>
        <BaseFasIcon class="homeIcon" name="home" />
      </li>
      <!-- Menu -->
      <template v-for="(menu, index) in menus">
        <li
          v-if="hasPermission(menu.header.permissions)"
          :key="index"
          class="dropdown topMenuItem"
        >
          <a href="#" class="dropdownToggle">
            {{ menu.header.title }}
            <span class="icon">
              <BaseFasIcon name="caret-down" />
            </span>
          </a>
          <!-- Menu Item -->
          <ul class="dropdownMenu">
            <template v-for="(menuItem, index2) in menu.items">
              <template v-if="!menuItem.children">
                <li
                  v-if="hasPermission(menuItem.permissions)"
                  :key="index2"
                  class="dropdownSubmenu"
                >
                  <a class="menuItem" :href="menuItem.routeTo">{{
                    menuItem.title
                  }}</a>
                </li>
              </template>
              <template v-else>
                <li
                  v-if="hasPermission(menuItem.header.permissions)"
                  :key="index2"
                  class="dropdownSubmenu"
                >
                  <a class="menuItem">{{ menuItem.header.title }}</a>
                  <span class="subMenuIcon">
                    <BaseFasIcon v-if="menuItem.children" name="caret-right" />
                  </span>
                  <ul class="dropdownMenu">
                    <template v-for="(submenu, index3) in menuItem.children">
                      <li
                        v-if="hasPermission(submenu.permissions)"
                        :key="index3"
                      >
                        <a class="menuItem" href="test">{{ submenu.title }}</a>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~@knonginda/base/src/design/index.scss';

.nav {
  > ul {
    display: flex;
    height: 50px;
    background-color: $dark-green;
  }
}

.brandContainer {
  display: flex;
  justify-content: space-between;
  width: 210px;

  .brand {
    padding-top: 10px;
    padding-left: 25px;
  }

  .homeIcon {
    margin-top: 15px;
    margin-right: 10px;
    font-size: 24px;
    color: #fff;
  }
}

.subMenuIcon {
  position: absolute;
  right: 10px;
  margin-top: -23px;
  font-size: 16px;
  color: #999;
}

.menuItem {
  display: block;
  padding: 7px 20px;
  clear: both;
  color: $color-text;
  white-space: nowrap;
  cursor: pointer;
}

.dropdownMenu {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: $layer-dropdown-z-index;
  display: none;
  min-width: 280px;
  padding: 5px 0;
  text-align: left;
  background-color: $color-modal-bg;
  border: 1px solid $color-modal-border;
  box-shadow: $color-modal-box-shadow;

  li {
    &:hover {
      > .menuItem {
        color: #fff;
        background-color: $green;
      }
    }
  }
}

.dropdownSubmenu {
  .dropdownMenu {
    position: absolute;
    top: 0;
    left: 100%;
  }

  &:hover {
    .dropdownMenu {
      display: block;
    }

    .subMenuIcon {
      color: #fff;
    }
  }
}

.topMenuItem {
  position: relative;
  min-width: 100px;
  padding: 0;
  text-align: center;
  border-left: 1px solid lighten($dark-green, 10%);

  &:hover {
    background-color: lighten($dark-green, 5%);
  }
}

.dropdownToggle {
  display: block;
  padding: 17px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  &:visited {
    color: #fff;
  }
}

.dropdown {
  position: relative;
  color: $color-link-text;

  &:hover {
    > .dropdownMenu {
      display: block;
    }
  }
}
</style>
