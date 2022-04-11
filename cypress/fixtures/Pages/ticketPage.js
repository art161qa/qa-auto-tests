export class TicketPage{

goToTicketsList(){
    return cy.get('[data-cy = "tasks"]').click()
}
getSortFilter(){
    return cy.contains('Сначала старые').click()
}
applySortNewTickets(){
    return cy.contains('Сначала новые').click()
}
openDetalPage(){
    return cy.get('[data-cy= "table-data-time"]').eq(0).click({force:true})
}
takeTicketToWork(){
    return cy.get('[data-cy="ticket-lpage-take-to-work-btn"]').click()
}

checkTicketStatus(status){
    return cy.get('[data-cy = "ticket-lpage-ticket-status"]').invoke('text').should('eq',status)
}
getCloseTicketButton(){
    return cy.get('[data-cy = "ticket-lpage-close-ticket-btn"]').click()
}
selectReasonForCloseTicket(reason){
    cy.get('[data-cy="multiple-select-label"]').click()
    cy.contains(reason).click()
    cy.get('[data-cy="multiple-select-label"]').click()
}
getSendButtonForClosingTicket(){
    return cy.get('[data-cy="close-ticket-modal-btn"]').click()
}

goToIncidentList(){
    return cy.get('[data-cy="incidents"]').click()
}

openIncidentDetailPage(){
    return cy.get('[data-cy="table-row-0"]').click()
}
takeIncidentToWork(){
    return cy.get('[data-cy="take-button-from-lpage"]').click()
}

checkIncidentStatus(status){
    return cy.get('[data-cy = "status"]').invoke('text').should('contain',status)
}

getCloseIncidentButton(){
    return cy.get('[data-cy = "close-button-from-lpage"]').click()
}

getTypeSolvingField(){
    return cy.contains('Выберите тип решения').click()
}

selectTypeSolving(type){
    return cy.contains(type).click()
}

getSouceOfFaultField(){
    return cy.contains('Выберите виновника инцидента').click()
}

selectSourceOfFault(source){
    return cy.contains(source).click()
}
getCommentField(){
    return cy.get('[data-cy="textarea-field"]').click()
}
typeComment(comment){
    return cy.type(comment)
}
closeIncident(){
    return cy.get('[data-cy = "close-incident"]').click()
}
}
export let ticketPage = new TicketPage()