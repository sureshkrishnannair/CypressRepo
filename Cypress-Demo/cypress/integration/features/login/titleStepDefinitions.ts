import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();

//const url = "https://google.com/";
Given("I land on T website", () => {
  cy.visit(Cypress.config().baseUrl);
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should(
    "include",
    "Personal & Business Insurance Savings | Insurance Broker - TInsure"
  );
});
