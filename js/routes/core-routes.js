/**
 * Created by dis_name_pc on 16.09.2015.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Root = require('../layouts/default.js');
var Index = require('../views/index.js');

/*
var coreRoutes = express.Router();
coreRoutes.get('/', function (req, res, next) {
/!*    res.render('index');*!/
    res.setHeader('Content-Type', 'text/html');
    res.end(React.renderToStaticMarkup(
        React.DOM.body(
            null,
            React.DOM.div({
                id: 'app',
                dangerouslySetInnerHTML: {
                    __html: React.renderToString(React.createElement(index, {

                    }))
                }
            })

         /!*   React.DOM.script({
                src: '/public/app.js'
            })*!/
        )
    ));

})
coreRoutes.get('*', function (req, res, next) {
    res.render('index');
})
coreRoutes.use(function(req, res, next) {

});

module.exports.coreRoutes = coreRoutes;

*/

var Routes = (
    <Route handler={Root} path='/'>
        <DefaultRoute handler={Index} />
       /* <Route path='/' handler={Index} />*/
    </Route>
);
module.exports = Routes;