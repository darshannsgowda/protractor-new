describe('Login to supporter platform', function(){

    it('Login with email credentials', function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://sqa.votercircle.com/');
        browser.manage().timeouts().implicitlyWait(2000);
        var SignInLink = element(by.className('MuiTypography-root-41 MuiTypography-colorPrimary-71 MuiTypography-inline-76 MuiLink-root-77 MuiLink-underlineHover-79 link'));
        SignInLink.click()
        browser.sleep(2000);
        var LoginBtn= element(by.css('div.login'));
        LoginBtn.click();
        element(by.id('email')).sendKeys('support@votercircle.in');
        element(by.css('input[type="password"]')).sendKeys('test123');
        element(by.css('div.action')).click();
        console.log("Successfully logged in");
        browser.sleep(3000);
    })

})