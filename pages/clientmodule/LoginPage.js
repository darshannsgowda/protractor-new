var LoginPage = function(){
    
    var LoginEmail = element(by.id('#mat-input-0'));
    var LoginPassword = element(by.id('#mat-input-1'));
    var LoginWithEmailBtn = element(by.xpath("//span[contains(text(),'Login with email')]"));
    var LoginWithGoogle =  element(by.css('div[class="social-signin"]'));
    var CantLoginlink = element(by.xpath("//a[contains(text(),'Can’t Login?')]"));

    this.get = async function(){
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




};
module.exports = new LoginPage();