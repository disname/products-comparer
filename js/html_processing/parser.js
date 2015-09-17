/**
 * Created by s_vinnik on 17.09.2015.
 */
var HtmlParser, cheerio;
HtmlParser = function () {

};
//cheerio = require('cheerio');

// Обрабатывает переданный текст
HtmlParser.prototype.parsePage = function (page) {

    var results = {};
    console.log('parsing');

    return results;
};

// Выносит конструктор парсера в модуль
module.exports = HtmlParser;