describe('Login and Logout to supporter platform using Google account', function(){

    it('Login and Logout', function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://sqa.votercircle.com/');
        browser.manage().timeouts().implicitlyWait(2000);
        var SignInLink = element(by.xpath("//div//a[contains(text(),'Sign In')]"));
        SignInLink.click()
        browser.manage().timeouts().implicitlyWait(2000);
        var SignInWithGoogle =element(by.xpath("(//button[@type='button'])[2]"));
        SignInWithGoogle.click();
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                var email = element(by.css('input[type="email"]'));
                email.sendKeys("darshutest1234@gmail.com");
                console.log("Enter the email");
                var emailnextBtn=element(by.css('div[id="identifierNext"]'));
                emailnextBtn.click();
                console.log("Click on next button");
                browser.sleep(3000);
                var password =element(by.css('input[type="password"]'));
                password.sendKeys("votercircle123");
                console.log("Enter the password");
                var passwrdnextBtn= element(by.css('div[id="passwordNext"]'));
                passwrdnextBtn.click();
                console.log("Click on the next button");
                browser.sleep(8000);
            });
            browser.switchTo().window(handles[0]).then(function(){
                var accntnavBar = element(by.css('span.icon-Account'));
                accntnavBar.click();
                console.log("Click on account option in bottom navigation bar");
                var Logoutlink =element(by.xpath("//span[contains(text(),'Logout')]"));
                Logoutlink.click();
                expect(element(by.xpath("//h6[contains(text(),'Support your favorite')]")).isPresent()).toBe(true);
            })

        })

    })
})
