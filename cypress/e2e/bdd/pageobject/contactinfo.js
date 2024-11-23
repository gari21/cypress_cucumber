/// <reference types="cypress" />

class contactinfo {

    getFirstName() {
        return cy.get('input[name="customer.firstName"]')
    }

    getLastName() {
        return cy.get('input[name="customer.lastName"]')
    }

    getAddress() {
        return cy.get('input[name="customer.address.street"]')
    }

    getCity() {
        return cy.get('input[name="customer.address.city"]')
    }

    getState() {
        return cy.get('input[name="customer.address.state"]')
    }

    getZipCode() {
        return cy.get('input[name="customer.address.zipCode"]')
    }

    getPhoneNumber() {
        return cy.get('input[name="customer.phoneNumber"]')
    }
}
export default new contactinfo();