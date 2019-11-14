import { connect } from 'react-redux';
import VideoItem from "./video_item";
import { fetchVideo } from '../../actions/videos/video_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        videoId: ownProps.match.params.videoId,
        video: state.entities.videos[ownProps.match.params.videoId],
        // author: state.entities.users[]
    }
}

const mdp = (dispatch) => ({
    fetchVideo: (clip) => dispatch(fetchVideo(clip))
});

export default connect(msp, mdp)(VideoItem);