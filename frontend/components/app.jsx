import React from 'react';
import {Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import UploadContainer from './videos/upload_container';
import SelectContainer from './videos/select_file_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import SideNav from './side_nav/side_nav';

const Dashboard = () => (
    <div className="content">
        <Route path="/" component={NavBarContainer} />
        <Route path="/" component={SideNav} />
        <Route exact path="/" component={Home} /> 
        <ProtectedRoute path="/selectFiles" component={SelectContainer} />
        <ProtectedRoute path="/upload" component={UploadContainer} />
        
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
            <Route component={Dashboard} />
        </Switch>
    </div>                
);

export default App;
