import { connect } from 'react-redux';
import VideoItem from "./video_item";
import { fetchVideos, likeVideo, dislikeVideo } from '../../actions/videos/video_actions';
import { fetchAllUsers } from '../../actions/users/users_actions'
 

const msp = (state, ownProps) => {
    
    let likes = state.entities.videos[ownProps.match.params.videoId].likes.map((like) => {
        return like.userId;
    })
    let dislikes = state.entities.videos[ownProps.match.params.videoId].dislikes.map((dislike) => {
        return dislike.userId;
    })
    return {
        videoId: ownProps.match.params.videoId,
        videos: state.entities.videos,
        currentUserId: state.session.currentUserId,
        likes,
        dislikes
    }
}

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    likeVideo: (videoId) => dispatch(likeVideo(videoId)),
    dislikeVideo: (videoId) => dispatch(dislikeVideo(videoId))
});

export default connect(msp, mdp)(VideoItem);