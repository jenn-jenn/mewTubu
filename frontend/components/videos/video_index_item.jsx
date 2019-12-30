import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        const video = this.props.video;
        const username = this.props.username;

        return(
            <div className="clip-content" >
                <Link to={{pathname: `/videos/${video.id}`}}>
                    <video className="clip" src={video.clipUrl} /> 
                </Link>
                <div className="clip-desc">
                    <div className="user-icon">
                        <img src={window.userpng} />
                    </div>
                    <div className="clip-title">
                        <Link to={{pathname: `/videos/${video.id}`}}>
                            {video.title}
                        </Link>
                        <p>{username}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default VideoIndexItem;