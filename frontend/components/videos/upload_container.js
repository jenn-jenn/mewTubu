import { connect } from 'react-redux';
import UploadForm from './upload_form'; 
import { createVideo } from '../../actions/videos/video_actions';

const msp = ( state ) => {
    // debugger
    return {
        currentUserId: state.session.currentUserId,
        errors: state.errors.video
    }
};

const mdp = (dispatch) => ({
    createVideo: (clip) => dispatch(createVideo(clip))
});

export default connect(msp, mdp)(UploadForm);