import { combineReducers } from 'redux';

import users from '';
import videos from '';
import likes from '';
import dislikes from '';
import comments from '';

const entities = combineReducers({
    users,
    // videos,
    // likes,
    // dislikes,
    // comments
});

export default entities;