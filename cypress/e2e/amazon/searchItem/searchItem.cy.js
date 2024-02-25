import * as searchItemObj from "../../../pageObject/searchItemObj";

Given('Visit Amazon url', () => {
    cy.visit("/")
})

And('Wait for {int} ms', (time) => {
    cy.wait(time);
})


And('Select the random option from the dropdown', () => {
    searchItemObj.selectRandomDropdownOption()
})

And('Input search for an Item', () => {
    searchItemObj.inputSearchItem()
})

And('Click search button', () => {
    searchItemObj.clickOnSearchIcon()
})





