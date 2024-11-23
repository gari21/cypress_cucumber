Feature: To Test User Registration functionality

    @regression @smoke
    Scenario: Validate User get registered without any issue
        Given I navigate to WebApp
        When I click on Register link under login button
        And I fill all the details in signup form and click Register
        Then I should see register "Your account was created successfully. You are now logged in." message