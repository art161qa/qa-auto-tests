// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
//____🐸🐸🐸🐸____🐸🐸🐸
//___🐸🐸🐸🐸🐸__🐸🐸🐸🐸
//__🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸⚪️⚫️⚫️⚪️🐸🐸🐸⚪️⚫️⚫️⚪️
//🐸⚪️⚫️⚫️⚪️⚫️⚪️🐸⚪️⚫️⚫️⚪️⚫️⚪️
//🐸⚪️⚫️⚪️⚫️⚫️⚪️🐸⚪️⚫️⚪️⚫️⚫️⚪️
//🐸🐸⚪️⚫️⚪️⚪️🐸🐸🐸⚪️⚫️⚪️⚪️
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🔴🔴🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🔴🔴🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
//🐸🐸🐸🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸
// For more comprehensive examples of custom
// ***ATTENTION! hint ∞
// https://stackoverflow.com/questions/56431316/set-local-storage-in-cypress
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'


// Authorization 
Cypress.Commands.add('genCode', (phone, role, stand) => {

    cy.request({
        method: 'POST',
        url: `https://${stand}-auth.okolo.app/api/${role}/gencode`,
        body: {
            'phone': phone
        }
    })
})

Cypress.Commands.add('getAuthCode', (phone, role, stand) => {

    cy.request({
        method: 'POST',
        url: `https://${stand}-auth.okolo.app/mod/${role}/get-code-by-phone`,
        body: {
            'phone': phone
        }
    }).then(response => {
        return cy.wrap(response.body.code)
    })
})

Cypress.Commands.add('getCrmToken', (phone, role, stand) => {
    cy.genCode(phone, role, stand).then(() => {
        cy.getAuthCode(phone, role, stand).then(code => {
            cy.request({
                method: 'POST',
                url: `https://${stand}-auth.okolo.app/api/employee/auth`,
                body: {
                    code: code,
                    device_id: 'RkIt6jcptG2On6v4BJ1H',
                    phone: phone,
                    app: 'crm'
                }
            }).then(response => {
                Cypress.env('crmToken').push(response.body.session.token)
            })
        })
    })
})

Cypress.Commands.add('getMobileToken', (phone, role, stand) => {
    cy.genCode(phone, role, stand).then(() => {
        cy.getAuthCode(phone, role, stand).then(code => {
            cy.request({
                method: 'POST',
                url: `https://${stand}-auth.okolo.app/api/client/auth`,
                body: {
                    code: code,
                    device_id: 'w0bxt3p3dc6',
                    phone: phone,
                }
            }).then(response => { 
                Cypress.env('mobileToken').push(response.body.session.token)
            })
        })
    })
})

Cypress.Commands.add('visitCrmPage', (phone, role,stand, route) => {
    let token
    let id
    let expires
    cy.getCrmToken(phone, role,stand).then(response => {
        token = response.body.session.token,
        id = response.body.session.id,
        expires = response.body.session.expires
    })
    cy.visit(`${route}`, {
        onBeforeLoad(win) {
            win.localStorage.token = token
            win.localStorage.expire_date = expires
            win.localStorage.id = id
        }
    })
})

Cypress.Commands.add('emulateMissingCall', (phone, stand) => {
    cy.request({
        method: 'POST',
        url: `https://${stand}-telephony.okolo.app/events/summary`,
        body: {
            "json": `{\"call_direction\":1,\"entry_result\":0,\"from\":{\"number\":\"79169546257\"},\"to\":{\"extension\":\"15589\"},\"line_number\":\"74994442310\",\"entry_id\":\"{{$randomPassword}}\"}`
        }
    }).then(resp => {
        console.log(resp)
    })
})

Cypress.Commands.add('createIncident', (orderId, problem, comment, tokenIndex = 0) => {
        cy.request({
            method: 'POST',
            url: 'https://dev-incidents.okolo.app/api/v1/incidents/create',
            headers: {
                'app-token': Cypress.env('crmToken')[tokenIndex]
            },
            body: {
                channel: "chat",
                comment: comment,
                order_id: orderId,
                problem: problem,
                source: "okolo",
                type: "partner",
                user_type: "partner"
            }
        })
    
    
})

Cypress.Commands.add('orderList', (tokenIndex = 0) => {

    cy.request({
        method: 'POST',
        url: 'https://dev-orders.okolo.app/api/order/list',
        headers: {
            'app-token': Cypress.env('crmToken')[tokenIndex]
        },
        body: {
            filters: {},
            nav: {page: 1, lpage: 100},
            sort: {date_create: "desc"}
        }
        
    })
})

