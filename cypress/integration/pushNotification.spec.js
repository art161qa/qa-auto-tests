/// <reference types="cypress" />

import { pushNotifications } from '../fixtures/Pages/pushNotification'
//let pushNot = new PushNotifications()
describe('PushNotifications', ()=>{
    before(()=>{
        cy.visitCrmPage('9053330505', 'employee', 'dev','https://dev-crm.okolo.app/')
        //cy.getCrmToken('9017456860', 'employee', 'dev')
    })
it.only('Send push', ()=>{
    pushNotifications.goToPushSettings()
    pushNotifications.getHeaderPushField().type('Some header')
    pushNotifications.getTextPushField().type('Some text')
    pushNotifications.getRecipientFilter()
    pushNotifications.selectRecipientByDeviceId()
    pushNotifications.typeLink('https://www.dev-admin.okolo.app')
    pushNotifications.getSendPushButton().click()
    pushNotifications.checkNotifyExist()
    })
it('Send push (Upload list of device id)', () => {
    pushNotifications.goToPushSettings()
    pushNotifications.getHeaderPushField().type('Some header')
    pushNotifications.getTextPushField().type('Some text')
    pushNotifications.getRecipientFilter()
    pushNotifications.selectRecipientListDeviceId()
    pushNotifications.getUploadListButton().attachFile('listDeviceId.csv')
    pushNotifications.typeLink('https://www.dev-admin.okolo.app')
    pushNotifications.getSendPushButton().click()
    pushNotifications.checkNotifyExist()
    pushNotifications.checkNotifyText()
    })
it('get token', ()=> {
    cy.orderList()
})
})