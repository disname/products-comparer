/**
 * Created by s_vinnik on 17.09.2015.
 */

var loader=require('./loader'),
    parser=require('./parser');

var HtmlProcessor=function(){

}
HtmlProcessor.prototype.processPages=function(url1,url2)
{
    var loaderPromise1=(new loader()).load(url1);
    var loaderPromise2=(new loader()).load(url1);
 /*   Q.all([loaderPromise1,loaderPromise12]).spread(function(page1,page2){
       console.log('pages loaded');
    });*/
   // when(loaderPromise1,loaderPromise12).then(function(){});
    console.log('processing');

};

module.exports=HtmlProcessor;



