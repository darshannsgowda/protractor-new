describe('Login to client platform', function() {
  it('Enter the valid email and password', function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('https://qa.votercircle.com');
    browser.sleep(5000);
   element(by.buttonText('Login')).click();
   browser.sleep(3000);
    element(by.css("input[formcontrolname='username']")).sendKeys("kevin@votercircle.in");
    element(by.css("input[formcontrolname='password']")).sendKeys("test123");
    browser.sleep(2000);
    element(by.css("span.ng-star-inserted")).click();
   browser.sleep(4000);
   });
 });