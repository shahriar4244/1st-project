const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
  },
  screenshotOnRunFailure: true,
  watchForFileChanges: false,
  video: false,
  redirectionLimit: 20,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 3000,
  execTimeout: 60000,
  defaultCommandTimeout: 10000,

});
