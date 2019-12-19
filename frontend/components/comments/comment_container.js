import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments/comment_action';
import Comments from './comment';

const msp = (state) => {
    return {    

    }
};

const mdp = (dispatch) => ({
    fetchComments: () => dispatch(fetchAllComments)
});

export default connect(msp, mdp)(Comments);