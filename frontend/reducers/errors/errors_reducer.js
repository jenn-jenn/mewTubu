import { combineReducers } from 'redux';
import sessionErrorsReducer from '../sessions/session_errors_reducer';
import videoErrorsReducer from '../entities/video_error_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    video: videoErrorsReducer
});

export default errorsReducer;

