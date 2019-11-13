import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/sessions/session_actions';
import { clearErrors } from '../../actions/errors_action';

const demo = {
    pathname: "/login",
    state: true
}

const msp = ({errors}) => ({
    errors: errors.session,
    formType: "Sign Up",
    // navLink: <Link to={demo}>Demo Login</Link>
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);