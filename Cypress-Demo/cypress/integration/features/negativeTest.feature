Feature: Negative scenario test to fail a test case and capture screenshot

    I want to launch the Application
    I want to check the wrong title of the page

    @regression
    Scenario: Launch application and assert against wrong title
        Given I land on TInsure website
        Then I see " The Personal " not in the title