import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comments/comment_action';
import { fetchAllUsers } from '../../actions/users/users_actions';

const msp = (state) => {
    return {
        users: state.entities.users   
    }
};

const mdp = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(msp, mdp)(CommentForm);