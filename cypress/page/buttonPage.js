class buttonPage {

    //To Click Specific Button that contains
    clickButtonThatContains(selector, string) {
        cy.get(selector)
            .contains(string)
            .click()
            .wait(500)
    }

    //To verify specific Button that contains string
    verifyButtonThatContains(selector, string) {
        cy.get(selector)
            .contains(string)
            .should('be.visible')
            .wait(500)
    }

    //To Click Specific Button 
    clickButton(selector) {
        cy.get(selector).click().wait(500)
    }

    //To verify specific Button
    verifyButton(selector) {
        cy.get(selector)
            .should('be.visible')
            .wait(500)
    }

}

export default buttonPage