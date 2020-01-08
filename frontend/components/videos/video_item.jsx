import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsContainer from '../comments/comment_container';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.videoId
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.checkThumbscolor = this.checkThumbscolor.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.checkThumbscolor();
    }
    componentDidUpdate() {
        this.checkThumbscolor();
    }

    checkThumbscolor() {
        const video = this.props.videos[this.props.videoId];
        const likes = video.likes // array
        const dislikes = video.dislikes // array
        const upThumb = document.getElementById("up");
        const downThumb = document.getElementById("down");
        
        let didLiked = false;
        likes.forEach((like) => {
            if(like.user_id === this.props.currentUserId) {
                didLiked = true;
            }
        })

        let didDisliked = false;
        dislikes.forEach((like) => {
            if (like.user_id === this.props.currentUserId) {
                didDisliked = true;
            }
        })

        if(didLiked) {
            upThumb.style.color = "rgb(185, 149, 243)";
        } else {
            upThumb.style.color = "";
        }

        if(didDisliked) {
            downThumb.style.color = "rgb(185, 149, 243)";
        } else {
            downThumb.style.color = "";
        }
    }

    handleLike(e) {
        e.stopPropagation();
        if(!this.props.currentUserId) {
            this.props.history.push('/login');
        } else {
            this.props.likeVideo(this.props.videoId).then(() => {
                this.checkThumbscolor();
            });
        }
        
    }

    handleDislike(e) {
        e.stopPropagation();
        if (!this.props.currentUserId) {
            this.props.history.push('/login');
        } else {
            this.props.dislikeVideo(this.props.videoId).then(() => {
                this.checkThumbscolor();
            });
        }
    }




    render() { 
        const video = this.props.videos[this.props.videoId];
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
                                <span>{video.likes.length}</span>
                            </div>
                            <div className="dislikes-count">
                                <i className="fas fa-thumbs-down" id="down" title="Dislike" onClick={this.handleDislike}></i>
                                <span>{video.dislikes.length}</span>
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