import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) { 
        super(props);

        this.handleVideo = this.handleVideo.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleVideo(e) {
        e.preventDefault();
        let history = this.props.history;
        this.props.fetchVideo(this.props.video.id).then((res) => {
            history.push({
                pathname: `/videos/${this.props.video.id}`,
                newVideo: res.clip
            })
        })
        
        
    }

    render() {
        const {video, username} = this.props;

        return(
            <div className="clip-content" >
                <a href="" onClick={this.handleVideo}><video className="clip" src={video.clipUrl} /></a>
                <div className="clip-desc">
                    <div className="user-icon">
                        <img src={window.userpng} />
                    </div>
                    <div className="clip-title">
                        <a href="" onClick={this.handleVideo}>{video.title}</a>
                        <p>{username}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default VideoIndexItem;