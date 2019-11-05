import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// DEBUGGING USE
import {signup, login, logout} from './util/session_api_util';


window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Welcome to MewTubu</h1>, root);
});
