import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ( {component: Component, path, loggedIn }) => {
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
    loggedIn: Boolean(state.session.id) 
});

export const AuthRoute = withRouter(connect(msp)(Auth));