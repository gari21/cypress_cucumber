import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageobject/loginpage";



Given('I click on Register link under login button', () => {
	loginPage.getRegisterLink().click()
});

When('I fill all the details in signup form and click Register', () => {
	cy.registernewuser()
});
