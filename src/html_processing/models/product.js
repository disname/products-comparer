/**
 * Created by dis_name_pc on 18.09.2015.
 */
import specModel from './spec';
var Product=function(){
    this.specs = [];
    this.price='';
    this.img_url='';
    this.name='';
};
Product.prototype.addSpecification=function(name,text)
{
    if(this.specs)
        this.specs.push(new specModel(name,text));
};

Product.prototype.getSpecifications=function()
{
    return this.specs;
};
Product.prototype.findByName=function( name) {
    var result=null;
    for (var i = 0; i < this.specs.length; i++) {
        if (this.specs[i].name == name) {
            result=  this.specs[i];
        }
    }
    return result;
};

module.exports=Product;