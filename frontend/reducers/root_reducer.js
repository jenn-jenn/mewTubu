import { combineReducers } from 'redux';
import entities from '';
import ui from '';
import errors from '';
import session from '';

const RootReducer = combineReducers({
    entities,
    // ui,
    // errors,
    session
});

export default RootReducer;