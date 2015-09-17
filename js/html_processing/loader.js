/**
 * Created by s_vinnik on 17.09.2015.
 */
/**
 * Created by s_vinnik on 17.09.2015.
 */
var Loader,utils= require('./utils');
Loader = function () {

};

// Обрабатывает переданный текст
Loader.prototype.load = function (url) {
    console.log('start loading');
    var reqUtils=new utils();
    return reqUtils.request(url);
};

// Выносит конструктор парсера в модуль
module.exports = Loader;