describe('Creation of email action with filter', function () {

    var originalTimeout;
    var EC = protractor.ExpectedConditions;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });


    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('Login and create new email action with filter', function (done) {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get("https://qa.votercircle.com/user/login");
        browser.sleep(3000);
        //Login with email credentials.
        element(by.css("input[formcontrolname='username']")).sendKeys("kevin@votercircle.in");
        element(by.css("input[formcontrolname='password']")).sendKeys("test123");
        element(by.css("button.login-btn")).click();
        browser.sleep(5000);
        //Navigate to actions page.
        element(by.xpath("//div[contains(text(),' Fix Campaign ')]")).click();
        browser.sleep(2000);
        element(by.xpath("//span[contains(text(),'Actions')]")).click();
        browser.sleep(1000);
        //Click on create action button and select 'email or text friends' action type
        element(by.css('button.create-action-btn')).click();
        browser.sleep(2000);
        element(by.xpath("//div[contains(text(),' Ask your supporters to send an email or text message to their friends. Specify a target list to contact or let supporters reach out to anyone in their address book. ')]")).click();
        browser.sleep(2000);
        element(by.css('input[formcontrolname="actionName"]')).sendKeys('eactionnamemail82982');
        element(by.css('button.build-action-btn')).click();
        browser.sleep(2000);
        element(by.css('input[placeholder="Action title"]')).sendKeys('Please support for the Campaign');
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
        var CreatenewemlBtn = element(by.css('div.create-template-button'));
        browser.wait(EC.elementToBeClickable(CreatenewemlBtn), 9000);
        CreatenewemlBtn.click();
        browser.sleep(3000);
        element(by.xpath("//div//input[@placeholder='Type email name (use a name that is specific and descriptive)']")).sendKeys('emsail829982');
        element(by.xpath("//span[contains(text(),'Continue')]")).click();
        browser.sleep(2000);
        element(by.css('input[formcontrolname="subject"]')).sendKeys('Subjecttt');
        browser.sleep(2000);
        element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]")).click();
        browser.sleep(2000);
        element(by.xpath("//button//span//span[contains(text(),'Save & Exit')]")).click();
        browser.sleep(5000);
        //disable text message toggle
        element(by.xpath("(//label[@class='mat-slide-toggle-label'])[2]")).click();
        browser.sleep(4000);
        //enable filter
        element(by.xpath("(//label[@class='mat-slide-toggle-label'])[3]")).click();
        browser.sleep(3000);
        element(by.xpath("//div[contains(text(),' Update ')]")).click();
        //select the file from the drop down.
        element(by.css('div[class="mat-select-value"]')).click();
        browser.sleep(2000);
        element(by.xpath("//div[contains(text(),'Set1 file')]")).click();
        browser.sleep(2000);
        element(by.xpath("(//button[@type='button'])[2]")).click();
        browser.sleep(2000);
        element(by.css('button.go-live-btn')).click();
        browser.sleep(2000);
        browser.refresh();
        //Action will go live then logout
        element(by.css('div[class="user-bubble-dropdown-menu"]')).click();
        browser.sleep(1000);
        element(by.xpath("//div//button[contains(text(),'Logout')]")).click();
        browser.sleep(2000);
        //navigate to supporter platform and signup as a new user
        browser.get("http://sqa.votercircle.com");
        element(by.css('input[placeholder="Search an OutreachCircle"]')).click();
        browser.sleep(2000);
        element(by.css('input[placeholder="Enter city, state, name, app code or zip"]')).sendKeys('Fix Campaign');
        browser.sleep(2000);
        element(by.xpath("(//div[@class='campaign'])[1]")).click();
        browser.sleep(1000);
        //click on support button
        element(by.xpath("(//b[contains(text(),'Support')])[1]")).click();
        element(by.css('div[class="signup"]')).click();
        element(by.css('input[type="email"]')).sendKeys('emmmaill_092@votercircle.in');
        element(by.css('input[type="password"]')).sendKeys('test123');
        element(by.xpath("//button//span[contains(text(),'Next')]")).click();
        browser.sleep(1000);
        element(by.css('input[placeholder="Enter your first name"]')).sendKeys('johnnn');
        element(by.css('input[placeholder="Enter your last name"]')).sendKeys('tester');
        element(by.xpath("//div//button//span[contains(text(),'Next')]")).click();
        browser.sleep(1000);
        //enter the contact details
        element(by.css('input[placeholder="Enter your zip code"]')).sendKeys('34470');
        browser.sleep(3000);
        element(by.xpath("(//li[@role='option'])[1]")).click();
        element(by.css('input[placeholder="Enter your mobile number"]')).sendKeys('3232323232');
        element(by.css('div.action')).click();
        browser.sleep(4000);
        element(by.xpath("(//button//span[contains(text(),'Share it With Your Friends')])[1]")).click();
        browser.sleep(2000);
        element(by.xpath("//div//span[contains(text(),'Email your friends')]")).click();
        browser.sleep(4000);
        //Setup 3 steps
        element(by.xpath("//div[contains(text(),'Personalize Message')]")).click();
        browser.sleep(1000);
        element(by.xpath("//span[contains(text(),'Done')]")).click();
        browser.sleep(1000);
        element(by.xpath("//div[contains(text(),'Add Contacts')]")).click();
        browser.sleep(2000);
        element(by.xpath("//button//span[contains(text(),'Add Contacts')]")).click();
        browser.sleep(2000);
        element(by.xpath("//div[contains(text(),'Add Google contacts')]")).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                element(by.css('input[type="email"]')).sendKeys('darshutest1234@gmail.com');
                element(by.xpath("//span//span[contains(text(),'Next')]")).click();
                browser.sleep(2000);
                element(by.css('input[type="password"]')).sendKeys('votercircle123');
                element(by.xpath("//span//span[contains(text(),'Next')]")).click();
                browser.sleep(3000);
                element(by.xpath("//span//span[contains(text(),'Allow')]")).click();
                browser.sleep(20000);
            })
            browser.switchTo().window(handles[0]).then(function () {
                element(by.xpath("(//button[@type='button'])[1]")).click();
                browser.sleep(14000);
                element(by.xpath("//div[contains(text(),'Build Email Recipients')]")).click();
                browser.sleep(1000);
                //select few contacts and send message.
                element(by.xpath("(//input[@type='checkbox'])[1]")).click();
                // element(by.xpath("(//input[@type='checkbox'])[2]")).click();
                // element(by.xpath("(//input[@type='checkbox'])[3]")).click();
                browser.sleep(1000);
                element(by.xpath("(//button[@type='button'])[1]")).click();
                browser.sleep(2000);
                element(by.xpath("//span[contains(text(),'Send Email')]")).click();

            })
        });
    })

})