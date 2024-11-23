import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ContactInfo from "../pageobject/contactinfo"

Then('I should see the correct result as added during the User Registration', function () {
    ContactInfo.getFirstName().should('have.value', this.testdata.userregistration.firstname)
    ContactInfo.getLastName().should('have.value', this.testdata.userregistration.lastname)
    ContactInfo.getAddress().should('have.value', this.testdata.userregistration.address)
    ContactInfo.getCity().should('have.value', this.testdata.userregistration.city)
    ContactInfo.getState().should('have.value', this.testdata.userregistration.state)
    ContactInfo.getZipCode().should('have.value', this.testdata.userregistration.zipcode)
    ContactInfo.getPhoneNumber().should('have.value', this.testdata.userregistration.phone)
});
