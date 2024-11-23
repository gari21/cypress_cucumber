/// <reference types="cypress" />

class userregistration {
    
    getTitle() {
        return cy.get('.title')
    }

    getFirstNameTextfield() {
        return cy.get("input[name='customer.firstName']")
    }

    getLastNameTextfield() {
        return cy.get("input[name='customer.lastName']")
    }

    getAddressTextfield() {
        return cy.get("input[name='customer.address.street']")
    }

    getCityTextfield() {
        return cy.get("input[name='customer.address.city']")
    }

    getStateTextfield() {
        return cy.get("input[name='customer.address.state']")
    }

    getZipCodeTextfield() {
        return cy.get("input[name='customer.address.zipCode']")
    }

    getPhoneTextfield() {
        return cy.get("input[name='customer.phoneNumber']")
    }

    getSSNTextfield() {
        return cy.get("input[name='customer.ssn']")
    }

    getUsernameTextfield() {
        return cy.get("input[name='customer.username']")
    }

    getPasswordTextfield() {
        return cy.get("input[name='customer.password']")
    }

    getRegisterButton() {
        return cy.get("td input[type='submit']")
    }

    getConfirmPasswordTextfield() {
        return cy.get('#repeatedPassword')
    } 
}
export default new userregistration();