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
        // debugger
        let videos = this.props.videos.map((video, id) => (
            <div className="clip-div">
                <VideoIndexItemContainer 
                    key={id} 
                    video={video} 
                    authorId={video.authorId} 
                />
            </div>
        ));

        
        // let clip = this.props.videos[0];
        // let video = null;
        // if (clip){
        //     debugger    
        //     video = <VideoIndexItemContainer key={clip.id} video={clip} authorId={clip.authorId} />
        // }
        
        
        return (
            <div className="video-index-content">
                {videos}
            </div>
        )
    }
}

export default VideoIndex;