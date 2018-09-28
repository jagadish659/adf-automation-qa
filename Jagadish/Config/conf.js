exports.config = {
  //seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
          'prefs': {
              'credentials_enable_service': false,
              'profile': {
                  'password_manager_enabled': false
              }
          }
      }
  },

 /* multiCapabilites:
  [{
    'browserName': 'chrome'
  },
  {
      'browserName': 'firefox'
  }] */

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../Spec/alfrescoFinal.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 5000000
  },
//reporting
    onPrepare: function () {
        browser.driver.manage().window().maximize();
  },
    onComplete: function () {
    }
      
}
