/// <reference types="cypress" />
export class OrdersPage {
    goToOrdersPage(){
        return cy.get('[data-cy = "orders"]').click()
    }
    createOrder(tokenIndex = 0){
        cy.request({
            method: 'POST',
            url: 'https://dev-orders.okolo.app/api/app/order/create',
            headers: {
                "app-token": Cypress.env('mobileToken')[tokenIndex]
            },
            body: {
                "shop": 534,
                "address": "5fbd02addd30c99cc9f2cfc3",
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

        })
    }

}
export let ordersPage = new OrdersPage()