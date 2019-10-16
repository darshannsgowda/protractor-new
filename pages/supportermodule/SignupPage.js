import { element } from "protractor";
import { async } from "q";

var SupporterSignupPage = function(){

    var ContinuewthGoogleBtn = element(by.xpath("(//div[@class='platform'])[1]"));
    var ContinuewthFacebookBtn = element(by.xpath("(//div[@class='platform'])[2]"));
    var SignupBtn = element(by.css('div[class="signup"]'));
    var LoginBtn = element(by.css('div[class="login"]'));
    var SignupPagetitle = element(by.xpath("//div//h6[contains(text(),'Sign up or login to continue...')]"));


    this.SignupwithGoogle = async function(){
        await ContinuewthGoogleBtn.click();
    }

    this.SignupwithFacebook = async function(){
        await ContinuewthFacebookBtn.click();
    }

    this.Loginbutton = async function(){
        await LoginBtn.click();
    }

    this.SignupwithemailBtn = async function(){
        await SignupBtn.click();
    }


}