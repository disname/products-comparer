/**
 * Created by dis_name_pc on 16.09.2015.
 */
var React = require('react'),
    Grid = require('react-bootstrap').Grid,
    Row = require('react-bootstrap').Row,
    Panel = require('react-bootstrap').Panel,
    Button = require('react-bootstrap').Button,
    UrlInput = require('./UrlInput'),
    ProductComparerBar;
ProductComparerBar = React.createClass({
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
        var isFixed = true, isFluid = true;
        return (
            <Grid fluid>
                <Row>
                    <Row className="inputs">
                        <UrlInput id="input_url_1" class="input_url" onChange={this.firstUrlChanged}/>
                        <UrlInput id="input_url_2" class="input_url" onChange={this.secondUrlChanged}/>
                    </Row>
                    <Row>
                        <Button onClick={this.handleOnClickEvent} bsStyle="primary" bsSize="large"
                            >Compare </Button>
                    </Row>
                </Row>
            </Grid>         );
    },
    callParetClickHandler: function (data) {
        this.props.callbackParent(data);
    },
    handleOnClickEvent: function (e) {
        var dataToSend ,that = this;
        if (this.formData.isValid) {
            dataToSend = JSON.stringify(this.formData)
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
        else{
            that.callParetClickHandler({});
        }
    }
});
module.exports = ProductComparerBar;