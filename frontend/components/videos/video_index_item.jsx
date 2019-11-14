import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.videoShowPage = this.videoShowPage.bind(this);
    }

    videoShowPage(e) {
        alert('clicked')
        debugger
        const id = this.props.video.id;
        this.props.history.push({
            pathname: `/videos/${id}`
        })

    }

    render() {
        // debugger
        const video = this.props.video;
        const username = this.props.username;
        return(
            <div className="clip-content" >
                    <video className="clip"  src={video.clipUrl} />
                    <div className="clip-desc">
                        <div className="user-icon">
                            <img src="/assets/user.png" />
                        </div>
                        <div className="clip-title">
                        <h3><Link to={`/videos/${video.id}`}>{video.title}</Link></h3>
                            <p>{username}</p>
                        </div>
                    </div>
            </div>
        )
    }
};

export default VideoIndexItem;