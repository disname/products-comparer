/**
 * Created by s_vinnik on 17.09.2015.
 */
var rp = require('request-promise'),
    Utils = function () {
    };

Utils.prototype.request = function (url, json) {
    json = json || false;
    /*var response = request({
        uri: url,
        method: 'GET'
    })*/
  //  Q.nfcall(request, url, {method:'GET'})
 /*   return request({
        uri: url,
        method: 'GET'
    });*/
    return rp(url);
};

module.exports = Utils;
