import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments/comment_action';
import Comments from './comment';

const msp = (state) => {
    return {    
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
    }
};

const mdp = (dispatch) => ({
    fetchComments: (videoId) => dispatch(fetchAllComments(videoId))
});
  
export default connect(msp, mdp)(Comments);