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
  },
  experimentalSessionAndOrigin: true,
})
