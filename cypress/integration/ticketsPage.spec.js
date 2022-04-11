import { ticketPage } from "../fixtures/Pages/ticketPage"

describe('PushNotifications', ()=>{
  
    before(()=>{
        cy.visitCrmPage('9053330505', 'employee', 'dev','https://dev-crm.okolo.app/')
    })
it('Work with a ticket', ()=>{
      cy.emulateMissingCall('79169546257','dev')
      ticketPage.goToTicketsList()
      cy.wait(500)
      ticketPage.getSortFilter()
      ticketPage.applySortNewTickets()
      cy.wait(500)
      ticketPage.openDetalPage()
      ticketPage.checkTicketStatus('Открыт')
      ticketPage.takeTicketToWork()
      ticketPage.checkTicketStatus('В работе')
      ticketPage.getCloseTicketButton()
      ticketPage.selectReasonForCloseTicket('Привезли не тот товар')
      ticketPage.getSendButtonForClosingTicket()
      ticketPage.checkTicketStatus('Решено')
    })
it('Work with an incident', ()=>{
    cy.createIncident(10103243, "3", "Тестовый комментарий")
    ticketPage.goToIncidentList()
    cy.wait(500)
    ticketPage.openIncidentDetailPage()
    ticketPage.checkIncidentStatus('Открыт')
    ticketPage.takeIncidentToWork()
    ticketPage.checkIncidentStatus('В работе')
    ticketPage.getCloseIncidentButton()
    ticketPage.getTypeSolvingField()
    ticketPage.selectTypeSolving('Отключение партнера')
    ticketPage.getSouceOfFaultField()
    ticketPage.selectSourceOfFault('Партнер')
    ticketPage.getCommentField().type('comment for autotest')
    ticketPage.closeIncident()
    ticketPage.checkIncidentStatus('Решено')
    })
})

/*
https://dev-orders.{{domain}}/api/app/order/create
{
  "shop": 534,
  "address": "61cb1222c6ad61733bc2c16f",
  "products": [
    {
      "id": 1287596,
      "quantity": 10
    }
  ],
  "replacement": {
    "type": "delete",
    "coordination": "app"
  },
  "planned_delivery_time": 79,
  "comment": "",
  "pay": {
    "type": "card",
    "card_type": "pix"
  },
  "relationship": "aggregator",
  "native": "OKOLO"
}
*/

