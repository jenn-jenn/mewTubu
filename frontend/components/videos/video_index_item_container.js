import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VideoIndexItem from './video_index_item';
import { fetchAllUsers } from '../../actions/users/users_actions'
import { fetchVideos, fetchVideo } from '../../actions/videos/video_actions'

const msp = (state, ownProps) => { 
    return {
        // users: JSON.parse(localStorage.getItem("users")),
        authorId: ownProps.authorId,
        username: state.entities.users[ownProps.authorId].username,
    }
};

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchVideo: (id) => dispatch(fetchVideo(id))
});

export default withRouter(connect(msp, mdp)(VideoIndexItem));
