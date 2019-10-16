var ActionsPage = function(){
    
    var CreateActionBtn = element(by.xpath("(//span)[9]"));
    var EmailorTextFriends = element(by.xpath("//div[contains(text(),' Ask your supporters to send an email or text message to their friends. Specify a target list to contact or let supporters reach out to anyone in their address book. ')]"));
    var Actionnamefield = element(by.css('input[formcontrolname="actionName"]'));
    var BuildThisActionBtn = element(by.css('button.build-action-btn'));
    var Headlinefield = element(by.css('input[name="headline"]'));
    var NextBtn = element(by.css('button.next-btn'));
    var ShareUpdateNextBtn = element(by.css('button.next-btn'));
    var schedularNextBtn = element(by.css('button.next-btn'));
    var ContinueEditngActnBtn = element(by.xpath("//span[contains(text(),'Continue Editing Action ')]"));
    var ContinueSetup = element(by.xpath("//button//span//span[contains(text(),'Continue Setup')]"));

    this.createnewactionBtn = async function(){
        await CreateActionBtn.click();
    }

    this.selectemailtypeaction = async function(){
        await EmailorTextFriends.click();
    }

    this.actionname = async function(actionnme){
        await Actionnamefield.sendKeys(actionnme);
    }

    this.buildactionBtn = async function(){
        await BuildThisActionBtn.click();
    }

    this.actionheadline = async function(headline){
        await Headlinefield.sendKeys(headline);
    }

    this.headlinenextBtn = async function(){
       await NextBtn.click();
    }

    this.sharenextBtn = async function(){
        await ShareUpdateNextBtn.click();
    }

    this.shedulenxtBtn = async function(){
        await schedularNextBtn.click();
    }

    this.continueEditBtn = async function(){
        await ContinueEditngActnBtn.click();
    }

    this.continuesetupp = async function(){
        await ContinueSetup.click();
    }
}

module.exports = new ActionsPage();