import React from 'react';

class SelectFile extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        // debugger 
        this.setState({file: e.target.files[0]})
        const file = e.target.files[0];
        debugger
        this.props.history.push({
            pathname: '/videos/new',
            state: { file: file }
        })
    }

    render() {
        const selectForm = () => (
            <div className="select-file-div">
                <label htmlFor="file-input" className="paper-clip">
                    <img src="/assets/files.png" />
                </label>
                <input 
                    id="file-input"
                    type="file" 
                    onChange={this.handleFile}
                    accept="video/*"
                />
            </div>
        );

        return (
            <div className="select-container"> 
                <div className="select-file-header">
                    <h2>Upload Video</h2>
                </div>
                <div className="select-file-form">
                    {selectForm()}
                    <h1>Select File to Upload</h1>
                </div>
                
            </div>
        
        )
    }
};

export default SelectFile;
