import { connect } from 'react-redux';
import VideoItem from "./video_item";
import { fetchVideos, likeVideo, dislikeVideo } from '../../actions/videos/video_actions';
import { fetchAllUsers } from '../../actions/users/users_actions'
 

const msp = (state, ownProps) => {
    return {
        videoId: ownProps.match.params.videoId,
        videos: state.entities.videos,
        currentUserId: state.session.currentUserId
    }
}

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    likeVideo: (videoId) => dispatch(likeVideo(videoId)),
    dislikeVideo: (videoId) => dispatch(dislikeVideo(videoId))
});

export default connect(msp, mdp)(VideoItem);