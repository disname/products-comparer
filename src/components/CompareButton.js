/**
 * Created by s_vinnik on 17.09.2015.
 */
var Button=require('react-bootstrap').Button;
var React = require('react'),
    CompareButton = React.createClass({
        render: function () {
            return (
                <Button onClick={this.props.onClick}>{this.props.text}</Button>
            )
        }
    });
module.exports = CompareButton;