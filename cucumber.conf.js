const fs = require('fs');
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots
} = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
  await createSession();
});

AfterAll(async () =>  {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'POC'
      }
    });
  }, 1000);
});

After(() => {
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});
