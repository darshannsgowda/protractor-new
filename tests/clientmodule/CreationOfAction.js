describe('Creation of email action with filter', function(){

it('Login and create new email action with filter', function(){
    browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get("https://qa.votercircle.com/user/login");
        browser.sleep(3000);
        //Login with email credentials.
         element(by.css("input[formcontrolname='username']")).sendKeys("kevin@votercircle.in");
         element(by.css("input[formcontrolname='password']")).sendKeys("test123");
         element(by.css("button.login-btn")).click();
         browser.sleep(3000);
        //Navigate to actions page.
         element(by.xpath("//div[contains(text(),' john for city council333 ')]")).click();
         browser.sleep(2000);
         element(by.xpath("//span[contains(text(),'Actions')]")).click();
         browser.sleep(1000);
         //Click on create action button and select 'email or text friends' action type
      element(by.css('button.create-action-btn')).click();
      browser.sleep(2000);
    element(by.xpath("//div[contains(text(),' Ask your supporters to send an email or text message to their friends. Specify a target list to contact or let supporters reach out to anyone in their address book. ')]")).click();
    browser.sleep(2000);
    element(by.css('input[formcontrolname="actionName"]')).sendKeys('Emailaction34');
    element(by.css('button.build-action-btn')).click();
    browser.sleep(2000);
    element(by.css('input[name="headline"]')).sendKeys('Please support for the Campaign');
    browser.sleep(1000);
    element(by.css('button.next-btn')).click();
    browser.sleep(2000);
    element(by.css('button.next-btn')).click();
    browser.sleep(2000);
    element(by.css('button.next-btn')).click();
    browser.sleep(2000);
    element(by.css('button.continue-edit-btn')).click();
    browser.sleep(2000);
    element(by.xpath("//span[contains(text(),'Select/Compose email message')]")).click();
    browser.sleep(2000);
    var CreatenewemlBtn = element(by.css('div.create-template-button')).click();
    browser.sleep(3000);
    element(by.id('#mat-input-20')).sendKeys('emailaaap');
    element(by.xpath("//span[contains(text(),'Continue')]")).click();
    element(by.css('input[formcontrolname="subject"]')).sendKeys('Subjecttt');
    var InsertLink = element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]"));
    var SaveExitBtn = element(by.css('button.button-save-exit'));
    var GoliveBtn = element(by.css('button.go-live-btn'));


})

})