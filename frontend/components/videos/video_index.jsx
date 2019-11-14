import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() { 
        // debugger
        this.props.fetchAllUsers();
        this.props.fetchVideos();
        
    }

    render() {
        // debugger
        return (
            <div className="video-index-content">
                {this.props.videos.map((video, id) => (
                    <div className="clip-div" key={id}>
                        <VideoIndexItemContainer
                            key={id}
                            video={video}
                            authorId={video.authorId}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default VideoIndex;