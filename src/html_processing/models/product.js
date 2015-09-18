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
    var spec=new specModel(name,text);
    if(this.specs && spec)
        this.specs.push(spec);
}

Product.prototype.getSpecifications=function()
{
    return this.specs;
}

module.exports=Product;