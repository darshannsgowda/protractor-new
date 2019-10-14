var ActionEditPage = function(){

    var Composeemailmessage = element(by.xpath("//span//span[contains(text(),'Select/Compose email message')]"));
    var CreatenewemlBtn = element(by.css('div.create-template-button'));
    var Emailnamefield = element(by.xpath("(//div[@class='mat-form-field-wrapper'])[6]"));
    var EmailnameEditBtn = element(by.css('span[class="icon-edit"]'));
    var ContinueBtn = element(by.xpath("//span[contains(text(),'Continue')]"));
    var Subjectfield = element(by.css('input[formcontrolname="subject"]'));
    var InsertLink = element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]"));
    var Disclaimer = element(by.xpath("//span[contains(text(),'Add Disclaimer')]"));
    var SaveBtn = element(by.xpath("(//span[contains(text(),'Save')])[2]"))
    var SaveExitBtn = element(by.css('button.button-save-exit'));
    var emailmsgToggle = element(by.xpath("(//div[@class='mat-slide-toggle-thumb'])[1]"));
    var textmsgToggle = element(by.xpath("(//label[@class='mat-slide-toggle-label'])[2]"));
    var voterfilterToggle = element(by.xpath("(//label[@class='mat-slide-toggle-label'])[3]"));
    var updatefilterLink = element(by.className('action-btn'));
    var filterdropdown = element(by.xpath("(//div[@class='mat-form-field-infix'])[6]"));
    var selectFile = element(by.xpath("//span[contains(text(),'FILE')]"));
    var filterSaveButton = element(by.xpath("//span[contains(text(),'Save ')]"));
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
        await Disclaimer.click();
    }

    this.clickonsaveBtn = async function(){
       await SaveBtn.click()
    }

    this.clickonSaveandExitBtn = async function(){
        await SaveExitBtn.click();
    }

    this.emailmessageToggle = async function(){
        await emailmsgToggle.click();
    }

    this.textmessageToggle = async function(){
        await textmsgToggle.click();
    }

    this.voterfiltertogle = async function(){
        await voterfilterToggle.click();
    }

    this.updatefilterLinkk = async function(){
        await updatefilterLink.click();
    }

    this.voterfiltrdropdwn = async function(){
        await filterdropdown.click();
    }

    this.selectFiletype = async function(){
        await selectFile.click();
    }

    this.savefilterBtn = async function(){
        await filterSaveButton.click();
    }

    this.actionLiveBtn = async function(){
        await GoliveBtn.click();
    }
}

module.exports = new ActionEditPage();