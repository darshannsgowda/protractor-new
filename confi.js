// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
    },
    specs: ['./tests/clientmodule/End_to_End_test1.js']
  }