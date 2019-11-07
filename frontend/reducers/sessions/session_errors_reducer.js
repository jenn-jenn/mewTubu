import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../../actions/sessions/session_actions';
import { CLEAR_ERRORS } from '../../actions/errors_action';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    };
};

export default sessionErrorsReducer;