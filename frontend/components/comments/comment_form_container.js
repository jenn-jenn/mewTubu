import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comments/comment_action';

const msp = (state) => {
    return {
        
    }
};

const mdp = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(msp, mdp)(CommentForm);