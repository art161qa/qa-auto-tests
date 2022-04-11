import {bannersPage, ordersPage} from '..//fixtures/Pages/ordersPage'

/// <reference types="cypress" />

import { pushNotifications } from '../fixtures/Pages/pushNotification'
//let pushNot = new PushNotifications()
describe('PushNotifications', ()=>{
    before(()=>{
        cy.getMobileToken('9073330505', 'client', 'dev')
        cy.visitCrmPage('9053330505', 'employee', 'dev','https://dev-crm.okolo.app/')

    })
    it('createOrder', ()=>{
        ordersPage.createOrder()
    })

})