import React from 'react';
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
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
            this.word = this.props.videos;
            this.props.fetchVideosWithQuery(this.props.videos).then(() => {
                this.setState({ isArray: Array.isArray(this.props.videos) })
            })
        }
    }

    render() {
        let display = null;
        let searchResult = null;
        if(!this.state.isArray || (this.state.isArray && this.props.videos.length === 0)){
            display = (
                null
            )
        } else if (this.word && (this.state.isArray && this.props.videos.length === 0)){
            display = (
                <header className="not-found">
                    <h2>Sorry, videos not found</h2>
                </header>
            )
        } else if(this.state.isArray){
            // if(this.word) {
            //     searchResult = (
            //         <h2>Search results for "{this.word}"</h2>
            //     )
            // }
            
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
                {/* <div>
                    {searchResult}    
                </div> */}
                {display}
            </div>
        )
    }
}

export default VideoIndex;