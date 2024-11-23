import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import AccountOverview from "../pageobject/accountoverview";

Then('I should be navigated to AccountsOverview', () => {
	AccountOverview.getAccountOverviewHeader().should('contain.text', "Accounts Overview")
});

Then('I click on Bill Pay link', () => {
	AccountOverview.getBillPayLink().click()
});

Then('I click on Update Contact Info link', () => {
	AccountOverview.getUpdateContactInfoLink().click()
});
