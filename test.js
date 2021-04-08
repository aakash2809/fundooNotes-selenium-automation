
let app = require('./appFunctions');

async function startApp() {
    await app.fundooRegister();
    await app.switchRegisterToLoginPage();
}

startApp();