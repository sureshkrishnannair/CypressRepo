import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();

//const url = "https://www.tinsure.ca/";

Given("Application is launched", () => {
  cy.visit(Cypress.config().baseUrl);
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

When("I select Auto Insurance from the tab", () => {
  homePage.selectOntarioAutoInsurance();
});

Then("I select Ontario Auto Insurance", () => {});

// Then(
//   "I enter valid postal code on the postal code field",
//   function (dataTable) {
//     homePage.compareHomeInsurancePostalCode_field(dataTable.rawTable[1][0]);
//   }
// );

Then("I enter valid postal code on the postal code field", (dataTable) => {
  dataTable.hashes().forEach((elem) => {
    homePage.selectOntarioAutoInsurance();
    homePage.compareHomeInsurancePostalCode_field(elem.postalCode);
  });
});

Then("I click on get started button", () => {
  // homePage.getStartedCompareOntarioHomeInsuranceQuotes_button();
});

Then("Application navigates to Quote page", () => {
  // homePage.getHomePage_link();
});
