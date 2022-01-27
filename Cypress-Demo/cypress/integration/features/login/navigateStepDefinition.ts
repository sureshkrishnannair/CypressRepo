import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();

//const url = "https://www.google.ca/";

Given("I land on T website", () => {
  cy.visit(Cypress.config().baseUrl);
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Then(`I navigate to AutoInsuranceList`, (title) => {
  homePage.getAutoInsuranceListView();
});
