/**
 * Created by s_vinnik on 17.09.2015.
 */
var cheerio = require('cheerio'),
    q = require('q'),
    productModel = require('./models/product'), product,
    HtmlParser, $, spec_name, spec_text;
HtmlParser = function () {
};

HtmlParser.prototype.parsePage = function (page) {
    var def = q.defer(), product = new productModel(),
    $ = cheerio.load(page);
    product.name = $('.product-info-name').text().replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();
    product.price = $('.product-price').text().replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();
    product.img_url = $('.product-image-container img').attr('src');
    $('div.description-detail ul.simpleList li').map(function (i, el) {
        if (cheerio(this).text().indexOf('description') == -1) {

            spec_name = cheerio(this).contents().filter(function () {
                return this.type === 'text';
            }).text().replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();

            spec_text = cheerio(this).children('span').first().text().replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/gm, "").trim();
            product.addSpecification(spec_name, spec_text);
        }
    });
    def.resolve(product);
    return def.promise;
};
module.exports = HtmlParser;