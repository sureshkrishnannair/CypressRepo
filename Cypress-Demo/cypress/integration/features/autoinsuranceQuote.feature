Feature: Auto Insurance Quote for Ontario
  As a customer I want to look for cheap auto quote


  @regression
  Scenario: Navigate to Quote form by successfully proving the postal code
    Given Application is launched
    When I select Auto Insurance from the tab
    Then I select Ontario Auto Insurance
    And I enter valid postal code on the postal code field
      | postalCode |
      | M5B2H5     |
      | M5B2H6    |
    And I click on get started button
    Then Application navigates to Quote page


