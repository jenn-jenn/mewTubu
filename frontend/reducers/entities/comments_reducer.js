import { RECEIVE_A_COMMENT, RECEIVE_ALL_COMMENTS } from "../../actions/comments/comment_action";

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_A_COMMENT:
            let comment = action.comment
            newState[comment.video_id].push(comment);
            debugger
            return newState;
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        default:
            return state;
    }
};

export default commentReducer