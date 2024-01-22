const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  screenshotOnRunFailure: true, // quando meu teste falhar, vai tirar print
  screenshotsFolder: 'cypress/screenshots', // vai armazenar nessa pasta
  video: true, // habilidtar o vídeo
  videoCompression: false,
  videosFolder: 'cypress/videos'  // vai armazenar nessa pasta
});
