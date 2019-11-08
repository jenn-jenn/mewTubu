import React from 'react';
import {Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Home from './home/home';
import SideNav from './side_nav/side_nav';

const HomePage = () => (
    <div className="content">
        <Route path="/" component={NavBarContainer} />
        <Route path="/" component={SideNav} />
        <Route exact path="/" component={Home} />
    </div>    
);

const LoginPage = () => (
    <div className="content">
        <AuthRoute exact path='/login' component={LoginFormContainer} />
    </div>
);

const SignUpPage = () => (
    <div className="content">
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
    </div>
)

const App = () => (
    <div className="main-container">
        <Switch>
            <AuthRoute exact path='/login' component={LoginPage} />
            <AuthRoute exact path='/signup' component={SignUpPage} />
            <Route component={HomePage} />
        </Switch>
    </div>                
);

export default App;
