const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './youtubeAutomatizacion.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: "https://www.youtube.com",
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    steps: "./steps/youtubeAutomatizacion.feature",
    tests: ["./tests/youtubeAutomatizacion.js"],
  }, 
  plugins: {
    allure: {
      enabled: true
    }
  },
  name: 'framework_andy',
}