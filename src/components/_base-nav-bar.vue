<script>
import { NAVBAR_DATA } from '@resources'
import { indexOf, isEmpty } from 'lodash'

export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menus: NAVBAR_DATA,
      workQueueCount: '',
      leadWorkQueueCount: '',
      serviceTicketCount: '',
      medicareSupervisorURL: '',
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let roleId = this.currentUser.sessionUser.currentRole.roleID
      if (this.hasPermission(['RIGHT_VIEW_WK_QUEUE'])) {
        this.initWorkQueueCount(roleId)
        this.initLeadWorkQueueCount(roleId)
      }
      if (this.hasPermission(['RIGHT_VIEW_SERVICE_TICKET'])) {
        this.initServiceTicketCount(roleId)
      }
      this.getSupervisorDashabordEntrance()
    },
    getSupervisorDashabordEntrance() {
      let roleID = this.currentUser.sessionUser.currentRole.roleID
      this.$http
        .get(`/bose-api/supervisor-dashboard/entrance/${roleID}`)
        .then((response) => {
          this.medicareSupervisorURL = response.bodyText
        })
    },
    initWorkQueueCount(roleId) {
      this.$http
        .get(`/newbo/api/main_menu/work_queue_count/${roleId}`)
        .then((response) => {
          this.workQueueCount = response.body
        })
    },
    initLeadWorkQueueCount(roleId) {
      this.$http
        .get(`/newbo/api/main_menu/lead_work_queue_count/${roleId}`)
        .then((response) => {
          this.leadWorkQueueCount = response.body
        })
    },
    initServiceTicketCount(roleId) {
      this.$http
        .get(`/newbo/api/main_menu/service_ticket_count/${roleId}`)
        .then((response) => {
          this.serviceTicketCount = response.body
        })
    },
    hasPermission(requirePermissions) {
      let userPermissions = this.currentUser.resources
      for (let requirePermission of requirePermissions) {
        if (indexOf(userPermissions, requirePermission) !== -1) {
          return true
        }
      }
    },
    hasRole(roleNames) {
      let currentRoleName = this.currentUser.sessionUser.currentRole.roleName
      if (indexOf(roleNames, currentRoleName) !== -1) {
        return true
      }
    },
    addPageStatusFlag(event) {
      let url = this.getPageStatusFlag(event.currentTarget.href)
      event.currentTarget.href = url
    },
    getPageStatusFlag(url = '') {
      if (!isEmpty(url)) {
        let t = new Date()
          .getTime()
          .toString()
          .substr(8)
        if (/t=\d{5}/.test(url)) {
          url = url.replace(/t=\d{5}/, `t=${t}`)
        } else {
          if (/\/\?/.test(url)) {
            url += `&t=${t}`
          } else {
            url += `?t=${t}`
          }
        }
      }
      return url
    },
    openMedicareAgenCalendar() {
      let url = '/ehi/calendar/view-calendar?mcei.app.terminalID=__tid__1_'
      window.open(
        url,
        'ViewCalendar',
        'left=100, top=100, width=900, height=650, scrollbars=no, resizable=yes, toolbar=no, maximizeButton=false, location=no, directories=no, menubar=no'
      )
    },
  },
}
</script>

<template>
  <nav class="nav">
    <ul>
      <li class="brandContainer">
        <a href="/bov2/index.html#/bodashboard" class="brand"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAdCAMAAACwqpNNAAACuFBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////up14bAAAA53RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojw9Pj9AQUJERUdISUpLTE1OT1FVV1hZWltcXV5fYGJjZGdoaWprbG1ucHFyc3R1dnd5ent8fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmp2en6ChoqOkpaanqKusra6vsLGys7S1tre5uru8vr/AwcLDxMXGx8rLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm6Onq6+zt7u/w8fLz9PX29/j5+vv8/f6MqePZAAAE5ElEQVRIicWX+0NURRTHB0h2RUABURFMwACX5y6ty4KVFmqhmWYPLZM02aQyehmLGALimiRS9EAQFTMiChUQATXBgDCyEDR6mAXycM+/0Zm5d+9juZfHL3l+2Dlz5jvzmbkzc+5dQpQstLGtq0AeCrpwqesVRbGy7e74/mKELJLf1dr0wGS6xgDAGXkoHEMFympFO4l6oyzyLUb0k+kaOQRwUh5ahH2zpkD/wsHSr1yR6Eqd4wAj0f83/RuAbu09o38N0HXv6KcA2ieku/r6z5wCfZa/j9uYMbTa+2T0eOocA2hjkUqkx1DHx9/PRdbvicKmPwf66nKMk6I/vKfht4H+lgOrxGb3FGtZY0fnpfJ3zCI9av7yhIR6gGuPmJKSSBnAqI6EZp3rH7jVlJ0gdF2IJ4O3Qx4T0r0+FtTHA7nGqMxrQgxK/Xi6fX6eGAX3QoA7mqW3HfWP+IGTb0tEl+dNQI/olqj/iGONH4DUeoN5+rzDkqj2Q4BfbHYxUM666gbQvblr7aMb2aKap3P0Sjk9hKf7X0fHnr8+eYON9rsRxJ4VHaHSlp9Tcp0NMY1fey7YOdxdAA2ufQTdtiyLpfgfGkyjO9aOzqkFDLGMPsAcjl4hp8/m6RVYtpq4aV8AxyRPfLXamzmeb9Bxn+X2PXq2WW+oA/g5KXbJEpcyNo/UaVQW3ozuLeySgWWdg6GjCwti9N7SMokdqeLoa7Do8ebVHnSyidRzFaf5KsbOqpx5gI28akYvVtYRTR/AYLDQ14rBdLJ4CJQM6TVYrBTUG7BWRJzsB4DfvZXvOxwVVBnsKT9GT6nYNWAQoJaEq9EDsaFRVLt24UnSOGpuaFjk4DYbVOhrhK5RbC50DkslM8fE2EeCETLQ3i2xzh5GT8HfzRL1Hqwvps6s5w63/op2/simEjvdDuVcpxN6+v6NF5bQS9FwWrDvcD9G5s5BepW7l8S0saizkq34e1FUn/6RX09aj+QRId2kQo8U6B6d9GBXKjzhCF+kH5Pv5hyMZ9KnOsbWE1LCecNDo3xMjS7mea+fKL1cYbwwH+Vsk0neU1CvI6m0qN5m0un0Ka8V9kyBbqP7+bJFYukWj2BlupU8j7/FqVL1jvQFmhsYzRaUb0+Bvh1VjxMni1bLtA/h75vO6gSQZAxCdk6BTj/hGpzHU83znv2YXKc7qZ/GppfE6mdj6Fc0anRSi7JnxL6GTePRCSZr2C1GPV8kXM7ZLoR8bsrpmCSvElW6GWV3hSwQ9xfs0o5Dv58esC2OYEA9fOJH4jHUIQirnc48JpDRCFU6KaDyvcE0FGodRv8plmmV6WQLVX8aQxP73NdxHzBdul/BopYN7Lai2fnGHUTncvwMNbpLBburZ4sOnqFsKJo57vt9Hxu+qfhANfssOBeFX0bUGTr6VoatBZ1BebZJZvoWjQqdsFsn2LsYiMayRk4Pw1Au83ZI1SUslC6JWLOBZlq6JPaOI5+zuXnSLYBYYTxvvKZVnLu6ztG3hr0wI++M+bpYZKf3nVnil8O8+vxavnV5PR/peIGkYa41MSb/z2X/v+h70lftsGTtVyVvvKQ024lS69YHuZo2zmgOldM1hnhzgKMStS23omJf+jJJe6Jlb17ezifxJRdoMho8yEJTvMFxNcM2v5/pTkLMRr1W0LtGGhNC/gOyCdi0UXarQAAAAABJRU5ErkJggg=="
          />
          <BaseFasIcon class="homeIcon" name="home" />
        </a>
      </li>

      <!-------- Applications -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_VIEW_SEARCH',
            'RIGHT_VIEW_WK_QUEUE',
            'RIGHT_VIEW_SERVICE_TICKET',
            'RIGHT_VIEW_BATCH_ENTRY',
            'RIGHT_VIEW_SUBMITTED_APP_MANAGER',
            'RIGHT_VIEW_IFP_DOC_MANAGER',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="javascript:void(0)" class="dropdownToggle">
          Applications
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li
            v-if="hasPermission(['RIGHT_VIEW_BATCH_ENTRY'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/BatchCriteria.ds?mcei.app.terminalID=__tid__1_"
              >Application Batch Entry</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_IFP_DOC_MANAGER'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/DocManagerSummary.ds?mcei.app.terminalID=__tid__1_"
              >Document Manager</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_MAINTAIN_FFM_CREDENTIAL'])"
            class="dropdownSubmenu"
          >
            <a class="menuItem" href="/ffm_agent_login_for_bo.html"
              >FFM Log-in</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_GLOBAL_SEARCH'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/bov2/index.html#/globalsearch"
              @click="addPageStatusFlag($event)"
              >Global Search</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_SEARCH'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/bov2/index.html#/individualsearch"
              @click="addPageStatusFlag($event)"
              >Individual Search</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_WK_QUEUE'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/bov2/index.html#/appworkqueue"
              @click="addPageStatusFlag($event)"
            >
              My App Work Queue
              <span v-if="workQueueCount !== ''"> ({{ workQueueCount }}) </span>
            </a>
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_SERVICE_TICKET'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              :href="
                `/ehi/ServiceTickets.ds?bo.stUser=${
                  currentUser.sessionUser.currentRole.roleID
                }&amp;mcei.app.terminalID=__tid__1_`
              "
            >
              My Service Tickets
              <span v-if="serviceTicketCount !== ''">
                ({{ serviceTicketCount }})
              </span>
            </a>
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_SUBMITTED_APP_MANAGER'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/SubmittedAppManager.ds?mcei.app.terminalID=__tid__1_"
              >Submitted App Manager</a
            >
          </li>
        </ul>
      </li>

      <!-------- Leads -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_VIEW_LEAD_SEARCH',
            'RIGHT_LEAD_GLOBAL_SEARCH',
            'RIGHT_LEAD_CREATION_BATCH',
            'RIGHT_VIEW_WK_QUEUE',
            'RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="#" class="dropdownToggle">
          Leads
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li v-if="hasRole(['XM Developer'])"
            ><a
              class="menuItem"
              href="/bov2/index.html#/agentdashboard"
              @click="addPageStatusFlag($event)"
              >Agent Dashboard</a
            ></li
          >
          <li v-if="hasPermission(['RIGHT_LEAD_GLOBAL_SEARCH'])">
            <a
              class="menuItem"
              href="/bov2/index.html#/leadglobalsearch"
              @click="addPageStatusFlag($event)"
              >Global Search</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_LEAD_SEARCH'])">
            <a
              class="menuItem"
              href="/bov2/index.html#/leadindividualsearch"
              @click="addPageStatusFlag($event)"
              >Individual Search</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT'])">
            <a class="menuItem" href="/bose/screen_pop.html#/"
              >Inbound Enrollment Script</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_LEAD_CREATION_BATCH'])">
            <a
              class="menuItem"
              href="/bov2/index.html#/leadcreationbatch"
              @click="addPageStatusFlag($event)"
              >Lead Creation Batch</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_WK_QUEUE'])">
            <a
              class="menuItem"
              :href="
                `/ehi/LeadWorkQueueSelect.ds?bo.wquser=${
                  currentUser.sessionUser.currentRole.roleID
                }&amp;mcei.app.terminalID=__tid__1_`
              "
            >
              My Lead Work Queue
              <span v-if="leadWorkQueueCount !== ''">
                ({{ leadWorkQueueCount }})
              </span>
            </a>
          </li>
        </ul>
      </li>

      <!-------- Tasks -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_VIEW_UNIV_WRK_QUEUE',
            'RIGHT_VIEW_SERVICE_TICKET',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="javascript:void(0)" class="dropdownToggle">
          Tasks
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li
            v-if="hasPermission(['RIGHT_VIEW_UNIV_WRK_QUEUE'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/UniversalWorkQueue.ds?mcei.app.terminalID=__tid__1_"
              >App Universal WQ</a
            >
            <span class="subMenuIcon">
              <BaseFasIcon name="caret-right" />
            </span>
            <ul class="dropdownMenu">
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueue.ds?mcei.app.terminalID=__tid__1_"
                  >All
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Administrator&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Administrator</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Clerk&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Clerk</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Customer%20Retention&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Retention</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Customer%20Service&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Service</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=External%20User&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >External User</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=External%20Supervisor&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >External Supervisor</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Forms%20Administrator&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Forms Administrator
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=ifp-Sales%20Rep&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >IFP Sales Rep</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Compliance&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Compliance</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Customer%20Service&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Customer Service</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Enrollment&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Enrollment
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=MS%20Enrollment%20Specialist&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >MS Enrollment Specialist</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Sales&amp;bo.AppType=&amp;groupBy=location&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Sales</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Supervisor&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Supervisor</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Outbound%20Rep&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Outbound Rep</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=PPS%20Rep&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >PPS Rep</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Reviewer&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer</a
                >
              </li>
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Reviewer-CS&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer-CS
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Sales%20Support&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Sales Support</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Telesales%20Rep&amp;bo.AppType=&amp;mcei.app.terminalID=__tid__1_"
                  >Telesales Rep</a
                >
              </li>
            </ul>
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_UNIV_WRK_QUEUE'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/IFPAutoWorkSummary.ds?mcei.app.terminalID=__tid__1_"
              >App WQ Manager</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_UNIV_WRK_QUEUE'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/UniversalWorkQueue.ds?bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
              >Lead Universal WQ</a
            >
            <span class="subMenuIcon">
              <BaseFasIcon name="caret-right" />
            </span>
            <ul class="dropdownMenu">
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueue.ds?bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  ><span>All</span>
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Administrator&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Administrator</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Clerk&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Clerk</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Customer%20Retention&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Retention</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Customer%20Service&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Service</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=External%20User&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >External User</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=External%20Supervisor&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >External Supervisor</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Forms%20Administrator&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Forms Administrator
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=ifp-Sales%20Rep&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >IFP Sales Rep</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Compliance&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Compliance</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Customer%20Service&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Customer Service</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Enrollment&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Enrollment
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=MS%20Enrollment%20Specialist&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >MS Enrollment Specialist</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Sales&amp;bo.AppType=Lead&amp;groupBy=location&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Sales</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Medicare%20Supervisor&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Supervisor</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Outbound%20Rep&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Outbound Rep</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=PPS%20Rep&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >PPS Rep</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Reviewer&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Reviewer-CS&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer-CS</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Sales%20Support&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Sales Support</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/UniversalWorkQueueSelect.ds?userType=Telesales%20Rep&amp;bo.AppType=Lead&amp;mcei.app.terminalID=__tid__1_"
                  >Telesales Rep</a
                >
              </li>
            </ul>
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_UNIV_WRK_QUEUE'])">
            <a
              class="menuItem"
              href="/ehi/LeadAutoWorkSummary.ds?mcei.app.terminalID=__tid__1_"
              >Lead WQ Manager</a
            >
          </li>
          <li
            v-if="hasPermission(['RIGHT_VIEW_SERVICE_TICKET'])"
            class="dropdownSubmenu"
          >
            <a
              class="menuItem"
              href="/ehi/ServiceTicketUniversal.ds?mcei.app.terminalID=__tid__1_"
              >Universal Service Tickets</a
            >
            <span class="subMenuIcon">
              <BaseFasIcon name="caret-right" />
            </span>
            <ul class="dropdownMenu">
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTicketUniversal.ds?mcei.app.terminalID=__tid__1_"
                  ><span>All</span>
                </a></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Administrator&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Administrator</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Customer%20Service&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Service</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Customer%20Retention&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Customer Retention</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Medicare%20Enrollment&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Enrollment</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=MS%20Enrollment%20Specialist&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >MS Enrollment Specialist</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Medicare%20Compliance&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Compliance</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Medicare%20Supervisor&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Medicare Supervisor</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=ifp-Sales%20Rep&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >IFP Sales Rep</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Outbound%20Rep&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Outbound Rep</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Reviewer&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Reviewer-CS&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Reviewer-CS</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Sales%20Support&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Sales Support</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Supervisor&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Supervisor</a
                ></li
              >
              <li
                ><a
                  class="menuItem"
                  href="/ehi/ServiceTickets.ds?bo.userType=Senior%20Enrollment%20Rep&amp;bo.stType=group&amp;mcei.app.terminalID=__tid__1_"
                  >Senior Enrollment Rep</a
                ></li
              >
            </ul>
          </li>
        </ul>
      </li>

      <!-------- Email -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_VIEW_AUTO_EMAIL',
            'RIGHT_VIEW_AUTO_EMAIL_LEADS',
            'RIGHT_VIEW_BULK_EMAIL',
            'RIGHT_VIEW_OUTGOING_TEMPLATE',
            'RIGHT_EDIT_ROLE_sbg-Account Manager',
            'RIGHT_EDIT_ROLE_Super',
            'RIGHT_EDIT_ROLE_Forms Administrator',
            'RIGHT_EDIT_ROLE_External Supervisor',
            'RIGHT_EDIT_ROLE_External User',
            'RIGHT_EDIT_ROLE_Administrator',
            'RIGHT_EDIT_ROLE_Benefit Summary Admin',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="javascript:void(0)" class="dropdownToggle">
          Email
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li v-if="hasPermission(['RIGHT_VIEW_AUTO_EMAIL'])">
            <a
              class="menuItem"
              href="/ehi/AutoEmailSummary.ds?mcei.app.terminalID=__tid__1_"
              >Auto Email - Application</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_AUTO_EMAIL_LEADS'])">
            <a
              class="menuItem"
              href="/ehi/LeadAutoEmailSummary.ds?mcei.app.terminalID=__tid__1_"
              >Auto Email - Lead</a
            >
          </li>
          <li
            v-if="
              hasPermission([
                'RIGHT_EDIT_ROLE_sbg-Account Manager',
                'RIGHT_EDIT_ROLE_Super',
                'RIGHT_EDIT_ROLE_Forms Administrator',
                'RIGHT_EDIT_ROLE_External Supervisor',
                'RIGHT_EDIT_ROLE_External User',
                'RIGHT_EDIT_ROLE_Administrator',
                'RIGHT_EDIT_ROLE_Benefit Summary Admin',
              ])
            "
          >
            <a
              class="menuItem"
              href="/ehi/AttachmentManager.ds?bo.screen=Manager&amp;mcei.app.terminalID=__tid__1_"
              >Attachment Manager</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_BULK_EMAIL'])">
            <a
              class="menuItem"
              href="/ehi/BulkMessageSummary.ds?mcei.app.terminalID=__tid__1_"
              >Bulk Email</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_BULK_EMAIL'])">
            <a
              class="menuItem"
              href="/ehi/BulkEmailSummary.ds?mcei.app.terminalID=__tid__1_"
              >Bulk Email II</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_OUTGOING_TEMPLATE'])">
            <a
              class="menuItem"
              href="/ehi/TemplateSummary.ds?mcei.app.terminalID=__tid__1_"
              >Template Maintenance</a
            >
          </li>
        </ul>
      </li>

      <!-------- Users -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_MEDICARE_SALES_VIEW_CALENDAR',
            'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
            'RIGHT_VIEW_SALES_LICENSING',
            'RIGHT_VIEW_ORGANIZATION_CONFIGURATION',
            'RIGHT_CREATE_IDENTITY',
            'RIGHT_VIEW_UPDATE_USERS',
            'RIGHT_VIEW_SEARCH_USERS',
            'RIGHT_VIEW_CREATE_NEW_USERS',
            'RIGHT_VIEW_OPS_SRCH_ASSIGN',
            'RIGHT_VIEW_BULK_BOLT',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="javascript:void(0)" class="dropdownToggle">
          Users
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li
            v-if="
              hasPermission([
                'RIGHT_VIEW_UPDATE_USERS',
                'RIGHT_VIEW_SEARCH_USERS',
                'RIGHT_VIEW_CREATE_NEW_USERS',
                'RIGHT_VIEW_OPS_SRCH_ASSIGN',
              ])
            "
          >
            <div class="dropdownSPHeader">System-Level Account</div>
            <ul>
              <li has-permission="RIGHT_VIEW_CREATE_NEW_USERS">
                <a class="menuItem" href="/bov2/index.html#/searchidentity"
                  >Create System-Level User</a
                >
              </li>
              <li has-permission="RIGHT_VIEW_CREATE_NEW_USERS">
                <a
                  class="menuItem"
                  href="/bov2/index.html#/bulkuserprovisioning"
                  >Bulk User Provisioning</a
                >
              </li>
              <li has-permission="RIGHT_VIEW_OPS_SRCH_ASSIGN">
                <a
                  class="menuItem"
                  href="/ehi/ApplicationSearch.ds?bo.operation.mode=Associate&amp;mcei.app.terminalID=__tid__1_"
                  >Enrollment Assignment</a
                >
              </li>
              <li
                has-permission="RIGHT_VIEW_UPDATE_USERS;RIGHT_VIEW_SEARCH_USERS"
              >
                <a
                  class="menuItem"
                  href="/bov2/index.html#/searchsystemleveluser"
                  >Update System-Level Users</a
                >
              </li>
            </ul>
          </li>
          <li
            v-if="
              hasPermission([
                'RIGHT_CREATE_IDENTITY',
                'RIGHT_VIEW_ORGANIZATION_CONFIGURATION',
                'RIGHT_VIEW_SEARCH_USERS',
              ])
            "
            class="divider"
          >
            <ul>
              <li class="dropdownSPHeader">eHealth Identity</li>
              <li has-permission="RIGHT_CREATE_IDENTITY">
                <a class="menuItem" href="/bov2/index.html#/ehealthidcreate"
                  >Create eHealth ID</a
                >
              </li>
              <li has-permission="RIGHT_CREATE_IDENTITY">
                <a class="menuItem" href="/bov2/index.html#/ehealthidsearch"
                  >Update eHealth ID</a
                >
              </li>
              <li>
                <a class="menuItem" href="#/organizationview"
                  >View Organization Configuration</a
                >
              </li>
            </ul>
          </li>
          <li
            v-if="
              hasPermission([
                'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
                'RIGHT_VIEW_SALES_LICENSING',
                'RIGHT_MEDICARE_SALES_VIEW_CALENDAR',
                'RIGHT_VIEW_AGENT_DASHBOARDS',
                'RIGHT_VIEW_BULK_BOLT',
              ])
            "
            class="divider"
          >
            <ul>
              <li class="dropdownSPHeader">Agent Administration</li>
              <li v-if="hasPermission(['RIGHT_BASIC_LICENSE_AGENTS'])">
                <a class="menuItem" href="/applet/carrier-licensing-admin/#/"
                  >Carrier Licensing Administration</a
                >
              </li>
              <li v-if="hasPermission(['RIGHT_LICENSING_ADMIN'])">
                <a
                  class="menuItem"
                  href="/ehi/UserSearch.ds?mcei.app.terminalID=__tid__1_"
                  >Update Licensing</a
                >
              </li>
              <li
                v-if="
                  hasPermission(['RIGHT_VIEW_AGENT_DASHBOARDS']) &&
                    hasRole([
                      'Medicare Sales',
                      'Medicare Supervisor',
                      'Administrator',
                    ])
                "
              >
                <a class="menuItem" href="/bov2/index.html#/agentdashboards"
                  >View Agent Dashboards</a
                >
              </li>
              <li v-if="hasPermission(['RIGHT_MEDICARE_SALES_VIEW_CALENDAR'])">
                <a
                  class="menuItem"
                  href="javascript:void(0)"
                  @click="openMedicareAgenCalendar()"
                  >View Medicare Agent Calendar</a
                >
              </li>
              <li
                v-if="
                  hasPermission([
                    'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
                    'RIGHT_VIEW_SALES_LICENSING',
                  ])
                "
              >
                <a
                  class="menuItem"
                  href="/bov2/index.html#/searchsystemleveluser/viewlicense"
                  >View Licensing</a
                >
              </li>
              <li v-if="hasPermission(['RIGHT_VIEW_BULK_BOLT'])">
                <a class="menuItem" href="/bov2/index.html#/bulkbolt"
                  >Upload Agent Licensing and Appointment</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <!-------- Utilities -------->
      <li
        v-if="
          hasPermission([
            'RIGHT_VIEW_SCRIPT_ERROR_REPORTING',
            'RIGHT_SALES_PROGRAMS',
            'RIGHT_IFP_ADMIN_RIDERS',
            'RIGHT_REAL_TIME_CALLING_DASHBOARD',
            'RIGHT_CARRIER_ADMINISTRATION',
            'RIGHT_SCRIPT_MESSAGE',
            'RIGHT_VIEW_MEDICARE_APPOINTMENT_SUMMARY',
            'RIGHT_VIEW_MEDICARE_MANAGER_OVERRIDE_CODE_ADMIN',
            'RIGHT_MEDICARE_ENROLLMENT_DASHBOARD',
            'RIGHT_VIEW_CARRIER_SYNC_REQUEST',
            'RIGHT_CARRIER_FAMILY_CONFIG',
            'RIGHT_HOURS_OF_OPERATION',
            'RIGHT_MANAGE_IFP_CALL_VOLUME',
          ])
        "
        class="dropdown topMenuItem"
      >
        <a href="javascript:void(0)" class="dropdownToggle">
          Utilities
          <span class="icon">
            <BaseFasIcon name="caret-down" />
          </span>
        </a>
        <ul class="dropdownMenu">
          <li
            v-if="
              hasPermission([
                'RIGHT_CARRIER_ADMINISTRATION',
                'RIGHT_SCRIPT_MESSAGE',
              ])
            "
          >
            <a class="menuItem" href="/bov2/index.html#/carrieradmin"
              >Carrier Administration</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_CARRIER_FAMILY_CONFIG'])">
            <a class="menuItem" href="/bov2/index.html#/carrier_family_configs"
              >Carrier Configuration Tool</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_CUSTOMER_SYNC_REQUEST'])">
            <a class="menuItem" href="/csync/index.html">Customer Sync</a>
          </li>
          <li v-if="hasPermission(['RIGHT_EPI_RESEND'])">
            <a
              class="menuItem"
              href="/ehi/EPIFileTransfer.ds?bo.newSearch=Y&mcei.app.terminalID=__tid__1_"
              >EPI3 File Transfer</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_HOURS_OF_OPERATION'])">
            <a
              class="menuItem"
              href="/bov2/index.html#/hoursofoperation/callcenter"
              >Hours of Operation</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_LIVE_OPS_MAPPING'])">
            <a class="menuItem" href="/bov2/index.html#/liveopsmapping"
              >LiveOps Mapping</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_MEDICARE_APPOINTMENT_SUMMARY'])">
            <a class="menuItem" href="/bov2/index.html#/appointmentsummary"
              >Medicare Appointments</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_MEDICARE_ENROLLMENT_DASHBOARD'])">
            <a class="menuItem" href="/bov2/index.html#/enrollmentverification"
              >Medicare Enrollment Dashboard</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_MEDICARE_CALL_VOLUME'])">
            <a
              class="menuItem"
              href="/bov2/index.html#/manage_medicare_call_volume"
              >Manage Medicare Call Volume</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_MANAGE_IFP_CALL_VOLUME'])">
            <a class="menuItem" href="/bov2/index.html#/manageifpcallvolume"
              >Manage IFP Call Volume</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_MANAGE_IFP_CHAT_VOLUME'])">
            <a class="menuItem" href="/bov2/index.html#/manageifpchatvolume"
              >Manage IFP Chat Volume</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_MEDICARE_LEAD_RTC_LOG'])">
            <a class="menuItem" href="/bov2/index.html#/leadactivities"
              >Medicare Lead Activities</a
            >
          </li>
          <li
            v-if="
              hasPermission(['RIGHT_VIEW_MEDICARE_MANAGER_OVERRIDE_CODE_ADMIN'])
            "
          >
            <a class="menuItem" href="/bov2/index.html#/manageroverridecode"
              >Medicare Manager Override Code</a
            >
          </li>
          <li
            v-if="
              hasPermission(['RIGHT_VIEW_MEDICARE_SUPERVISOR_DASHBOARD']) &&
                medicareSupervisorURL
            "
          >
            <a class="menuItem" :href="medicareSupervisorURL"
              >Medicare Supervisor Dashboard</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_PARTNER_REGISTRATION_TOOL'])">
            <a
              class="menuItem"
              href="/ehi/AllianceList.ds?mcei.app.terminalID=__tid__1_"
              >Partner Registration Tool</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_IFP_ADMIN_RIDERS'])">
            <a class="menuItem" href="/bov2/index.html#/ridermaintenance"
              >Rider Maintenance</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_REAL_TIME_CALLING_DASHBOARD'])">
            <a class="menuItem" href="/bov2/index.html#/realtimecalling"
              >Real-Time Calling</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_REAL_TIME_CALLING_DASHBOARD'])">
            <a class="menuItem" href="/bov2/index.html#/realtimecallingmedicare"
              >Real-Time Calling for Medicare</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_VIEW_SCRIPT_ERROR_REPORTING'])">
            <a class="menuItem" href="/bov2/index.html#/scripterrorlog"
              >Script Error Log</a
            >
          </li>
          <li v-if="hasPermission(['RIGHT_SALES_PROGRAMS'])">
            <a class="menuItem" href="/bov2/index.html#/salesprogram"
              >Sales Programs</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~@bo/base/design/index.scss';

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .homeIcon {
    margin-top: 7px;
    margin-left: 10px;
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
  z-index: $layer-nav-bar-z-index;
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

.dropdownSPHeader {
  margin: 5px 0 5px 20px;
  color: $green;
}

.divider {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;

  &:first-child {
    padding-top: 0;
    margin-top: 0;
    border-top: 0;
  }
}
</style>
