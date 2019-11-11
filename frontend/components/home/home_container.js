import { connect } from 'react-redux';
import Home from './home';


const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mdp = (dispatch) => ({

});

export default connect(msp, mdp)(Home);