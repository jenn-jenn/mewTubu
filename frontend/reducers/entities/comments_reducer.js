import { RECEIVE_A_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT } from "../../actions/comments/comment_action";

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_A_COMMENT:
            let comment = action.comment
            newState[comment.id] = comment;
            return newState;
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case REMOVE_COMMENT:
            delete newState[action.comment.id]
            return newState;
        default:
            return state;
    }
};

export default commentReducer