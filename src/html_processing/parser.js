/**
 * Created by s_vinnik on 17.09.2015.
 */
var cheerio = require('cheerio'),
    q=require('q'),
    productModel = require('./models/product'),product,
    HtmlParser, $, spec_name, spec_text;
    HtmlParser = function () {
    };

HtmlParser.prototype.parsePage = function (page) {
    var def=q.defer();
    var product = new productModel();
    $ = cheerio.load(page);
    product.name=$('.product-info-name').text();
    product.price=$('.product-price').text();
    product.img_url=$('.product-image-container img').attr('src');
     $('div.description-detail ul.simpleList li').map(function(i,el){
     spec_name=cheerio(this).text();
     spec_text=cheerio(this).children().first().text();
         product.addSpecification(spec_name,spec_text);
    });
     def.resolve(product);
    return  def.promise;
};

// ¬ыносит конструктор парсера в модуль
module.exports = HtmlParser;