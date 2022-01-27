Feature: ClientInfo Error Message

    AC: As a user when I select Continue button on Client Info page with out entering data, it shouldtrigger validation rules for name,email
    AC: Negative test to verify that there is no validation rule triggered for postal code (Demo purpose)


    @smoke
    Scenario: Error Messge on Postal Code Field is triggered
        Given Homepage is displayed
        When Ontario AutoInsurance is selected from navigation tab
        When user enter the  postalCode and getstarted
            | postalCode |
            | M5B2H5   |
        And user click on continue button in clintinfo page
        Then validation rule is triggered for postalCode

    @smoke
    Scenario:Error Messge on  Email and Name  Fields are triggered
        Given Homepage is displayed
        When Ontario AutoInsurance is selected from navigation tab
        When user enter the  postalCode and getstarted
            | postalCode |
            | M5B2H5     |
        And user click on continue button in clintinfo page
        Then validation rule is triggered for email
        And validation rule is triggered for fullname




