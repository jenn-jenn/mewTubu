import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {
            isArray: Array.isArray(this.props.videos)
        }
    }
    componentDidMount() { 
        if(Array.isArray(this.props.videos)) {
            this.props.fetchVideos().then(() => {
                this.setState({ isArray: Array.isArray(this.props.videos)})
            })
        } else {
            this.props.fetchVideosWithQuery(this.props.videos).then(() => {
                this.setState({ isArray: Array.isArray(this.props.videos) })
            })
        }
    }

    render() {
        let display = null;
        if(!this.state.isArray || (this.state.isArray && this.props.videos.length === 0)){
            display = (
                null
            )
        } else if(this.state.isArray){
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
        
        return (
            <div className="video-index-content">
                {display}
            </div>
        )
    }
}

export default VideoIndex;