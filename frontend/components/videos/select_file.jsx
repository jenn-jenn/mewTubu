import React from 'react';

class SelectFile extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        const selectForm = () => (
            <div className="select-form">

            </div>
        );

        return (
            <div className="select-container"> 
                {selectForm()}
            </div>
        )
    }
};

export default SelectFile;
