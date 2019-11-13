import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // debugger
        const video = this.props.video;
        const username = this.props.username;
        return(
            <div className="clip-content">
                <Link to={`/videos/${video.id}`}>
                    <video className="clip" src={video.clipUrl} />
                    <div className="clip-desc">
                        <div className="user-icon">
                            <img src="/assets/user.png" />
                        </div>
                        <div className="clip-title">
                            <h3>{video.title}</h3>
                            <p>{username}</p>
                        </div>
                        
                    </div>
                </Link>
                
            </div>
        )
    }
};

export default VideoIndexItem;