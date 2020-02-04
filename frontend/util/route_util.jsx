import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ( {component: Component, path, loggedIn }) => {
    
    return (
        <Route 
            path={path} 
            render={(props) => (
                loggedIn ? ( <Redirect to="/" />) : ( <Component {...props} /> )
            )} 
        />
    )
};


const Protected = ( {component: Component, path, loggedIn }) => {
    debugger
    return (
        <Route
            path={path}
            render={(props) => (
                loggedIn ? (<Component {...props} />) : ( <Redirect to={{pathname: "/login", state: { from: props.location } }}/> )
            )}
        />
    )
};

const msp = (state) => ({ 
    loggedIn: Boolean(state.session.currentUserId) 
});

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));