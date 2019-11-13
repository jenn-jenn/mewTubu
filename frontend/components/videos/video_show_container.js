import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos/video_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        video: state.video,
        id: state.video.id
    }
}

const mdp = (dispatch) => ({
    fetchVideo: (clip) => dispatch(fetchVideo(clip))
});

export default connect(msp, mdp)(VideoShow);