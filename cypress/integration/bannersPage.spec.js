/// <reference types="cypress" />
import {bannersPage} from '..//fixtures/Pages/bannerPage'
let bannerName = 'Testing banner'
describe('Banners', ()=>{
    before(()=>{
    cy.visitCrmPage('9053330505', 'employee', 'dev','administaration')
})
    
it('First case', ()=>{
    bannersPage.goToBannerSettings()
    bannersPage.getCreateBannerButton()
    bannersPage.fillBannersName(bannerName)
    bannersPage.selectBannerAction('Скопировать промокод')
    bannersPage.getPromoField().type('CODECODE')
    bannersPage.getValidityField()
    bannersPage.selectDateFrom('2022-05-02')
    bannersPage.selectDateTo('2022-05-07')
    bannersPage.getActivityTimeField()
    bannersPage.selectActivityTimeFrom(12,25)
    bannersPage.selectActivityTimeTo(22,40)
    bannersPage.getUploadImageButton().attachFile('test.jpg')
    cy.wait(1500)
    bannersPage.getCreateButton()
    bannersPage.searchBanner(bannerName)
    bannersPage.applyStatusFilter('Неактивен')
    bannersPage.openDetalPage(bannerName)
    bannersPage.getChangeStatusButton()
    bannersPage.getActivateButton()
    })
    it.skip('auth method', () => {
        cy.authCrm('9053330505', 'employee', 'dev')
        cy.visit('/')
    })
})