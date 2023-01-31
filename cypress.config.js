const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 550,
  viewportHeight: 750,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
