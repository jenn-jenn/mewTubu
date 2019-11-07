import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/sessions/session_actions';

const _nullUser = {
    currentUserId: null 
};

const sessionReducer = (state = _nullUser, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            let user = action.user;
            console.log(user);
            return Object.assign({}, { currentUserId: user.id})
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;
