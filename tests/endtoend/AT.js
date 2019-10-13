const login = require('../../pages/clientmodule/LoginPage');
const alloutreachcircles = require('../../pages/clientmodule/AllOutreachCirclesPage');
const action = require('../../pages/clientmodule/ActionsPage');
const logindata = require('../../resources/clientmodule/login.data.json');
const actiondata = require('../../resources/clientmodule/actions.data.json');

describe('creation of action with filter and verify the matching filer in supporter platfomr',function(){
    
    beforeEach(async function() {
        await login.get();
    });

        it('login and navigate to actions page',async function(){
        await login.Email(logindata);
        await login.Password(logindata);
        await login.LoginBtn(logindata);
        await alloutreachcircles.actionlink();
     })

        it('create new email your friends action',async function(){
        await action.createnewactionBtn();
        await action.selectemailtypeaction();
        await action.actionname(actiondata);
        await action.buildactionBtn();
        await action.actionheadline(actiondata);
        await action.headlinenextBtn();
        await action.sharenextBtn();
        await action.schedulrnextBtn();
        await action.continueEditBtn();
        })

        it('setup email message and Go live',async function(){

        })
})