describe('Login to supporter platform', function(){

    it('Login with Google credentials', function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://sqa.votercircle.com/');
        browser.manage().timeouts().implicitlyWait(5000);
        var SignInLink = element(by.xpath("//div//a[contains(text(),'Sign In')]"));
        SignInLink.click()
        browser.sleep(2000);
        // var SignInWithGoogle =element(by.css('span.MuiButton-label-305'));
        var SignInWithGoogle = element(by.xpath("(//button[@type='button'])[2]"));
        SignInWithGoogle.click();
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                var email = element(by.css('input[type="email"]'));
                email.sendKeys("darshutest123@gmail.com");
                var emailnextBtn=element(by.css('div[id="identifierNext"]'));
                emailnextBtn.click();
                // browser.manage().timeouts().implicitlyWait(3000);
                browser.sleep(3000);
                var password =element(by.css('input[type="password"]'));
                password.sendKeys("voter123");
                var passwrdnextBtn= element(by.css('div[id="passwordNext"]'));
                passwrdnextBtn.click();
                browser.sleep(3000);
                console.log("Logged in Successfully");
            });
            
        })

    })
})
