Feature: Application launched properly and navigate further pages

      I want to launch the Application
      I want to check the title of the page
      I want to view AutoInsuranceList

      @regression
      Scenario: Launch application and verify its title
            Given I land on TInsure website
            Then I see "Personal & Business Insurance Savings | Insurance Broker - TInsure" in the title
      @regression
      Scenario: Navigate to AutoInsuranceList
            Given I land on TInsure website
            Then I navigate to AutoInsuranceList