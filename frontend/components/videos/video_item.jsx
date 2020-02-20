import React from 'react';
import { Redirect } from 'react-router-dom';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsContainer from '../comments/comment_container';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.checkThumbscolor = this.checkThumbscolor.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.videoId).then((res) => {
            this.props.fetchVideos();
            this.checkThumbscolor();
        })
        
    }

    componentDidUpdate() {
        this.checkThumbscolor();
    }

    checkThumbscolor() {
        let { currentUserId, likes, dislikes} = this.props;
        const upThumb = document.getElementById("up");
        const downThumb = document.getElementById("down");
        
        if(likes.includes(currentUserId)) {
            upThumb.style.color = "rgb(185, 149, 243)";
        } else {
            upThumb.style.color = "";
        }

        if(dislikes.includes(currentUserId)) {
            downThumb.style.color = "rgb(185, 149, 243)";
        } else {
            downThumb.style.color = "";
        }
    }

    handleLike(e) {
        e.stopPropagation();
        let { currentUserId, likeVideo, dislikeVideo, videoId, dislikes } = this.props;

        if(!currentUserId) {
            this.props.history.push({
                pathname: "/login",
                state: { from: this.props.location.pathname }
            }); 
        } else {
            /*
                1. if userId is in dislike, remove dislike
                2. like
            */
            if(dislikes.includes(currentUserId)) {
                // dislikeVideo(videoId).then((res) => {
                //     let dislikes = res.clip.dislikes.map((dislike) => {
                //         return dislike.userId;
                //     })
                // });
                dislikeVideo(videoId);
            }
            likeVideo(videoId);
            // likeVideo(videoId).then((res) => {
            //     let likes = res.clip.likes.map((like) => {
            //         return like.userId;
            //     })
            // });
        }
    }

    handleDislike(e) {
        e.stopPropagation();
        let { currentUserId, likeVideo, dislikeVideo, videoId, likes } = this.props;

        if (!this.props.currentUserId) {
            this.props.history.push({
                pathname: '/login',
                state: { from: this.props.location.pathname }
            }); 
        } else {
            /*
                1. if userId is in likes && not in dislikes, remove likes
                2. dislike
            */
            if(likes.includes(currentUserId)){
                // likeVideo(videoId).then((res) => {
                //     res.clip.likes.map((like) => {
                //         return like.userId;
                //     })
                // })
                likeVideo(videoId);
            }
            dislikeVideo(videoId);
            // dislikeVideo(videoId).then((res) => {
            //     res.clip.dislikes.map((dislike) => {
            //         return dislike.userId;
            //     })
            // });
        }
    }

    render() { 
        // const { likes, dislikes } = this.props;
        // const video = this.props.videos[this.props.videoId];
        debugger
        const {video, likes, dislikes} = this.props;
        if(video === undefined || this.props.videoId === undefined) {
            return null
        }

        let author = video.authorName
        const display = video ? (   
            <div className="video-display">
                <div className="video"> 
                    <video controls src={video.clipUrl} />
                </div>
                <div className="video-desc-box">
                    <div className="header-div">
                        <div>
                            <h1> 
                                {video.title}
                            </h1>
                        </div>
                        <div className="thumbs">
                            <div className="likes-count">
                                <i className="fas fa-thumbs-up" id="up" title="Like" onClick={this.handleLike}></i>
                                <span>{likes.length}</span>
                            </div>
                            <div className="dislikes-count">
                                <i className="fas fa-thumbs-down" id="down" title="Dislike" onClick={this.handleDislike}></i>
                                <span>{dislikes.length}</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="desc">
                        <div>
                            <i className="far fa-user-circle fa-4x"></i>
                        </div>
                        <div className="desc-text">
                            <p id="author">
                                {author}
                            </p>
                            <p id="description">
                                {video.description}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        ) : (null);

        const vidId = video.id;
        const videoArray = Object.values(this.props.videos)
        
        return (
            <>
                <>
                    <section className="video-show-div">     
                        {display}    
                        <CommentFormContainer videoId={this.props.videoId} userId={this.props.currentUserId} />
                        <div className="comments-section">
                            <CommentsContainer videoId={this.props.videoId} />
                        </div>
                    </section>
                    
                </>
                <section className="side-videos"> 
                    {videoArray.map((v, id) => {
                        if (v.id !== vidId) {
                            return (
                                <div className="clip-div" key={id}>
                                    <VideoIndexItemContainer
                                        key={id}
                                        video={v}
                                        authorId={v.authorId}
                                    />
                                </div>
                            )
                        }
                    })}
                </section>  
            </>
        )
    }
}

export default VideoItem;