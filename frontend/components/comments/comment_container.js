import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments/comment_action';
import Comments from './comment';

const msp = (state, ownProps) => {
    return {    
        
    }
};

const mdp = (dispatch) => ({
    fetchComments: (videoId) => dispatch(fetchAllComments(videoId))
});

export default connect(msp, mdp)(Comments);