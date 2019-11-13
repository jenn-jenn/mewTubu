import React from 'react';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videos: props.videos
        }
    }
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        let videos = this.state.videos.map(video => (
            <VideoShow
                key={video.id}
                video={video}/>
            )
        );
        
        return (
            <div>
                {videos}
            </div>
        )
    }
}

export default VideoIndex;