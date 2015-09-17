/**
 * Created by dis_name_pc on 17.09.2015.
 */
var React = require('react');

var DefaultLayout = React.createClass({
    render: function() {
        return (
            <html>
            <head><title>{this.props.title}</title></head>
            <body>{this.props.children}</body>
            </html>
        );
    }
});
module.exports = DefaultLayout;