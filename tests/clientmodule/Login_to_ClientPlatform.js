const logintoclientplatform = require('../../pages/clientmodule/LoginPage');
const testdata = require('../../resources/clientmodule/login.data.json');

describe('All OutreachCircles Page', function(){
    it('Should be logged in using email Successfully', async function(){
        console.log(testdata);
        await logintoclientplatform.get();
        await logintoclientplatform.Email(testdata.email);
        await logintoclientplatform.Password(testdata.password);
        await logintoclientplatform.LoginBtn();
    });
});