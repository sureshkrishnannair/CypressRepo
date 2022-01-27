import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();

//const url = "https://www.google.ca/";
Given("I land on TInsure website", () => {
  cy.visit(Cypress.config().baseUrl);
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Then(`I see {string} not in the title`, (title) => {
  cy.title().should(
    "include",
    "The Personal & Business Insurance Savings | Insurance Broker - TInsure"
  );
});
