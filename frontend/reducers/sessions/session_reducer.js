import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/sessions/session_actions';

const _nullUser = {
    currentUserId: null
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            let user = action.user;
            console.log(user);
            return { currentUserId: user.id }
        case LOGOUT_CURRENT_USER:
            // debugger
            return _nullUser;
        default:
            // debugger
            return state;
    }
};

export default sessionReducer;
