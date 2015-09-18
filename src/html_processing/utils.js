/**
 * Created by s_vinnik on 17.09.2015.
 */
   var Utils = function () {
    };
var request=require('request'),q=require('q');

Utils.prototype.request = function (url, json) {
    json = json || false;
    /*var response = request({
        uri: url,
        method: 'GET'
    })*/
    return q.nfcall(request, url, {method:'GET', encoding:'binary' ,headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
    }})


};

module.exports = Utils;
