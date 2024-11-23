import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageobject/loginpage";


Given('I navigate to WebApp', function () {
    cy.visit('/')
})

Then('I enter correct credentials', () => {
    LoginPage.getUsername().type(Cypress.env('USERNAME'))
    LoginPage.getPassword().type(Cypress.env('PASSWORD'))
})

Given('I enter incorrect credentials', () => {
    cy.log(Cypress.env('USERNAME'))
    LoginPage.getUsername().type(Cypress.env('PASSWORD'))
    LoginPage.getPassword().type('abc')
})

Then('I click on Login button', function () {
    LoginPage.getSubmit().click()
})

Then('I should see {string} message', (value) => {
    cy.errormessage(value);
})

Then('I should see register {string} message', (value) => {
	LoginPage.getregistermessage().should("have.text", value)
   
})

Then('I click logout link', () => {
    LoginPage.getLogoutLink().click()
});