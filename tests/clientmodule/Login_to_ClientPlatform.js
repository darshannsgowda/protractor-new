var logintoclientplatform = require('../Pages/LoginPage');
describe('All OutreachCircles Page', function(){
    it('Should be logged in using email Successfully', async function(){
        await logintoclientplatform.get();
        // browser.sleep(2000);
        await logintoclientplatform.Email("kevin@votercircle.in");
        await logintoclientplatform.Password("test123");
        await logintoclientplatform.LoginBtn();
    });
});