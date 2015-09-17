/**
 * Created by dis_name_pc on 16.09.2015.
 */
/*
 import React from 'react';

 class ProductComparerBar extends React.Component {
 render() {
 return <div className="heading">
 <h1>Products comaprer</h1>
 <section>Please type urls of products that you want to compare and click <b>Compare</b> button.</section>
 <div className="inputs">
 <input type="text" name="input_url_first"
 id="input_url_first"
 className="input_url"/>
 <input type="text"
 name="input_url_second"
 id="input_url_second"
 className="input_url"/>
 </div>
 <button>Compare</button>
 </div>;
 }
 }

 export default ProductComparerBar;
 */
/*,HtmlProcessor=require('../html_processing/html_processor')*/
var React = require('react'), CompareButton = require('./CompareButton'),UrlInput=require('./UrlInput'), ProductComparerBar,
    HtmlProcessor=require('../html_processing/html_processor');
ProductComparerBar = React.createClass({
    render: function () {
        return (<div className="heading">
            <h1>Products comparer</h1>
            <section>Please type urls of products that you want to compare and click <b>Compare</b> button.</section>
            <div className="inputs">
            <UrlInput id="input_url_1" class="input_url"/>
                <UrlInput id="input_url_1" class="input_url" />
            </div>
            <CompareButton onClick={this.handleOnClickEvent} text="Compare us"/>
        </div>);
    },
    handleOnClickEvent:function(e){
        console.log('start processing');
        var processor=new HtmlProcessor();
        processor.processPages("http://stackoverflow.com/questions/24103072/reactjs-onclick-handler-not-firing-when-placed-on-a-child-component",
            "http://stackoverflow.com/questions/24103072/reactjs-onclick-handler-not-firing-when-placed-on-a-child-component");
    }
});
module.exports = ProductComparerBar;