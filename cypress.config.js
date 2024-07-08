module.exports = {

  "viewportWidth": 1920, 
  "viewportHeight":1080,
  "watchForFileChanges":true,
  "video":true,
  "screenshotOnRunFailure":true,
  "screenshotsFolder":"cypress/fixtures/screenshot",


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl:  'https://tooba-web.myababil.com/',
  },
};
