import React from 'react';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchVideo(this.props.videoId)
    }
    render() {

        const video = this.props.video;
        const display = video ? (
            
            <div className="video-display">
                <div className="video"> 
                    <video controls src={video.clipUrl} />
                </div>
                {video.title}
                {video.authorId}
            </div>
        ) : (null);
        debugger
        return (
            <div className="video-show-div">     
                {display}
            </div>
        )
    }
}

export default VideoItem;