const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
var fs = require('fs');


class FundooNotes {

    intiateFuntion = async () => {
        console.log("launch app");
    }
}

module.exports = new FundooNotes();