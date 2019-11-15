import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            video: this.props.video
        }
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchAllUsers();
        this.props.fetchVideo(this.props.videoId);
    }

    render() { 
        if(this.props.video === undefined || this.props.videoId === undefined) {
            return null
        }
        const video = this.props.video;
        let author = this.props.video.authorName

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
                        <div className="desc-icon">
                            <img src="/assets/user.png" />
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
        return (
            <>
                <div className="video-show-div">     
                    {display}    
                </div>
                <div className="side-videos">
                    {this.props.videos.map((v, id) => {
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
                </div>  
            </>
        )
    }
}

export default VideoItem;