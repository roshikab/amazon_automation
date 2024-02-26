class formPage {
    //To enter Input Field Data
    enterInputFieldData(selector, value) {
        cy.get(selector)
            .clear()
            .type(value)
            .should("have.value", value)
            .wait(500)
    }

    //Select from DropDown with Option 
    selectFromOption(selector, value) {
        cy.get(selector)
            .select(value, { force: true })
            .wait(500);
    }

    //Assert that element has the expected text content.
    verifyText(selector, value) {
        cy.get(selector)
            .should('have.text', value)
            .wait(500)
    }

    //Assert that the element is visible
    verifyElementVisibility(selector) {
        cy.get(selector)
            .should('be.visible')
            .wait(500)
    }

}

export default formPage