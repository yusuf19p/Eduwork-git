const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on,config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  pageLoadTimeout: 20000,
  video: false,
  defaultCommandTimeout: 20000,
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    nonGlobalStepDefinitions: false,
    setupNodeEvents,
  },
});
