Feature: Amazon Search

    Visit Amazon url,select a random option from the department dropdown and Search for an item

    Background: Preconditions
        Given Visit Amazon url
        And Verify the Department Dropdown is visible

    Scenario: To verify that the system selects different department option from the dropdown menu
        And Select a random option from the department dropdown and verify the selected option
        And Input search for an Item
        And Click search button

