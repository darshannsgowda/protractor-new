var ActionEditPage = function(){

    var Composeemailmessage = element(by.xpath("//span[contains(text(),'Select/Compose email message')]"));
    var CreatenewemlBtn = element(by.css('div.create-template-button'));
    var Emailnamefield = element(by.id('#mat-input-20'));
    var EmailnameEditBtn = element(by.css('span[class="icon-edit"]'));
    var ContinueBtn = element(by.xpath("//span[contains(text(),'Continue')]"));
    var Subjectfield = element(by.css('input[formcontrolname="subject"]'));
    var InsertLink = element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]"));
    var Disclaimer = element(by.xpath("//span[contains(text(),'Add Disclaimer')]"));
    var SaveBtn = element(by.xpath("(//span[contains(text(),'Save')])[2]"))
    var SaveExitBtn = element(by.css('button.button-save-exit'));
    var GoliveBtn = element(by.css('button.go-live-btn'));

    this.composeEmail = async function(){
        await Composeemailmessage.click();
    }

    this.createemailBtn = async function(){
        await CreatenewemlBtn.click();
    }
    
    this.enteremailName = async function(){
        await Emailnamefield.sendKeys(emailname);
    }

    this.clickonEmailnameEditBtn = async function(){
        await EmailnameEditBtn.click();
    }
    
    this.emailcontinueBtn = async function(){
        await ContinueBtn.click();
    }

    this.entersubject = async function(){
        await Subjectfield.sendKeys(emailsubject);
    }

    this.addrecruitLink = async function(){
        await InsertLink.click();
    }

    this.addDisclaimer = async function(){
        Disclaimer.click();
    }

    this.clickonsaveBtn = async function(){
        SaveBtn.click()
    }

    this.clickonSaveandExitBtn = async function(){
        await SaveExitBtn.click();
    }

}

module.exports = new ActionEditPage();