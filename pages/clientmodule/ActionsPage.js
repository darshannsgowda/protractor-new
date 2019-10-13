var ActionsPage = function(){
    
    var CreateActionBtn = element(by.css('button.create-action-btn'));
    var EmailorTextFriends = element(by.css("img[src='/assets/svg/action_message_friends_icon.svg']"));
    var Actionnamefield = element(by.id('#mat-input-11'));
    var BuildThisActionBtn = element(by.css('button.build-action-btn'));
    var Headlinefield = element(by.css('input[name="headline"]'));
    var NextBtn = element(by.css('button.next-btn'));
    var ShareUpdateNextBtn = element(by.css('button.next-btn'));
    var schedularNextBtn = element(by.css('button.next-btn'));
    var ContinueEditngActnBtn = element(by.css('button.continue-edit-btn'));

    this.createnewactionBtn = async function(){
        await CreateActionBtn.click();
    }

    this.selectemailtypeaction = async function(){
        await EmailorTextFriends.click();
    }

    this.actionname = async function(){
        await Actionnamefield.sendKeys(actionnme);
    }

    this.buildactionBtn = async function(){
        await BuildThisActionBtn.click();
    }

    this.actionheadline = async function(){
        await Headlinefield.sendKeys(headline);
    }

    this.headlinenextBtn = async function(){
       await NextBtn.click();
    }

    this.sharenextBtn = async function(){
        await ShareUpdateNextBtn.click();
    }

    this.schedulrnextBtn = async function(){
        await schedularNextBtn.click();
    }

    this.continueEditBtn = async function(){
        await ContinueEditngActnBtn.click();
    }
}

module.exports = new ActionsPage();