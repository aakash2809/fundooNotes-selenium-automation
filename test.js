
let app = require('./appFunctions');

async function startApp() {
    await app.fundooRegister();
    await app.switchRegisterToLoginPage();
    await app.fundooLogin();
    await app.switchLoginToRegisterPage();
    await app.switchLoginToForgotPasswordPage();
}

startApp();