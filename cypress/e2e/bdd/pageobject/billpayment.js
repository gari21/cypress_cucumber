/// <reference types="cypress" />

class billpayment {

    getPayeeName() {
        return cy.get('input[name="payee.name"]')
    }

    getAddress() {
        return cy.get('input[name="payee.address.street"]')
    }

    getCity() {
        return cy.get('input[name="payee.address.city"]')
    }

    getState() {
        return cy.get('input[name="payee.address.state"]')
    }

    getZipCode() {
        return cy.get('input[name="payee.address.zipCode"]')
    }

    getPhone() {
        return cy.get('input[name="payee.phoneNumber"]')
    }

    getAccount() {
        return cy.get('input[name="payee.accountNumber"]')
    }

    getVerifyAccount() {
        return cy.get('input[name="verifyAccount"]')
    }

    getAmount() {
        return cy.get('input[name="amount"]')
    }

    getSendPayment() {
        return cy.get('input[value="Send Payment"]')
    }

    getBillSuccessfulMessage() {
        return cy.get('#billpayResult p:nth-child(2)')
    }
}
export default new billpayment();