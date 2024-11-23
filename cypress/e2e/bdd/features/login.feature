Feature: To Test Login functionality along with some other areas 

  @regression @smoke
  Scenario: Verify Login functionality with incorrect credentials
    Given I enter incorrect credentials
    When I click on Login button
    Then I should see "The username and password could not be verified." message

  @regression
  Scenario: Verify Login functionality with correct credentials
    Given I click on Register link under login button
    When I fill all the details in signup form and click Register
    And I click logout link
    And I enter correct credentials
    And I click on Login button
    Then I should be navigated to AccountsOverview

  @smoke
  Scenario: Verify Bill Payment Complete
    Given I click on Register link under login button
    When I fill all the details in signup form and click Register
    And I click logout link
    And I enter correct credentials
    And I click on Login button
    And I click on Bill Pay link
    And I fill all the details in Bill Payment Service form and click Send Payment
    Then I should be navigated to Bill Payment Complete
    And I should see Billpayment message correctly

  @smoke
  Scenario: Verify Update Profile successfully
    Given I click on Register link under login button
    When I fill all the details in signup form and click Register
    And I click logout link
    And I enter correct credentials
    And I click on Login button
    And I click on Update Contact Info link
    Then I should see the correct result as added during the User Registration

