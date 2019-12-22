import { combineReducers } from 'redux';
import sessionErrorsReducer from '../sessions/session_errors_reducer';
import videoErrorsReducer from '../entities/video_error_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    video: videoErrorsReducer,
    comment: commentErrorsReducer    
});

export default errorsReducer;

