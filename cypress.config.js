const { defineConfig } = require("cypress");
const fs = require('fs')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //!Cypress Cucumber Preprocessor
      on('file:preprocessor', cucumber())

      //!Check file availability
      on("task", {
        checkFileExists(filename) {
          if (fs.existsSync(filename)) {
            return true;
          }
          return false;
        },
      });
    },
    specPattern: "**/searchItem.feature",
    baseUrl: "https://www.amazon.com/"
  },
  experimentalModifyObstructiveThirdPartyCode: true,
  viewportWidth: 2000,
  viewportHeight: 1000,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 30000,
})
