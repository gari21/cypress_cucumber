import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import AccountOverview from "../pageobject/accountoverview"
import BillPayment from "../pageobject/billpayment"

Then('I fill all the details in Bill Payment Service form and click Send Payment', function () {
	cy.fillbillinginformation()
});

Then('I should be navigated to Bill Payment Complete', () => {
	AccountOverview.getBillPaymentComplete().should("have.text", "Bill Payment Complete")
});

Then('I should see Billpayment message correctly', function () {
	let message = `Bill Payment to ${this.testdata.billpayment.payeename} in the amount of $${this.testdata.billpayment.amount} from account`
	BillPayment.getBillSuccessfulMessage().should('include.text', message)
});