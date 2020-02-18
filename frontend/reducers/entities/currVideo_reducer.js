import { RECEIVE_CURRENT_CLIP } from "../../actions/videos/video_actions";

const currentVideoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_CLIP:
            return action.clip
        default:
            return state;
    }

};

export default currentVideoReducer;