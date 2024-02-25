import * as searchItemObj from "../../../pageObject/searchItemObj";

Given('Visit Amazon url', () => {
    cy.visit("https://www.amazon.com/")
})

And('Wait for {int} ms', (time) => {
    cy.wait(time);
})


And('Locates the department dropdown and clicks it.', () => {
    searchItemObj.searchForItem()
})

And('Retrieves all the options within the dropdown.', () => {

})

And('Generates a random index to select a random option.', () => {

})

And('Gets the text of the randomly selected option.', () => {

})

And('Logs the selected option.', () => {

})


And('Selects the randomly chosen option from the dropdown.', () => {

})

And('Asserts that the selected option is displayed.', () => {

})



