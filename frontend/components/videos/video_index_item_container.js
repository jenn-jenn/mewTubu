import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';
import { fetchAllUsers } from '../../actions/users/users_actions'
import { fetchVideos } from '../../actions/videos/video_actions'

const msp = (state, ownProps) => { 
    // debugger
    return {
        username: state.entities.users[ownProps.authorId].username
    }
};

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(msp, mdp)(VideoIndexItem)
