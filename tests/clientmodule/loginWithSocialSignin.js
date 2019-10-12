describe('Login with social sign in', function(){
    it('Login with gmail credentials',function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://qa.votercircle.com/user/login');
        element(by.css('img[alt="google signin button"]')).click();
        browser.sleep(4000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                element(by.css("input[id='identifierId']")).sendKeys("darshutest123@gmail.com");
                element(by.css('div[id="identifierNext"]')).click();
                browser.sleep(3000);
                element(by.css('input[type="password"]')).sendKeys("voter123");
                element(by.css('div[id="passwordNext"]')).click();
                browser.sleep(7000);
            });
            browser.switchTo().window(handles[0]).then(function(){
                console.log(" All OutreachCircles ");
                expect(browser.getTitle()).toEqual('OutreachCircle: Friend-to-Friend Outreach');
            }); 
                
            });
        });


    })
