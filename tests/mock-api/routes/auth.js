const auth = require('../resources/auth')

module.exports = (app) => {
  app.get('/newbo/api/auth/user', (request, response) => {
    response.json(auth.getData())
  })
  app.get('/ehi/sessionSync/bo-session-sync', (request, response) => {
    response.json(auth.getSessionData())
  })
  app.get('/newbo/api/main_menu/work_queue_count/*', (request, response) => {
    response.json(auth.getWorkQueueCountData())
  })
  app.get(
    '/newbo/api/main_menu/lead_work_queue_count/*',
    (request, response) => {
      response.json(auth.getLeadWorkQueueCountData())
    }
  )
  app.get(
    '/newbo/api/main_menu/service_ticket_count/*',
    (request, response) => {
      response.json(auth.getServiceTicketCountData())
    }
  )
  app.get('/bose-api/supervisor-dashboard/entrance/*', (request, response) => {
    response.end(auth.getLocationData())
  })
}
