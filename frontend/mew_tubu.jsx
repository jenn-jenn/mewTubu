import React from 'react';
import ReactDOM from 'react-dom';

// DEBUGGING USE
import {signup, login, logout} from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to MewTubu</h1>, root);
});
