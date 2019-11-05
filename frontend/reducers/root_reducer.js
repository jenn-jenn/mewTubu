import { combineReducers } from 'redux';
import sessionReducer from './sessions/session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';


const RootReducer = combineReducers({
    sessionReducer: sessionReducer,
    entitiesReducer: entitiesReducer,
    errorsReducer: errorsReducer
});

export default RootReducer;