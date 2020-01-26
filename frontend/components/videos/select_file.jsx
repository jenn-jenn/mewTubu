import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useHistory, useLocation } from 'react-router-dom';

function SelectFile() {
    const history = useHistory();
    const location = useLocation();

    const onDrop = useCallback(file => {
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