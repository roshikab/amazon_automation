Feature: Amazon Search

    Visit Amazon url,select a random option from the department dropdown and search for an item

    Background: Preconditions
        Given Visit Amazon url
        And Verify the Department Dropdown is visible

    Scenario Outline: To verify that the system selects different department option from the dropdown menu
        And Select a random option from the department dropdown and verify the selected option
        And Input "<itemName>" to search for the Item
        And Click search button
        And Verify if the search results text contains "<itemName>"

        Examples:
            | itemName       |
            | Laptop         |
            | Coffee Machine |

