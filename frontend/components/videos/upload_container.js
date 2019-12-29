import { connect } from 'react-redux';
import VideoFrom from './upload_form'; 
import { createVideo, fetchVideo } from '../../actions/videos/video_actions';
import { clearErrors } from '../../actions/errors_action';


const msp = ( state, ownProps ) => {
    return {
        file: ownProps.location.state.file,
        fileType: ownProps.location.state.file.type,
        currentUserId: state.session.currentUserId,
        errors: state.errors.video
    }
};

const mdp = (dispatch) => ({
    createVideo: (clip) => dispatch(createVideo(clip)),
    fetchVideo: (clip) => dispatch(fetchVideo(clip)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(VideoFrom);