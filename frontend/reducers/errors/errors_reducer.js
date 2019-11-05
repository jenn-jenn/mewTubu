import { combineReducers } from 'redux';
import sessionErrorsReducer from '../sessions/session_errors_reducer';


const errors = combineReducers({
    login: sessionErrorsReducer
});

export default errorsReducer;

