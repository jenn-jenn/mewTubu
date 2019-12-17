import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = (state) => {
    return {

    }
};

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(CommentForm);