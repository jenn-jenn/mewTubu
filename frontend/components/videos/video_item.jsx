import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsContainer from '../comments/comment_container';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);

    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchAllUsers();
        
    }

    handleLike(e) {
        e.stopPropagation();
        console.log("likeinggg");
        this.props.likeVideo(this.props.videoId);
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
                                <i className="fas fa-thumbs-up" title="Like" onClick={this.handleLike}></i>
                                <span>{video.likes}</span>
                            </div>
                            
                            <i className="fas fa-thumbs-down" title="Dislike"></i>
                            {/* <span>{video.dislikes}</span> */}
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