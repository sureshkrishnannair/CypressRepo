class ClietInfoPage {
  //=================================================================================================//
  clientInfoContinue_button() {
    cy.wait(1000);
    cy.contains("Continue").click({ force: true });
  }
  //-------------------------------------------------------------------------------------------------//
  fullname_rule() {
    cy.wait(1000);
    // cy.contains("Please enter your name.").click({ force: true });
    cy.contains("Full Name")
      .parent(".form-group")
      .children(".is-danger")
      .should("contain", "Please enter your name.");
  }
  //-------------------------------------------------------------------------------------------------//
  email_rule() {
    cy.wait(1000);
    cy.contains("Email")
      .parent(".form-group")
      .children(".is-danger")
      .should("contain", "Please enter your email.");
  }
  //-------------------------------------------------------------------------------------------------//
  postalCode_rule() {
    cy.wait(1000);
    cy.contains("Postal Code")
      .parent(".form-group")
      .children(".is-danger")
      .should("contain", "Please enter your postal code.");
  }
  //-------------------------------------------------------------------------------------------------//
}

export default ClietInfoPage;
