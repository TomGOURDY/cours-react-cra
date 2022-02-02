import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./../pages/About"
import Home from "./../pages/Home"
import NoMatch from "./NoMatch"

const MyRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="*" component={NoMatch}></Route>
        </Switch>
    </Router>
);

export default MyRouter;