/// <reference types="cypress" />

class accountOverview {
    
    getAccountOverviewHeader() {
        return cy.get("#showOverview h1")
    }

    getBillPaymentComplete() {
        return cy.get('#billpayResult h1')
    }

    getBillPayLink() {
        return cy.contains('Bill Pay')
    }

    getUpdateContactInfoLink() {
        return cy.contains('Update Contact Info')
    }
}
export default new accountOverview();