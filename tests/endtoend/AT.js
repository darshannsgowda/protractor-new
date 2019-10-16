const login = require('../../pages/clientmodule/LoginPage');
const alloutreachcircles = require('../../pages/clientmodule/AllOutreachCirclesPage');
const action = require('../../pages/clientmodule/ActionsPage');
const actioneditt = require('../../pages/clientmodule/ActionEditPage');
const logindata = require('../../resources/clientmodule/login.data.json');
const actiondata = require('../../resources/clientmodule/actions.data.json');

describe('creation of action with filter and verify the matching filer in supporter platfomr', function () {


        it('login and navigate to actions page', async function () {
                await login.getUrl();
                await login.Email(logindata.Email);
                await login.Password(logindata.Password);
                await login.LoginBtn();
                await browser.manage().timeouts().implicitlyWait(6000);
                expect(element(by.xpath("//div[contains(text(),' All OutreachCircles ')]")).isPresent()).toBe(true);
                await alloutreachcircles.actionlink();
                await browser.sleep(3000);
        })

        it('create new email your friends action', async function () {
                await action.createnewactionBtn();
                await browser.sleep(3000);
                await action.selectemailtypeaction();
                await browser.sleep(6000);
                await action.actionname(actiondata.Actioname);
                await action.buildactionBtn();
                await action.actionheadline(actiondata.headline);
                await action.headlinenextBtn();
                await browser.sleep(2000);
                await action.sharenextBtn();
                await browser.sleep(3000);
                // browser.wait(EC.elementToBeClickable(shedulenxtBtn()), 9000);
                await action.shedulenxtBtn();
                console.log('next button clicked');
                await browser.sleep(8000);
                // await action.continuesetupp();
                // browser.manage().timeouts().implicitlyWait(4000);
        })

        it('setup email message',async function(){
            await actioneditt.textmessageToggle();
            await actioneditt.composeEmail();
            await actioneditt.createemailBtn();
            await actioneditt.enteremailName(actiondata.emailname);
            await actioneditt.emailcontinueBtn();
            await actioneditt.entersubject(actiondata.subject);
            await actioneditt.addrecruitLink();
            await actioneditt.clickonsaveBtn();
            await actioneditt.clickonSaveandExitBtn();
        })

        it('Configure filter and save',async function(){
            await actioneditt.voterfiltertogle();
            await actioneditt.updatefilterLinkk();
            await actioneditt.voterfiltrdropdwn();
            await actioneditt.selectFiletype();
            await actioneditt.savefilterBtn();
        })
})