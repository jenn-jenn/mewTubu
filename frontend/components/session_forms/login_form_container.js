import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/sessions/session_actions';




const msp = (state, ownProps) => ({
    errors: state.errors.login,
    formType: "Login"
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);