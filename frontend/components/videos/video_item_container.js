import { connect } from 'react-redux';
import VideoItem from "./video_item";
import { fetchVideos, likeVideo, dislikeVideo, fetchVideo } from '../../actions/videos/video_actions';
import { fetchAllUsers } from '../../actions/users/users_actions'
 

const msp = (state, ownProps) => {
    let likes = state.entities.likes.map((like) => {
        return like.userId;
    })

    let dislikes = state.entities.dislikes.map((dislike) => {
        return dislike.userId;
    })
    return {
        videoId: ownProps.match.params.videoId,
        videos: state.entities.videos,
        video: state.entities.currVideo,
        currentUserId: state.session.currentUserId,
        likes: likes, 
        dislikes: dislikes
    }
}

const mdp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    likeVideo: (videoId) => dispatch(likeVideo(videoId)),
    dislikeVideo: (videoId) => dispatch(dislikeVideo(videoId))
});

export default connect(msp, mdp)(VideoItem);