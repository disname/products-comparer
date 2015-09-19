/**
 * Created by s_vinnik on 17.09.2015.
 */

import React from "react";
import Router from "react-router";
import routes from "../routes/core-routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, document.getElementById('app'));
});