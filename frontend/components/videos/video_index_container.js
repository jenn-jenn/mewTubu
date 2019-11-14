import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/videos/video_actions';
import { fetchAllUsers } from '../../actions/users/users_actions';

 
const msp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos)
    }
}; 

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(msp, mdp)(VideoIndex);
