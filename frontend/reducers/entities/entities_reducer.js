import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';

// import likes from '';
// import dislikes from '';
// import comments from '';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videoReducer
    // likes,
    // dislikes,
    // comments
});

export default entitiesReducer;