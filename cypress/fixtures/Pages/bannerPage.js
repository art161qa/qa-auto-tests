export class BannersPage{
    
    goToBannerSettings(){
        cy.get('div[data-cy="administration"]').click()
        cy.contains('h5', 'Баннеры').click()
    }
    getCreateBannerButton(){
        return cy.get('[data-cy="create-banner-button"]').click()
    }
    fillBannersName(name){
        cy.get('[data-cy = "create-banner-name-input"]').click().type(name)
    }
    selectBannerAction(action = 'Скопировать промокод'){
        cy.get('[data-cy="create-banner-action-select"]').click()
        cy.contains(action).click()
    }
    getPromoField(){
        return cy.get('[data-cy = "create-banner-promocode-input"]').click()
    }
    getValidityField(){
        return cy.get('[placeholder = "Укажите срок"]').click()
    }

    selectDateFrom(date){
        return cy.get(`[title = ${date}][class = "cell"]`).click()
    }
    selectDateTo(date){
        return cy.get(`[title = ${date}][class = "cell"]`).click()
    }

    getActivityTimeField(){
        return cy.get('[placeholder = "Укажите время"]').click()
    }

    selectActivityTimeFrom(hour,minute){
        cy.get('ul[data-type="hour"]').eq(2).contains(hour).click()
        cy.get('ul[data-type="minute"]').eq(2).contains(minute).click()
    }
    selectActivityTimeTo(hour,minute){
        cy.get('ul[data-type="hour"]').eq(1).contains(hour).click()
        cy.get('ul[data-type="minute"]').eq(1).contains(minute).click()
    }
    getUploadImageButton(){
       return cy.get('#banner-img').click({force:true})
    }

    getCreateButton(){
        return cy.get('[data-cy="create-banner-inner-button"]').click()
    }

    searchBanner(name){
        cy.get('[placeholder="Название, промокод"]')
            .click()
            .type(name)
    }

    openDetalPage(name){
        cy.contains(name).click()
    }

    getChangeStatusButton(){
        return cy.get('[data-cy = "banner-status-button"]').click()
    }
    getActivateButton(){
        return cy.contains('Включить').click()
    }
}

export let bannersPage = new BannersPage()
//⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄s
//⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄d
//⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰f
//⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤n
//⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗d
//⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄j
//⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄h
//⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄m
//⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄v
//⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄r
//⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄q
//negative CEZAR SHIFT