/**
 * Created by s_vinnik on 17.09.2015.
 */
/**
 * Created by s_vinnik on 17.09.2015.
 */
var Loader,utils= require('./utils');
Loader = function () {

};

Loader.prototype.load = function (url) {
    console.log('start loading');
    var reqUtils=new utils();
    return reqUtils.request(url);
};
module.exports = Loader;