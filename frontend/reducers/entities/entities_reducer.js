import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import videoReducer from './videos_reducer';
import commentReducer from './comments_reducer';
import currentVideoReducer from './currVideo_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videoReducer,
    comments: commentReducer,
    currVideo: currentVideoReducer
});

export default entitiesReducer;