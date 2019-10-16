import { element } from "protractor";
import { async } from "q";

var SupporterLandingpage = function(){


    var SigninLink = element(by.xpath("//div//a[contains(text(),'Sign In')]"));
    var SearchOutreachcirclefield = element(by.css('input[placeholder="Search an OutreachCircle"]'));
    var LandingPagetitle = element(by.xpath("//div//h6[contains(text(),'Support your favorite')]"));
    var BannercloseBtn = element(by.className('close'));
    var Searchcampaignfield = element(by.css('input[placeholder="Enter city, state, name, app code or zip"]'));
    var SignupBtn = element(by.xpath("//span[contains(text(),'Sign Up')]"));
    var DownloadappPlaystore = element(by.css('img[src="/e9b1ad14c8740fcbe5152cdc166eb3db.svg"]'));
    var DownloadappAppstore = element(by.css('img[src="/65ff8f599dd03f17bcb7eec2bc15f24f.svg"]'));
    var SelectbyOutreachname = element(by.xpath("(//div[@class='campaign'])[1]"));
    var SupportBtn = element(by.xpath("//b[contains(text(),'Support')]"));

    this.getUrl = async function(){
        await browser.driver.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await browser.get('https://sqa.votercircle.com/landing');
    }

    this.signlinkk = async function(){
        await SigninLink.click();
    }

    this.searchOutreachCrclefield = async function(){
        await SearchOutreachcirclefield.click();
    }

    this.closebanner = async function(){
        await bannercloseBtn.click();
    }

    this.signupbutton = async function(){
        await SignupBtn.click();
    }

    this.selectmatchingoutreachcircle = async function(){
        await SelectbyOutreachname.click();
    }



}