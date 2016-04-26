// spec.js
describe('Spotz app', function() {
  it('should have a title', function() {
    browser.get('http://spotz.herokuapp.com/#/login');

    var currentUrl = browser.driver.getCurrentUrl();
    expect(currentUrl).toMatch('/#/login');
    expect(browser.getTitle()).toEqual('Spotz');
  });
});


describe('login page', function() {
    it('should sign in', function() {

      // Find page elements
      var userNameField = browser.driver.findElement(By.css('.form-control'));
      var userPassField = browser.driver.findElement(By.css('.password'));
      var userLoginBtn  = browser.driver.findElement(By.css('.ng-binding'));

      // Update this later, use the default test long in for now
      // Fill input fields
      // userNameField.sendKeys('test@user.com');
      // userPassField.sendKeys('1234');

      // // Ensure fields contain what we've entered
      // expect(userNameField.getAttribute('value')).toEqual('test@user.com');
      // expect(userPassField.getAttribute('value')).toEqual('1234');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/#');
      }, 10000);
    });
});