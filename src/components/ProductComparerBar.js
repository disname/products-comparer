/**
 * Created by dis_name_pc on 16.09.2015.
 */
import React from 'react';
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
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
            <Grid fluid>

                <Row>
                    <div className="inputs">
                        <UrlInput id="input_url_1" class="input_url" onChange={this.firstUrlChanged}/>
                        <UrlInput id="input_url_2" class="input_url" onChange={this.secondUrlChanged}/>
                    </div>
                    <CompareButton onClick={this.handleOnClickEvent} text="Compare us"/>
                </Row>
            </Grid>         );
    },
    callParetClickHandler: function (data) {
        this.props.onCompareClick(data);
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
                this.props.callbackParent(data);
            },
            error: function () {

            }
        });
    }
});
module.exports = ProductComparerBar;