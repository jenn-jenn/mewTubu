import { connect } from 'react-redux';
import VideoIndexSearch from './video_index_search';
import { fetchVideos } from '../../actions/videos/video_actions';

const msp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos)
    }
};


const mdp = (dispatch) => ({
    fetchVideos: (query) => dispatch(fetchVideos(query)),
});

export default connect(msp, mdp)(VideoIndexSearch);
