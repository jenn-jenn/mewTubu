import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsContainer from '../comments/comment_container';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchAllUsers();
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
                    <h1> 
                        {video.title}
                    </h1>
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
                        <CommentFormContainer videoId={this.props.videoId} userId={this.props.currenUserId} />
                    </section>
                    <section className="comments-section">
                        <CommentsContainer videoId={this.props.videoId}/>
                    </section>
                </>
                <section className="side-videos">
                    section{videoArray.map((v, id) => {
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