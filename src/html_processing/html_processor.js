/**
 * Created by s_vinnik on 17.09.2015.
 */
import  q from 'q';
var loader = require('./loader'),request=require('request'),cheerio = require('cheerio'),
    htmlParser = require('./parser'),parser, loaderPromise1, loaderPromise2, HtmlProcessor = function () {};
var  fs = require('fs');

HtmlProcessor.prototype.processPages = function (urls) {
    loaderPromise1 = (new loader()).load(urls[0]);
    loaderPromise2 = (new loader()).load(urls[1]);
    parser = new htmlParser();

    q.all([loaderPromise1, loaderPromise2]).spread(function (page1, page2) {
        q.all([parser.parsePage(page1[1]),parser.parsePage(page2[1])]).spread(function(product1,product2){
            console.log(product1);
            console.log(product2);
        });
    }).fail(function(err) {
        console.error(err)
        return err;
    });
   /* var options = {
        url: "http://www.lazada.vn/apple-iphone-6-16gb-xam-hang-nhap-khau-240697.html",
        encoding:"utf8",
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
        }
    };*/
};
module.exports = HtmlProcessor;



