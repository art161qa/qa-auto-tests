import {bannersPage} from '..//fixtures/Pages/bannerPage'
let bannerName = 'Testing banner 5'
describe('Banners', ()=>{
    before(()=>{
        cy.visitCrmPage('9053330505', 'employee', 'dev','https://dev-crm.okolo.app/')
    })
it('First case', ()=>{
    bannersPage.goToBannerSettings()
    bannersPage.getCreateBannerButton()
    bannersPage.fillBannersName(bannerName)
    bannersPage.selectBannerAction('Скопировать промокод')
    bannersPage.getPromoField().type('FREEDELIVERY')
    bannersPage.getValidityField()
    bannersPage.selectDateFrom('2022-04-29')
    bannersPage.selectDateTo('2022-05-25')
    bannersPage.getActivityTimeField()
    bannersPage.selectActivityTimeFrom(10,10)
    bannersPage.selectActivityTimeTo(22,20)
    bannersPage.getUploadImageButton().attachFile('test.jpg')
    cy.wait(1500)
    bannersPage.getCreateButton()
    bannersPage.searchBanner(bannerName)
    bannersPage.openDetalPage(bannerName)
    bannersPage.getChangeStatusButton()
    bannersPage.getActivateButton()
    })
})