var AllOutreachCirclesPage = function(){

    var OutreachCircleName = element(by.xpath("//div[contains(text(),' Fix Campaign ')]"));
    var Actionslink = element(by.xpath("(//span[contains(text(),'Actions')])[1]"));

    this.ocname = async function(){
       await OutreachCircleName.click();
    }

    this.actionlink = async function(){
        await Actionslink.click();
    }
}

module.exports = new AllOutreachCirclesPage();