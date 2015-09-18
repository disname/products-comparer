/**
 * Created by dis_name_pc on 16.09.2015.
 */

import React from 'react';
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var Panel = require('react-bootstrap').Panel;
import CompareButton from  './CompareButton';
import UrlInput from './UrlInput';
var ProductComparerBar;
ProductComparerBar = React.createClass({
    formData: {firstUrl: '', secondUrl: ''},
    firstUrlChanged: function (data) {
        console.log(data);
        this.formData.firstUrl = data.toString();
    },
    secondUrlChanged: function (data) {
        console.log(data);
        this.formData.secondUrl = data.toString();
    },
    render: function () {
        var isFixed = true, isFluid = true;
        return (
            <Navbar fixedTop={isFixed} fluid={isFluid}>
                <Nav className="container-fluid">
                    <div class="row-fluid">
                        <Panel header="Products comparer" bsStyle="primary">
                            <div className="inputs">
                                <UrlInput id="input_url_1" class="input_url" onChange={this.firstUrlChanged}/>
                                <UrlInput id="input_url_1" class="input_url" onChange={this.secondUrlChanged}/>
                            </div>
                            <CompareButton onClick={this.handleOnClickEvent} text="Compare us"/>
                    </Panel>
                    </div>
                </Nav>
            </Navbar>            );
    },
    handleOnClickEvent: function (e) {
        var dataToSend = JSON.stringify(this.formData);
        console.log(this.formData);
        $.ajax({
            url: 'http://localhost:3000/api/load',
            dataType: 'json',
            type: 'POST',
            contentType: "application/json",
            cache: false,
            data: dataToSend,
            success: function (data) {

            },
            error: function () {

            }
        });
    }
});
module.exports = ProductComparerBar;