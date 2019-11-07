import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/sessions/session_actions';
import { clearErrors } from '../../actions/errors_action';




const msp = ( {errors} ) => ({
    errors: errors.session,
    formType: "Login",
    
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);