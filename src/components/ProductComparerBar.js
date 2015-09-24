/**
 * Created by dis_name_pc on 16.09.2015.
 */
import React from 'react';
import { Panel} from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import UrlInput from './UrlInput';

var ProductComparerBar = React.createClass({
    formData: {firstUrl: '', secondUrl: '', isFirstValid: false, isSecondValid: false},
    firstUrlChanged: function (url, isValid) {
        this.formData.firstUrl = url.toString();
        this.formData.isFirstValid = isValid;
        this.formData.isValid = this.formData.isSecondValid && this.formData.isFirstValid;
    },
    secondUrlChanged: function (url, isValid) {
        this.formData.secondUrl = url.toString();
        this.formData.isSecondValid = isValid;
        this.formData.isValid = this.formData.isSecondValid && this.formData.isFirstValid;
    },
    render: function () {
        return (
            <Grid fluid>
                <Row>
                    <Row className="inputs">
                        <UrlInput id="input_url_1" class="input_url" onChange={this.firstUrlChanged} product_number="First product url"/>
                        <UrlInput id="input_url_2" class="input_url" onChange={this.secondUrlChanged} product_number="Second product url"/>
                    </Row>
                    <Row>
                        <Button onClick={this.handleOnClickEvent} bsStyle="primary" bsSize="large">Compare </Button>
                    </Row>
                </Row>
            </Grid>         );
    },
    callParetClickHandler: function (data) {
        this.props.callbackParent(data);
    },
    handleOnClickEvent: function () {
        var dataToSend, that = this;
        if (this.formData.isValid) {
            dataToSend = JSON.stringify(this.formData);
            console.log(this.formData);
            $.ajax({
                url: 'http://localhost:3000/api/load',
                dataType: 'json',
                type: 'POST',
                contentType: "application/json",
                cache: false,
                data: dataToSend,
                success: function (data) {
                    that.callParetClickHandler(data);
                },
                error: function () {

                }
            });
        }
        else {
            that.callParetClickHandler({});
        }
    }
});
module.exports = ProductComparerBar;