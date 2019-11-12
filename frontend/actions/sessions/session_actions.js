import * as SessionAPIUtil  from '../../util/session_api_util';
 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


// REGULAR ACTION CREATORS
const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user 
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

// THUNK ACTION CREATORS
export const signup = (user) => (dispatch) => {
    return SessionAPIUtil.signup(user).then( (user) => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => (dispatch) => {
    return SessionAPIUtil.login(user).then( (user) => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
        // .fail( err => {
        //     debugger
        //     console.log(err.responseJSON)
        // })
};

export const logout = () => (dispatch) => {
    return SessionAPIUtil.logout().then( () => dispatch(logoutCurrentUser()))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
}
