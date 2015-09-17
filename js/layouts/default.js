/**
 * Created by dis_name_pc on 17.09.2015.
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var DefaultLayout = React.createClass({
    render: function () {
        var initialProps = {
            __html: safeStringify(this.props)
        };
        return (
            <html>
            <head><title>{this.props.title}</title>
            </head>
            <body>

            <RouteHandler {...this.props} />

            <script
                id='initial-props'
                type='application/json'
                dangerouslySetInnerHTML={initialProps}/>
            <script src='app.js'/>
      /*      {this.props.children}*/
            </body>
            </html>
        );
    }
});
function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = DefaultLayout;