// var random = require('../BaseClass');
var LoginPage = function(){
    
    var LoginEmail = element(by.css('input[placeholder="Enter your email address"]'));
    var LoginPassword = element(by.css('input[type="password"]'));
    var LoginWithEmailBtn = element(by.xpath("//span[contains(text(),'Login with email')]"));
    var LoginWithGoogle =  element(by.css('img[alt="google signin button"]'));
    var Googleemailfield = element(by.css('input[type="email"]'));
    var GoogleemlnextBtn = element(by.xpath("//span//span[contains(text(),'Next')]"));
    var Googlepasswordfield = element(by.css('input[type="password"]'));
    var GooglepwdnextBtn = element(by.xpath("//span[contains(text(),'Next')]"));
    var CantLoginlink = element(by.xpath("//a[contains(text(),'Can’t Login?')]"));

    this.getUrl = async function(){
       await browser.driver.manage().window().maximize();
       await browser.waitForAngularEnabled(false);
        await browser.get('https://qa.votercircle.com/user/login');
    };

    this.Email = async function(Eml){
        await LoginEmail.sendKeys(Eml);
    };

    this.Password = async function(Pwd){
        await LoginPassword.sendKeys(Pwd);
    };

    this.LoginBtn = async function(){
        await LoginWithEmailBtn.click();
    };

    this.Loginwthgoogle = async function(){
        await LoginWithGoogle.click();
    }

    this.LoginwithEmail = async function(){
        await getUrl();
        await Email();
        await Password();
        await LoginBtn();
    }

    this.LoginwithOath = async function(){
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                

            })
        })  
    }



};
module.exports = new LoginPage();