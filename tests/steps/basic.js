// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

// browser.takeScreenshot(1).then(function(data) { writeScreenshot(data, 'screen.png'); });
// function writeScreenshot(data,fname) {
//     var stream = fs.createWriteStream(fname);
//     stream.write(new Buffer(data, 'base64'));
//     stream.end();

// }

browser.ignoreSynchronization = true; // required


module.exports = function() {

    this.Given(/^I visit the yahoo\.com$/, function (next) {
        browser.get('http://yahoo.com/');
        next();
    });

    this.Given(/^I visit the ([^"]*) page link$/, function (pageLink, callback) {
        element.all(by.linkText("Home")).first().click().then(function() {
            element.all(by.linkText(pageLink)).first().click().then(function() {
                callback();
            });
        });
    });

    this.Then(/^I should be brought to the ([^"]*) url$/, function (url, callback) {
      expect(browser.getCurrentUrl()).to.eventually.match(new RegExp(url)).notify(callback);
      
    });

    this.Then(/^Title of the page should be ([^"]*)$/, function (title, callback) {
       browser.getTitle().then(function(browserTitle) {
            expect(browserTitle).to.equal(title);     
            callback();
       });
    });

    
};