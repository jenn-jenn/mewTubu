import { RECEIVE_CLIP, RECEIVE_CLIPS } from '../../actions/videos/video_actions';

const videoReducer =( state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CLIP:
            return Object.assign({}, state, { [action.clip.id]: action.clip});
        case RECEIVE_CLIPS:
            return action.clips    
        default: 
            return state;
    }
};

export default videoReducer;
