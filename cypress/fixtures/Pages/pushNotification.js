
export class PushNotifications{
    goToPushSettings(){
        cy.get('div[data-cy="administration"]').click()
        cy.contains('h5', 'Пуши').click()
    }
    getHeaderPushField () {
        return cy.get('[placeholder = "Не более 37 символов с пробелами"]').click()
    }
    getTextPushField () {
        return cy.get('[data-cy = "textarea-field"]').click()
    }

    getRecipientFilter() {
        return cy.get('[data-cy="select-label"]').click()
    }

    selectRecipientByDeviceId(deviceId = 123){
        cy.contains('Указанный device id').click()
        cy.get('[placeholder = "Введите device id"]').click().type(deviceId)
    }
    selectRecipientListDeviceId(){
        cy.contains('Загрузить список device id').click()
    }
    getUploadListButton(){
        return cy.get('[data-cy = "load-csv"]')
    }

    typeLink(link){
         cy.get('[placeholder = "Ссылка для пуш-уведомления"]').click().type(link)
         this.isOkoloLink(link)
    }
    isOkoloLink (link){
        let secondDomen = link.split('.').reverse()[1].split('//').reverse()[0]
        if (secondDomen !== 'okolo'){
            this.checkIsExternalLilk()
        }

    }
    checkIsExternalLilk(){
        return cy.contains('span','Внешняя ссылка').click()
    }
    
    getSendPushButton(){
        return cy.get('[data-cy = "send-push-button"]')
    }

    checkNotifyExist(){
        return cy.contains('span', 'Рассылка создана и отправлена').should('exist')
    }
    checkNotifyText(){
        return cy.contains('span', 'Рассылка создана и отправлена').should('contain.text', 'Рассылка создана и отправлена')
    }
}
export let pushNotifications = new PushNotifications()