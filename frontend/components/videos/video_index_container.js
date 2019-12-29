import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/videos/video_actions';

const msp = (state) => {
    
    let videos;
    if(state.entities.videos instanceof String || typeof state.entities.videos === 'string') {
        videos = state.entities.videos
    } else {
        videos = Object.values(state.entities.videos)
    }
    return {
        videos
    }
    
}; 

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideosWithQuery: (query) => dispatch(fetchVideos(query)),
});

export default connect(msp, mdp)(VideoIndex);
