import {CLIP_ERRORS} from '../../actions/videos/video_actions';
import { CLEAR_ERRORS } from '../../actions/errors_action';


const videoErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case CLIP_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default videoErrorsReducer;
