/**
 * Created by s_vinnik on 17.09.2015.
 */
/**
 * Created by s_vinnik on 17.09.2015.
 */
import Utils from './utils';
var Loader;
Loader = function () {

};

Loader.prototype.load = function (url) {
    console.log('start loading');
    var reqUtils=new Utils();
    return reqUtils.request(url);
};
module.exports = Loader;