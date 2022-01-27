before(() => {
  cy.log("Before Each Debug...");
  cy.wait(1000);
});

beforeEach(() => {
  cy.log("Before Each Debug...");
  cy.wait(1000);
});

after(() => {
  cy.log("After Debug...");
  cy.wait(1000);
});

afterEach(() => {
  cy.log("After Each Debug...");
  cy.wait(1000);
  //=====================================================//
  cy.isElementExist('[title="T Quoter"]').then((value) => {
    if (!value) {
      //cy.get("#userButton", { timeout: 40000 }).should("be.visible");
      cy.wait(2000);
      cy.get('[title="Home"]').click({ force: true, multiple: true });
    } else if (value.length > 0) {
      cy.contains(" YES ").click({ force: true, multiple: true });
      //cy.get("#userButton", { timeout: 40000 }).should("be.visible");
      cy.wait(2000);
      cy.get('[title="T Quoter"]').click({
        force: true,
        multiple: true,
      });
      cy.wait(2000);
      cy.contains("Return To Our Website").click({
        force: true,
        multiple: true,
      });
      cy.wait(2000);
      cy.get('[title="Home"]', { timeout: 40000 }).should("be.visible");
    }
  });

  //=====================================================//
});
