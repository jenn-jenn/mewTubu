import { connect } from 'react-redux';
import Searchbar from './search_bar';
import { fetchVideos, receiveQuery, } from '../../actions/videos/video_actions';

const msp = (state) => {
    return {
        
    }
};

const mdp = (dispatch) => ({
    fetchVideosQuery: (query) => dispatch(fetchVideos(query)),
    setSearchWord: (query) => dispatch(receiveQuery(query))
});

export default connect(msp, mdp)(Searchbar);