import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import UploadContainer from './upload_container';
import NavBar from '../nav_bar/nav_bar_container';
import SideNav from '../side_nav/side_nav';

class SelectFile extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            // clipFile: null
        }

        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        // debugger 
        const file = e.target.files[0];
        this.props.history.push({
            pathname: '/upload',
            state: { file: file }
        })
        // <ProtectedRoute path="/upload" component={UploadContainer} file={file} />
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
