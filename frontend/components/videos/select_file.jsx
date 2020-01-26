// import React from 'react';

// class SelectFile extends React.Component { 
//     constructor(props) {
//         super(props);
//         this.state = {
//             file: null
//         }
//         this.handleFile = this.handleFile.bind(this);
//     }

    
//     handleFile(e) {
//         this.setState({file: e.target.files[0]})
//         const file = e.target.files[0];
//         this.props.history.push({
//             pathname: '/videos/new',
//             state: { file: file }
//         })
//     }

//     render() {
//         const selectForm = () => (
//             <div className="select-file-div">
//                 <label htmlFor="file-input" className="paper-clip">
//                     <img src={window.filespng}/>
//                 </label>
//                 <input 
//                     id="file-input"
//                     type="file" 
//                     onChange={this.handleFile}
//                     accept="video/*"
//                 />
//             </div>
//         );

//         return (
//             <div className="select-outer-container">    
//                 <div className="select-container"> 
//                     <div className="select-file-header">
//                         <h2>Upload Video</h2>
//                     </div>
//                     <div className="select-file-form">
//                         {selectForm()}
//                         <h1>Select File to Upload</h1>
//                     </div>
                    
//                 </div>
//             </div>
//         )
//     }
// };




import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useHistory, useLocation } from 'react-router-dom';

function SelectFile() {
    const history = useHistory();
    const location = useLocation();

    const onDrop = useCallback(file => {
        debugger
        history.push({
            pathname: '/videos/new', 
            state: {file: file[0] }
        })

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

    return (
      <div className="select-outer-container">
        <div className="select-container">
          <div className="select-file-header">
            <h2>Upload Video</h2>
          </div>
          <div {...getRootProps()}  className="select-file-form">
            <input id="file-input" {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and drop file here, or click to select files</p>
            )}
          </div>
        </div>
      </div>
    );
}

export default SelectFile;