import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';


const msp = (state, ownProps) => {
    debugger
    return {
        username: state.entities.users[ownProps.authorId].username
    }
};

const mdp = (dispatch) => ({
    
});

export default connect(msp, mdp)(VideoIndexItem)
