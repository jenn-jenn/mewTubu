import { RECEIVE_CURRENT_CLIP } from "../../actions/videos/video_actions";

const dislikes = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_CLIP:
      return action.clip.dislikes;
    default:
      return state;
  }
};

export default dislikes;
