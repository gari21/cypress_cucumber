# cypresscucumber-Project

This project uses **Cypress** for end-to-end testing, integrated with **Cucumber** for behavior-driven development (BDD). It helps automate and validate features of a web application by writing tests in **Gherkin** syntax and executing them using Cypress.
Project is on website PARA BANK and five modules automated for this project Login,Registration,Bill Payment,Account Overview,ContactInfo .


## Project Structure
Here’s a breakdown of the directory structure:
 
CYPRESSCUCUMBER-project/
├── cypress/
│   ├── e2e/                           # This folder contains feature files written in Gherkin for BDD (Behavior-Driven Development)
│   │   ├── bdd/                       # Folder for all Behavior-Driven Development related files
│   │   │   ├── features/              # Feature files in Gherkin format (for testing different functionalities)
│   │   │   │   ├── login.feature      # Feature file for login functionality (e.g., logging into the app)
│   │   │   │   ├── userregistration.feature  # Feature file for user registration functionality
│   │   │   │   ├── billpayment.feature   # Feature file for bill payment functionality
│   │   │   │   ├── accountoverview.feature  # Feature file for viewing account overview
│   │   │   │   └── contactinfo.feature    # Feature file for managing contact information
│   ├── Pageobject/                     # Contains the page object models (PO) that return elements of various pages
│   │   ├── loginpage.js                # Page Object for the login page (returns login form elements)
│   │   ├── accountoverview.js          # Page Object for the account overview page (returns account-related elements)
│   │   ├── billpayments.js             # Page Object for the bill payments page (returns bill payment elements)
│   │   ├── contactinfo.js              # Page Object for the contact information page (returns contact-related elements)
│   │   └── userregistration.js        # Page Object for the user registration page (returns user registration form elements)
│   ├── stepdefinitions/                # Step definitions that map Gherkin steps to Cypress actions
│   │   ├── login_steps.js              # Step definitions for login functionality
│   │   ├── accountservice_steps.js     # Step definitions for account overview functionality
│   │   ├── billpayment_steps.js        # Step definitions for bill payment functionality
│   │   ├── contactinfo_steps.js        # Step definitions for managing contact information
│   │   └── userregistration_steps.js  # Step definitions for user registration functionality
│   ├── hooks.cy.js                    # Hooks file to set up any necessary pre-test actions (runs before each test)
|   |──  Fixtures/                     # keep data
|   |    ├── userdetails.json          # user data json is available here               
│   ├── Reports/                       # Folder containing test reports in various formats
│   │   ├── json_report.json           # JSON formatted report
│   │   └── defaultreport/             # Default HTML report for viewing results
│   ├── support/                       # Support files that help configure and extend Cypress functionality
│   │   ├── commands.js                # Custom commands that simplify repetitive actions (e.g., login)
│   │   └── e2e.js                     # General setup for tests (global configurations, hooks, etc.)
├── cypress.config.js                  # Cypress configuration file that defines project settings
├── cypress.env.json                   # Configuration file for environment variables (e.g., test URLs, API keys)
├── package.json                       # Contains project metadata, dependencies, and scripts to run tests
├── package-lock.json                  # Dependency tree lock file that ensures consistent installs across environments
└── README.md                          # Project documentation with setup instructions and usage guidelines


## Install dependencies
Make sure you have Node.js and npm installed. Then, install project dependencies by running:
-------------
npm install
-------------

# Run  all test scripts

```
npm test  # via this command all test scripts will run with cucumber report 

```  
### Below is the path of expectedResultImages for all test scripts
--expectedResultImages folder - cypress\expectedResultImages\alltestscriptresult.png

# Steps for cucumber report downloading  
----
# Method 1
Copy the path from the result of reports (refer screenshot of test scripts)

# Method 2
#Open Reports folder inside --e2e folder
#expand cucumber report 
#right click on index.html and copy the path
#open the copied path in the browser

# Tags usage

### Run for Tagging tests

@regression and @smoke test has been used in this project for running those tags please use below command
----
npm run testregression  # for regression script
npm run testsmoke       # for smoke script
----

 ### Below is the path of expectedResultImages for test regression and smoke
--expectedResultImages folder - cypress\expectedResultImages\regressionresult.png
--expectedResultImages folder - cypress\expectedResultImages\smokeresult.png



















 