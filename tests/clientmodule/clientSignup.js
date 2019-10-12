describe('Signup with Google sign in ', function(){
    it('Signup with gmail credentials',function(done){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get("https://qa.votercircle.com/user/login");
        var signupLink= element(by.css("a[href='/user/signup']"));
        signupLink.click();
        browser.sleep(2000);
        var continueWithGoogleBtn = element(by.css('img[alt="google signin button"]'));
        continueWithGoogleBtn.click();
        browser.sleep(4000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                element(by.css("input[id='identifierId']")).sendKeys("darshutest123@gmail.com");
                element(by.css('div[id="identifierNext"]')).click();
                browser.sleep(3000);
                element(by.css('input[type="password"]')).sendKeys("voter123");
                element(by.css('div[id="passwordNext"]')).click();
                browser.sleep(3000);  
            });
        });
    });
});