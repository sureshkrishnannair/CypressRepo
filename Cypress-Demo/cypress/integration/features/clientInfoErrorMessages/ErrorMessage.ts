import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import ClientInfoPage from "../../../support/pageObjects/ClientInfoPage";

const homePage = new HomePage();
const clientInfoPage = new ClientInfoPage();

Given("Homepage is displayed", () => {
  cy.visit(Cypress.config().baseUrl);
  //cy.visit("https://google.com/");
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  homePage.selectOntarioAutoInsurance();
});

When("Ontario AutoInsurance is selected from navigation tab", () => {
  homePage.selectOntarioAutoInsurance();
});

When("user enter the  postalCode and getstarted", (dataTable) => {
  dataTable.hashes().forEach((elem) => {
    // homePage.selectOntarioAutoInsurance();
    homePage.compareHomeInsurancePostalCode_fields(elem.postalCode);
  });
});

And("user click on continue button in clintinfo page", () => {
  clientInfoPage.clientInfoContinue_button();
});

And("validation rule is triggered for fullname", () => {
  clientInfoPage.fullname_rule();
  //homePage.selectHome_link();
});

Then("validation rule is triggered for email", () => {
  clientInfoPage.email_rule();
  //homePage.selectHome_link();
});

Then("validation rule is triggered for postalCode", () => {
  clientInfoPage.postalCode_rule();
  homePage.selectHome_link();
});
