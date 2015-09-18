/**
 * Created by s_vinnik on 17.09.2015.
 */

var q = require('q'), loader = require('./loader'),
    htmlParser = require('./parser'), parser, loaderPromise1, loaderPromise2, HtmlProcessor = function () {
    }, primeProduct, notPrimeProduct, comparedProductsDefer, comparedProducts = {};

Array.prototype.getUnique = function () {
    var u = {}, a = [];
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
};
function findByName(source, name) {
    console.log(source);
    for (var i = 0; i < source.length; i++) {
        if (source[i].name == name) {
            console.log(name);
            return source[i];
        }
    }
}
HtmlProcessor.prototype.processPages = function (urls) {
    comparedProductsDefer = q.defer();
    var concatProducts = function (product1, product2,callback) {
        comparedProducts.product1 = product1;
        comparedProducts.product2 = product2;
        comparedProducts.specs = [];

        if (product1.specs.length > product2.specs.length) {
            primeProduct = product1;
            notPrimeProduct = product2;
        }
        else {
            primeProduct = product2;
            notPrimeProduct = product1;
        }

        var primeLength = primeProduct.specs.length, current, current2;
        for (var j = 0; j < primeLength; j++) {
            current = primeProduct.specs[j];
            current2 = findByName(notPrimeProduct.specs, current.name);

                comparedProducts.specs.push({
                    name: current.name,
                    text1:current.text,
                    text2: current2.text
                });

        }
        console.log(comparedProducts.specs);
        callback(comparedProducts)
    };


    loaderPromise1 = (new loader()).load(urls[0]);
    loaderPromise2 = (new loader()).load(urls[1]);
    parser = new htmlParser();

    q.all([loaderPromise1, loaderPromise2]).spread(function (page1, page2) {
        q.all([parser.parsePage(page1[1]), parser.parsePage(page2[1])]).spread(function (product1, product2) {
            console.log('processor called');
            console.log(product1);
            console.log(product2);
            concatProducts(product1, product2,function(data){
                console.log('called');
                console.log(comparedProductsDefer);
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



