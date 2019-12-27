import React, { useEffect } from 'react';
import VideoIndexItemContainer from './video_index_item_container';

const VideoIndexSearch = (props) => {
    const { videos, fetchVideos } = props;
    
    return(
        <div className="video-index-content">
            {videos.map((video, id) => (
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
};

export default VideoIndexSearch;