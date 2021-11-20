import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import HomePage from "views/HomePage/HomePage.js";
import FoodPage from "views/FoodPage/FoodPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import LandingPage from "views/LandingPage/LandingPage";
import AboutPage from "views/AboutPage/AboutPage";
// import AboutPage from "views/AboutPage/AboutPage";
import store from '../src/redux/store';
import TourPage from "views/TourPage/TourPage";
var hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/tour" component={TourPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/components" component={Components} />
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/food" component={FoodPage} />
            </Switch>
        </Router>,
    </Provider>,
    document.getElementById("root")
);
