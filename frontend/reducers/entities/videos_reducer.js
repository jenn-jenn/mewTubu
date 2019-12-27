import { RECEIVE_CLIP, RECEIVE_CLIPS, RECEIVE_QUERY } from '../../actions/videos/video_actions';

const videoReducer =( state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CLIP:
            return Object.assign({}, state, { [action.clip.id]: action.clip});
        case RECEIVE_CLIPS:
            return action.clips    
        case RECEIVE_QUERY:
            return action.query
        default: 
            return state;
    }
};

export default videoReducer;
