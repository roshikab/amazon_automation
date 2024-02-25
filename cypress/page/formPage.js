class formPage {

    enterInputField(xpath, value) {
        cy.get(xpath)
            .clear({ force: true })
            .type(value, { force: true })
            .should("have.value", value)
            .wait(500)
    }

    //Select from DropDown with Option 
    selectFromOption(xpath, value) {
        cy.get(xpath)
            .select(value, { force: true })
            .wait(500);
    }
}

export default formPage