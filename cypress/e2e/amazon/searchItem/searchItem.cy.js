import * as searchItemObj from "../../../pageObject/searchItemObj";

Given('Visit Amazon url', () => {
    cy.visit("/")
})

And('Wait for {int} ms', (time) => {
    cy.wait(time);
})

And('Verify the Department Dropdown is visible', () => {
    searchItemObj.verifyDepartmentDropdown()
})

And('Select a random option from the department dropdown and verify the selected option', () => {
    searchItemObj.randomSelectAndVerifyDepartmentOption()
})

And('Input search for an Item', () => {
    searchItemObj.inputSearchItem()
})

And('Click search button', () => {
    searchItemObj.clickOnSearchIcon()
})





