import { combineReducers } from 'redux';
import sessionErrorsReducer from '../sessions/session_errors_reducer';


const errorsReducer = combineReducers({
    login: sessionErrorsReducer
});

export default errorsReducer;

