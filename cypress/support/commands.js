// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import BillPayment from "../e2e/bdd/pageobject/billpayment"
import loginPage from "../e2e/bdd/pageobject/loginpage"
import UserRegistration from "../e2e/BDD/pageobject/userregistration"

Cypress.Commands.add('login', (email, password) => {
    let login = new loginPage()
    login.getUsername().type(email)
    login.getPassword().type(password)
    login.getSubmit().click()
})

Cypress.Commands.add('registernewuser', function () {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    //let userRegistration = new UserRegistration()
    
    UserRegistration.getTitle().then(($el) => {
        if ($el.text() === "Signing up is easy!") {
            UserRegistration.getFirstNameTextfield().type(this.testdata.userregistration.firstname)
            UserRegistration.getLastNameTextfield().type(this.testdata.userregistration.lastname)
            UserRegistration.getAddressTextfield().type(this.testdata.userregistration.address)
            UserRegistration.getCityTextfield().type(this.testdata.userregistration.city)
            UserRegistration.getStateTextfield().type(this.testdata.userregistration.state)
            UserRegistration.getZipCodeTextfield().type(this.testdata.userregistration.zipcode)
            UserRegistration.getPhoneTextfield().type(this.testdata.userregistration.phone)
            UserRegistration.getSSNTextfield().type(this.testdata.userregistration.ssn)
            const username = this.testdata.userregistration.username + randomNumber
            const password = this.testdata.userregistration.password + randomNumber
            UserRegistration.getUsernameTextfield().type(username)
            UserRegistration.getPasswordTextfield().type(password)
            UserRegistration.getConfirmPasswordTextfield().type(password)
            UserRegistration.getRegisterButton().click()
            Cypress.env("USERNAME", username)
            Cypress.env("PASSWORD", password)
        } else if ($el.text() === "Accounts Overview") {
            loginPage.getLogoutLink().click();
        }
        else if ($el.text() === "Error!") {
            loginPage.getRegisterLink().click()
            UserRegistration.getFirstNameTextfield().type(this.testdata.userregistration.firstname)
            UserRegistration.getLastNameTextfield().type(this.testdata.userregistration.lastname)
            UserRegistration.getAddressTextfield().type(this.testdata.userregistration.address)
            UserRegistration.getCityTextfield().type(this.testdata.userregistration.city)
            UserRegistration.getStateTextfield().type(this.testdata.userregistration.state)
            UserRegistration.getZipCodeTextfield().type(this.testdata.userregistration.zipcode)
            UserRegistration.getPhoneTextfield().type(this.testdata.userregistration.phone)
            UserRegistration.getSSNTextfield().type(this.testdata.userregistration.ssn)
            const username = this.testdata.userregistration.username + randomNumber
            const password = this.testdata.userregistration.password + randomNumber
            UserRegistration.getUsernameTextfield().type(username)
            UserRegistration.getPasswordTextfield().type(password)
            UserRegistration.getConfirmPasswordTextfield().type(password)
            UserRegistration.getRegisterButton().click()
            loginPage.getLogoutLink().click();
            Cypress.env("USERNAME", username)
            Cypress.env("PASSWORD", password)
        }
    })
})
Cypress.Commands.add('fillbillinginformation', function () {
    //let billPayment = new BillPayment()
    BillPayment.getPayeeName().type(this.testdata.billpayment.payeename)
    BillPayment.getAddress().type(this.testdata.billpayment.address)
    BillPayment.getCity().type(this.testdata.billpayment.city)
    BillPayment.getState().type(this.testdata.billpayment.state)
    BillPayment.getZipCode().type(this.testdata.billpayment.zipcode)
    BillPayment.getPhone().type(this.testdata.billpayment.phone)
    BillPayment.getAccount().type(this.testdata.billpayment.account)
    BillPayment.getVerifyAccount().type(this.testdata.billpayment.account)
    BillPayment.getAmount().type(this.testdata.billpayment.amount)
    BillPayment.getSendPayment().click()
})
Cypress.Commands.add('errormessage', function (value) {
    loginPage.getMessage().then($message => {
        const messageText = $message.text();
    
        
        if (messageText.includes('An internal error has occurred')) {
          cy.log('Internal error occurred, handling it...');
          cy.wrap(null).should('not.exist'); 
        } else if (messageText.includes('User and password incorrect')) {
          cy.log('Login failed due to incorrect credentials.');
          cy.wrap(null).should('not.exist');
        } else {
          // If it's a general message, check that the message matches the expected value
          cy.wrap(messageText).should('include', value);  // Use "include" for partial matching
        }
    
})
     
})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })