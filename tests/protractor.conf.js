exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',
  specs: [ 'features/*.feature' ],
  cucumberOpts: {
    require : 'steps/*.js',
    tags : '@dev',
    format : 'pretty'
    //format : 'json'
  },
  capabilities: {
    'browserName': 'chrome'
  },
  multiCapabilities: [{
    'browserName': 'chrome'
    }
  ]
};