describe('Creation of email action with filter', function(){

    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });


    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

it('Login and create new email action with filter', function(done){
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
    element(by.css('input[formcontrolname="actionName"]')).sendKeys('actimouuiukknlll');
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
    //Set-up email message
    element(by.xpath("//span[contains(text(),'Select/Compose email message')]")).click();
    browser.sleep(2000);
    var CreatenewemlBtn = element(by.css('div.create-template-button')).click();
    browser.sleep(3000);
    element(by.xpath("//div//input[@placeholder='Type email name (use a name that is specific and descriptive)']")).sendKeys('emalllkyppo');
    element(by.xpath("//span[contains(text(),'Continue')]")).click();
    browser.sleep(2000);
    element(by.css('input[formcontrolname="subject"]')).sendKeys('Subjecttt');
    browser.sleep(2000);
    element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]")).click();
    browser.sleep(2000);
    element(by.xpath("//button//span//span[contains(text(),'Save & Exit')]")).click();
    browser.sleep(6000);
    //disable text message toggle
    element(by.xpath("(//label[@class='mat-slide-toggle-label'])[2]")).click();
    browser.sleep(5000);
    //enable filter
    element(by.xpath("(//label[@class='mat-slide-toggle-label'])[3]")).click();
    browser.sleep(4000);
    element(by.xpath("//div[contains(text(),' Update ')]")).click();
    //select the file from the drop down.
    element(by.css('div[class="mat-select-value"]')).click();
    browser.sleep(2000);
    element(by.xpath("//span[contains(text(),'FILE')]")).click();
    browser.sleep(2000);
    element(by.xpath("(//button[@type='button'])[2]")).click();
    browser.sleep(2000);
    element(by.css('button.go-live-btn')).click();
    browser.sleep(2000);
    browser.refresh();
    browser.sleep(5000);
    //Action will go live then logout
    element(by.css('div[class="user-bubble-dropdown-menu"]')).click();
    browser.sleep(1000);
    element(by.xpath("//div//button[contains(text(),'Logout')]")).click();
    browser.sleep(2000);
    browser.get("http://sqa.votercircle.com");
    element(by.css('input[placeholder="Search an OutreachCircle"]')).click();
    browser.sleep(2000);
    element(by.css('input[placeholder="Enter city, state, name, app code or zip"]')).sendKeys('john for city council333');
    browser.sleep(2000);
    element(by.xpath("(//div[@class='campaign'])[1]")).click();
    browser.sleep(1000);
    element(by.xpath("(//b[contains(text(),'Support')])[1]")).click();

})

})