import { connect } from 'react-redux';
import { fetchAllComments, deleteComment } from '../../actions/comments/comment_action';
import Comments from './comment';
import { fetchAllUsers } from '../../actions/users/users_actions';

const msp = (state) => {
    return {    
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.currentUserId]

    }
};

const mdp = (dispatch) => ({
    fetchComments: (videoId) => dispatch(fetchAllComments(videoId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deleteComment: (commentId, videoId) => dispatch(deleteComment(commentId, videoId))
});
  
export default connect(msp, mdp)(Comments);