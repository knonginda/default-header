module.exports = {
  result: {
    sessionUser: {
      firstName: 'Jett',
      lastName: 'Liu',
      userId: 4413,
      preFailDate: null,
      preLoginDate: null,
      lastLoginDate: '2019-05-06T08:26:52.000+0000',
      sessionToken: 'RjhFRjJGQzU3MDg3QjE3NEY4MERBNzEwMTNGMzA4RTkuZDgyMjZiNTg=',
      currentRole: {
        roleID: 'jettl-1425343038806',
        roleName: 'Administrator',
      },
      sessionId: 'F8EF2FC57087B174F80DA71013F308E9.d8226b58',
      roles: [
        {
          roleID: 'jettl-1425343038806',
          roleName: 'Administrator',
        },
        {
          roleID: 'jettl-1425343538806',
          roleName: 'Medicare Supervisor',
        },
        {
          roleID: 'jettl-1556610205662',
          roleName: 'Finance - Rider Admin',
        },
        {
          roleID: 'jettl-1428390491831',
          roleName: 'Medicare Sales',
        },
        {
          roleID: 'jettl-1516635297317',
          roleName: 'XM Developer',
        },
      ],
      applicationType: 'IFP',
      clientIPAddress: '10.172.97.70',
      securityAreaCode: 'clean room',
      name: 'jettl-1428390491831',
    },
    resources: [
      'RIGHT_LICENSING_ADMIN',
      'RIGHT_VIEW_SEARCH_USERS',
      'RIGHT_GLOBAL_SEARCH',
      'RIGHT_VIEW_EDIT_SCREEN',
      'RIGHT_VIEW_HTML_APP',
      'RIGHT_VIEW_WK_QUEUE',
      'RIGHT_MAINTAIN_FFM_CREDENTIAL',
      'RIGHT_CAN_SUBMIT_TEXT_OPT_IN',
      'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
      'WEBCONSOLE.BASIC',
      'RIGHT_LEAD_GLOBAL_SEARCH',
      'RIGHT_START_TPI_APPLICATION',
      'RIGHT_UPLOAD_DOCUMENT',
      'RIGHT_VIEW_SEARCH',
      'RIGHT_CAN_SUBMIT_TCPAS',
      'RIGHT_TODAY_OPPORTUNITY',
      'RIGHT_SAVE_DOC_SERVICE_TICKET',
      'RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT',
      'RIGHT_VIEW_MEDICARE_OUTBOUND_SCRIPT',
      'RIGHT_VIEW_KEY_INFO',
      'RIGHT_VIEW_LEAD_SEARCH',
      'RIGHT_SENT_PASSWORD_RESET_EMAIL',
      'RIGHT_VIEW_CROSS_SELL_IN_KEYINFO',
      'RIGHT_WORK_QUEUE',
      'RIGHT_VIEW_KEYINFO_APPOINTMENTS',
      'RIGHT_WRK_QUEUE_CREATION',
      'RIGHT_VIEW_CREATE_NEW_LEAD',
      'RIGHT_EDIT_AS',
      'RIGHT_VIEW_CSYNC_REPORT',
      'RIGHT_VIEW_SALES_LICENSING',
      'RIGHT_EDIT_MEMBERS',
      'RIGHT_VIEW_SERVICE_TICKET',
      'RIGHT_MEDICARE_SALES_VIEW_CALENDAR',
      'RIGHT_SAVE_COM_LOG',
      'RIGHT_RECEIVE_EMAIL_WQ_FOR_SALES',
      'RIGHT_SALES_PERFORMANCE',
      'RIGHT_SEND_PROPOSAL_EMAIL',
      'RIGHT_EDIT_POLICIES',
      'RIGHT_CALL_CISCO_CAD',
      'RIGHT_Agent_Call',
      'RIGHT_SEND_PPE_CROSS_SELL',
      'RIGHT_GEN_OUTGOING_CORR',
      'RIGHT_VIEW_IFP_DOC_SCREEN',
      'RIGHT_SAVE_SERVICE_TICKET',

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
      'RIGHT_VIEW_MEDICARE_SUPERVISOR_DASHBOARD',

      'RIGHT_BASIC_LICENSE_AGENTS',
      'RIGHT_ADMIN_LICENSE_AGENTS',
    ],
  },
  MSD_URL: '/applet/supervisor-dashboard/index.html#/overview/',
  sessionResult: {
    sessionSync: 'true',
  },
  workQueueCount: 10,
  leadWorkQueueCount: 5,
  serviceTicketCount: 2,
  location: null,
  getData() {
    return this.result
  },
  getSessionData() {
    return this.sessionResult
  },
  getWorkQueueCountData() {
    return this.workQueueCount
  },
  getLeadWorkQueueCountData() {
    return this.leadWorkQueueCount
  },
  getServiceTicketCountData() {
    return this.serviceTicketCount
  },
  getLocationData() {
    return this.MSD_URL
  },
}
