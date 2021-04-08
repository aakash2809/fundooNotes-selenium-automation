const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
var fs = require('fs');


class FundooNotes {

    getDriver = async () => {
        return await new Builder().forBrowser('chrome').build();
    };

    fundooRegister = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/register');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('first-name')).sendKeys('Hritik');
            await driver.findElement(By.id("last-name")).sendKeys('Patil');
            await driver.findElement(By.id("email")).sendKeys('patilhritik@gmail.com');
            await driver.findElement(By.id("password")).sendKeys('Hritik@32');
            await driver.findElement(By.id("cpassword")).sendKeys('Hritik@32');
            await (await driver.findElement(By.id("register"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        } finally {
            await driver.quit();
        }
    }

    switchRegisterToLoginPage = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/register');
            await driver.manage().window().maximize();
            await driver.sleep(1000);
            await (await driver.findElement(By.id("move-to-login"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        } finally {
            await driver.quit();
        }
    }
}

module.exports = new FundooNotes();