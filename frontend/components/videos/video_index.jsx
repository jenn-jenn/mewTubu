import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() { 
        this.props.fetchVideos();
        
    }

    render() {
        let display = null;
        if (this.props.videos.length === 0) {
            display = (
                null
            )
        } else {
            display = ( 
                <>
                    {this.props.videos.map((video, id) => (
                        <div className="clip-div" key={id}>
                            <VideoIndexItemContainer
                                key={id}
                                video={video}
                                authorId={video.authorId}
                            />
                        </div>
                    ))}
                </>
            )
        }
        console.log(this.props.videos);
        
        return (
            <div className="video-index-content">
                {display}
            </div>
        )
    }
}

export default VideoIndex;