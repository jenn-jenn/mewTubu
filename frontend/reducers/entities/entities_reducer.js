import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
// import videos from '';
// import likes from '';
// import dislikes from '';
// import comments from '';




const entities = combineReducers({
    users: usersReducer,
    // videos,
    // likes,
    // dislikes,
    // comments
});

export default entitiesReducer;