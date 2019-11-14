import React from 'react';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            video: this.props.video
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchVideos();
        this.props.fetchVideo(this.props.videoId);
    }
    render() {

        const video = this.props.video;
        let author = this.props.author;

        debugger
        const display = video ? (
            <div className="video-display">
                <div className="video"> 
                    <video controls src={video.clipUrl} />
                </div>
                {video.title}
                <br></br>
                {author}
            </div>
        ) : (null);
        
        return (
            <div className="video-show-div">     
                {display}
            </div>
        )
    }
}

export default VideoItem;