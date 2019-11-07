import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ( {component: Component, path, loggedIn }) => {
    debugger
    return (
        <Route path={path} render={(props) => (
            loggedIn ? (
                <Redirect to="/" />
                
            ) : (
                <Component {...props} />
                )
        )} />
    )
}

const msp = (state) => ({ 
    loggedIn: Boolean(state.session.currentUserId) 
});

export const AuthRoute = withRouter(connect(msp)(Auth));