import { element } from "protractor";
import { async } from "q";

var SupporterEmailflow = function () {

    var SignupWithemailPagetitle = element(by.xpath("//h5[contains(text(),'Welcome')]"));
    var Emailfield = element(by.css('input[type="email"]'));
    var Passwordfield = element(by.css('input[type="password"]'));
    var PasswordShowBtn = element(by.xpath("//span[contains(text(),'SHOW')]"));
    var NextBtn1 = element(by.css('div[class="action"]'));
    var FirstNamefield = element(by.css('input[name="firstName"]'));
    var LastNamefield = element(by.css('input[name="lastName"]'));
    var NextBtn2 = element(by.xpath("//span[contains(text(),'Next')]"));
    var Zipcodefield = element(by.css('input[placeholder="Enter your zip code"]'));
    var zipcodedropdown = element(by.xpath("(//li[@role='option'])[1]"));
    var MobileNumber = element(by.css('input[placeholder="Enter your mobile number"]'));
    var OptinCheckbox = element(by.css('input[type="checkbox"]'));
    var LetsGoBtn = element(by.xpath("//span[contains(text(),'go')]"));


    this.enteremail = async function () {
        await Emailfield.sendKeys(email);
    }

    this.enterpassword = async function () {
        await Passwordfield.sendKeys(passrd);
    }

    this.clickonNextBtn1 = async function () {
        await NextBtn1.click();
    }

    this.showpassword = async function () {
        await PasswordShowBtn.click();
    }

    this.enterfirstname = async function () {
        await FirstNamefield.sendKeys(firstnme);
    }

    this.enterlastname = async function () {
        await LastNamefield.sendKeys(lastnme);
    }

    this.clickonNextBtn2 = async function () {
        await NextBtn2.click();
    }

    this.zipcode = async function () {
        await Zipcodefield.sendKeys(zip);
    }

    this.selectzipcodefromdropdown = async function () {
        await zipcodedropdown.click();
    }

    this.mobilenumberr = async function () {
        await MobileNumber.sendKeys(mobile);
    }

    this.unselectoptincheckbox = async function(){
        await OptinCheckbox.click();
    }

    this.clickonletsGoBtn = async function () {
        await LetsGoBtn.click();
    }

    this.createprofilethroghemail = async function () {
        enteremail(eml);
        enterpassword(pass);
        clickonNextBtn1();
        enterfirstname(first);
        enterlastname(last);
        clickonNextBtn2();
        zipcode(zip);
        selectzipcodefromdropdown(select);
        mobilenumberr(mobilenmberrr);
        clickonletsGoBtn();
    }
}
