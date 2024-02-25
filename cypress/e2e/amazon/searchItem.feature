Feature: Amazon Search

    Visit Amazon url and Search for an item

    Background: Preconditions
        Given Visit Amazon url


    Scenario: Selects a random dropdown option on Amazon Search
        And Select the random option from the dropdown
        And Input search for an Item
        And Click search button

