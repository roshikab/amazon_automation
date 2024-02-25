Cypress.Commands.add("checkAndReadFile", (filePath) => {
    return cy.task('checkFileExists', filePath).then(result => {
        if (result)
            return cy.readFile(filePath);
    })
})