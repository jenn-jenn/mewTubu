import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';
import commentReducer from './comments_reducer';

// import likes from '';
// import dislikes from '';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videoReducer,
    comments: commentReducer
    // likes,
    // dislikes,
    
});

export default entitiesReducer;