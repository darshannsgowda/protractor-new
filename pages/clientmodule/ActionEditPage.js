var ActionEditPage = function(){

    var Composeemailmessage = element(by.xpath("//span[contains(text(),'Select/Compose email message')]"));
    var CreatenewemlBtn = element(by.css('div.create-template-button'));
    var Emailnamefield = element(by.id('#mat-input-20'));
    var ContinueBtn = element(by.xpath("//span[contains(text(),'Continue')]"));
    var Subjectfield = element(by.css('input[formcontrolname="subject"]'));
    var InsertLink = element(by.xpath("//span[contains(text(),'Insert OutreachCircle Link')]"));
    var SaveExitBtn = element(by.css('button.button-save-exit'));
    var GoliveBtn = element(by.css('button.go-live-btn'));
}

module.exports = new ActionEditPage();