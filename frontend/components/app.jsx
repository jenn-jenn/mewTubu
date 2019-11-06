import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="main-container">
        <nav className="nav-header">
            <div className="logo">
                <Link to="/">
                    <img className="logo-img" src="/assets/mew.png" />
                    <h1 className="logo-name">MEWTUBU</h1>
                </Link>
            </div>
            <NavBarContainer />
        </nav>

        <div className="content">
            {/* <Route path="/"  */}
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
        
    </div>
);

export default App;
