import React from 'react';
import {Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './home/dashboard';
import { NotFound } from './not_found';
import SelectFileContainer from '../components/videos/select_file_container';
import UploadContainer from '../components/videos/upload_container';


const App = () => (
    <div className="main-container">
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route component={Dashboard} />
            
        </Switch>
    </div>                
);

export default App;
