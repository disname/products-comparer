/**
 * Created by s_vinnik on 17.09.2015.
 */
var React = require('react'),
    CompareButton = React.createClass({
        render: function () {
            return (
                <button onClick={this.props.onClick}>{this.props.text}</button>
            )
        }
    });
module.exports = CompareButton;