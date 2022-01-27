class HomePage {
  //=================================================================================================//
  //-- This will provide list view of CI and select Small Business Insurance --
  getAutoInsuranceListView() {
    cy.wait(1000);
    // cy.get(".postal-code-in-main-banner").select("Business");
    cy.contains("Commercial Insurance").trigger("mouseover");
    cy.wait(2000);
    cy.contains("Small Business Insurance").click({ force: true });
    cy.wait(2000);
  }
  //-------------------------------------------------------------------------------------------------//
  //-- For Degugging Only --
  getDebugMsg() {
    cy.log("Debudding.....");
  }

  //=================================================================================================//
  //-- This willdisplay Ontario Auto Insurance from the main Tab --
  selectOntarioAutoInsurance() {
    cy.wait(1000);
    cy.contains("Auto Insurance ").trigger("mouseover");
    cy.contains("Ontario Auto Insurance").click({ force: true });
    cy.wait(2000);
  }
  //=================================================================================================//
  //-- This buttons select will navigate from Home page to Quote  --
  getStartedCompareOntarioHomeInsuranceQuotes_button() {
    cy.wait(1000);
    cy.contains("Get Started").click({ force: true });
    cy.wait(2000);
  }
  //=================================================================================================//
  //-- This will allow ostal code to be entered and validated and takes back to Home page --
  compareHomeInsurancePostalCode_field(postCode) {
    cy.wait(1000);
    // cy.get("input")
    //   .invoke("attr", "placeholder")
    //   .type("L1C0L4", { force: true });
    cy.get(".postal-code-in-main-banner").type(postCode, { force: true });
    cy.wait(2000);
    cy.contains("Get Started").click({ force: true });
    cy.wait(2000);
    cy.get('[title="Tinsure Quoter"]').click({ force: true });
    cy.wait(2000);
    cy.contains("Return To Our Website").click({ force: true });
    cy.wait(2000);
  }
  //=================================================================================================//
  //-- This will takes to Home page --
  getHomePage_link() {
    cy.wait(1000);
    cy.get('[title="Tinsure Quoter"]').click({ force: true });
  }
  //=================================================================================================//
  //-- This will provide list view of CI and select Small Business Insurance --
  compareHomeInsurancePostalCode_fields(postCode) {
    cy.wait(1000);
    // cy.get("input")
    //   .invoke("attr", "placeholder")
    //   .type("L1C0L4", { force: true });
    cy.get(".postal-code-in-main-banner").type(postCode, { force: true });
    cy.wait(2000);
    cy.contains("Get Started").click({ force: true });
    cy.wait(2000);
    // cy.get('[title="Tinsure Quoter"]').click({ force: true });
    // cy.wait(2000);
    // cy.contains("Return To Our Website").click({ force: true });
    // cy.wait(2000);
  }
  //=================================================================================================//
  //-- This will provide list view of CI and select Small Business Insurance --
  selectHome_link() {
    cy.get('[title="Tinsure Quoter"]').click({ force: true });
    cy.wait(2000);
    cy.contains("Return To Our Website").click({ force: true });
    cy.wait(2000);
  }
  //=================================================================================================//
}

export default HomePage;
