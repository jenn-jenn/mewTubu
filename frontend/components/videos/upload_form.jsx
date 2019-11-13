import React from 'react';

class UploadForm extends React.Component {
    // have access to file via this.props.location.state.file
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            title: '',
            description:'',
            clipFile: null,
            clipUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger
        const file = this.props.location.state.file;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ 
                clipFile: file,
                clipUrl: fileReader.result
            });
        }
        if(file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        // this.setState({['clip_url']: this.props.location.state.file});
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[author_id]', this.props.currentUserId);
        formData.append('video[clip]', this.props.location.state.file);
        this.props.createVideo(formData)
            .then( 
                (res) => console.log(res.messsage),
                (res) => console.log(res.responseJSON)
        );
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        console.log(this.state)
        const form = () => (
            <form onSubmit={this.handleSubmit} className="upload-form">
                <div className="done-btn-container">
                    <div className="progress-bar-container">
                        <progress max="100" value="0">
                            <div className="progress-bar">
                                <span>Progess: 0%</span>
                            </div>
                        </progress>
                    </div>
                    <input
                        type="submit"
                        value="Done"
                        className="done-btn"
                    />
                </div>
                <div className="clip-info-title">
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        className="title-input"
                        placeholder="Title"
                    />      
                </div>          
                <div className="clip-info-description">
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        className="title-input"
                        placeholder="Description"
                    />
                </div>  
            </form>
        )
        return (
            <div className="upload-container">
                <div className="clip-thumbnail-container">
                    <div className="clip-thumbnail">
                        <video>
                            <source src={this.state.clipUrl} />
                        </video>
                    </div>
                </div>
                <div className="clip-info-container">

                    <div className="upload-form-div">
                        {form()}
                    </div> 
                </div>
                {this.renderErrors()}
            </div>
        )
    }
}

export default UploadForm;