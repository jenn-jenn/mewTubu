import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/sessions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors.login,
    formType: "Sign Up"
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);