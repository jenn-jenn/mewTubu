import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:'',
            file: this.props.file,
            clipFile: null,
            clipUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.done_btn = document.getElementById("upload-done");
        this.props.clearErrors();
        const file = this.state.file;
        if(!file) {
            this.props.history.push('/');
        }
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
    toggleDisable() {
        if(this.done_btn.disabled === "disabled") {
            this.done_btn.disabled = ""
        } else {
            this.done_btn.disabled = "disabled"
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleDisable();
        const formData = new FormData();
    
        if(this.state.title === "" || this.state.description === "") {
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            formData.append('video[author_id]', this.props.currentUserId);
        } else {
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            formData.append('video[author_id]', this.props.currentUserId);
            formData.append('video[clip]', this.props.file);
        }
        this.props.createVideo(formData)
            .then( (err) => {
                this.toggleDisable();
                this.props.history.push('/videos');
            })    
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
        const form = () => (
            <form onSubmit={this.handleSubmit} className="upload-form">
                <div className="done-btn-container">
                    {/* <div className="progress-bar-container">
                        <progress max="100" value="0">
                            <div className="progress-bar">
                                <span>Progess: 0%</span>
                            </div>
                        </progress> */}
                    {/* </div> */}
                    {/* <input
                        type="submit"
                        value="Done"
                        className="done-btn"
                        id="upload-done"
                    /> */}
                    <button className="done-btn" id="upload-done">Done</button>
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
            <div className="upload-outer-container">    
                <div className="upload-container">
                    <div className="clip-thumbnail-container">
                        <div className="clip-thumbnail">
                            <video id="video-thumbnail" src={this.state.clipUrl} />
                        </div>
                    </div>
                    <div className="clip-info-container">

                        <div className="upload-form-div">
                            {form()}
                            <div className="upload-errors">
                                {this.renderErrors()}
                            </div>
                            
                        </div> 
                        
                    </div>
                    
                </div>
            </div>
        )
    }
} 
export default UploadForm;