import { RECEIVE_CLIP, RECEIVE_CLIPS } from '../../actions/videos/video_actions';

const videoReducer =( state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CLIP:
            // debugger
            return Object.assign({}, state, { [action.clip.id]: action.clip});
        case RECEIVE_CLIPS:
            debugger
            return action.clips    
        default: 
            return state;
    }
};

export default videoReducer;
