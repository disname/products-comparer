/**
 * Created by s_vinnik on 17.09.2015.
 */

var q = require('q'), loader = require('./loader'), spec = require('./models/spec'),
    htmlParser = require('./parser'), HtmlProcessor;
HtmlProcessor = function () {
};

function concatProducts(product1, product2, callback) {
    var primeProduct, notPrimeProduct, comparedProducts,current, current2,primeLength ;
    comparedProducts = {product1 : product1,product2 : product2,specs:[]};
    if (product1.specs.length > product2.specs.length) {
        primeProduct = product1;
        notPrimeProduct = product2;
    }
    else {
        primeProduct = product2;
        notPrimeProduct = product1;
    }
    primeLength = primeProduct.specs.length;
    for (var j = 0; j < primeLength; j++) {
        current = primeProduct.specs[j];
        current2 = notPrimeProduct.findByName(current.name);
        comparedProducts.specs.push(new spec(current.name, current.specText1, current2 ?current2.specText1:''));
    }
    callback(comparedProducts);
}

HtmlProcessor.prototype.processPages = function (urls) {
    var comparedProductsDefer, loaderPromise1, loaderPromise2, parser = new htmlParser();

    comparedProductsDefer = q.defer();
    loaderPromise1 = (new loader()).load(urls[0]);
    loaderPromise2 = (new loader()).load(urls[1]);

    q.all([loaderPromise1, loaderPromise2]).spread(function (page1, page2) {
        q.all([parser.parsePage(page1[1]), parser.parsePage(page2[1])]).spread(function (product1, product2) {
            concatProducts(product1, product2, function (data) {
                comparedProductsDefer.resolve(data);
            });
        });
    }).fail(function (err) {
        console.error(err);
        comparedProductsDefer.reject(new Error());
    });
    return comparedProductsDefer.promise;
};
module.exports = HtmlProcessor;



