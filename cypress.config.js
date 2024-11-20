const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://formy-project.herokuapp.com",
    viewportHeight: 550,
    viewportWidth: 660,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
