/// <reference types="cypress" />

class loginpage {
    
    visit() {
        cy.visit('/')
    }

    getUsername() {
        return cy.get("input[name='username']", { timeout: 10000 })
    }

    getPassword() {
        return cy.get("input[name='password']", { timeout: 10000 })
    }

    getSubmit() {
        return cy.get("input[value='Log In']", { timeout: 60000 })
    }

    getMessage() {
        return cy.get("p.error", { timeout: 40000 })
    }

    getRegisterLink() {
        return cy.contains("Register")
    }

    getLogoutLink() {
        return cy.contains("Log Out")
    }

    getregistermessage()
    {
        return cy.get("#rightPanel>p")
    }
}
export default new loginpage();