import React from 'react';
import { Route,Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Home from './home/home';
import SideNav from './side_nav/side_nav';

const App = () => (
    <div className="main-container">
        {/* <NavBarContainer /> */}
        {/* <SideNav /> */}
        <Route path="/" component={NavBarContainer}/>
        <Route path="/" component={SideNav}/>
        <div className="content">
            <Route exact path="/" component={Home} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    </div>

    
    // <div>
    //     {/* <NavBarContainer /> */}
    //     {/* <SideNav /> */}
    //     <Route path="/" component={NavBarContainer} />
    //     <Route path="/" component={SideNav} />
    //     {/* <div className="content"> */}
    //         {/* <Route exact path="/" component={Home} /> */}
    //         <AuthRoute path="/login" component={LoginFormContainer} />
    //         <AuthRoute path="/signup" component={SignupFormContainer} />
    //     {/* </div> */}
    // </div>




);

export default App;
