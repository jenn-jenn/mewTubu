import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/sessions/session_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);