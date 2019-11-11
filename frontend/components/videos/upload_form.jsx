import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const clip = Object.assign({}, this.state);
    }

    render() {
        const form = () => (
            <form onSubmit={this.handleSubmit} className="upload-form">

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
                    <div className="clip-thumbnail"></div>
                </div>
                <div className="clip-info-container">
                    <div className="done-btn-container">
                        <div className="progress-bar-container">
                            <progress max="100"value="0">
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
                    <div className="upload-form-div">
                        {form()}
                    </div> 
                </div>
            </div>
        );
    }
};

export default UploadForm;