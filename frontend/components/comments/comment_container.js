import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments/comment_action';
import Comments from './comment';
import { fetchAllUsers } from '../../actions/users/users_actions';

const msp = (state) => {
    return {    
        comments: Object.values(state.entities.comments),
        users: state.entities.users,

    }
};

const mdp = (dispatch) => ({
    fetchComments: (videoId) => dispatch(fetchAllComments(videoId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});
  
export default connect(msp, mdp)(Comments);