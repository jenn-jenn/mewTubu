import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        
        <div className="welcome">
            
            <span>Welcome, {currentUser.username}</span>
            
            <button onClick={logout} className="nav-btn">Logout</button>
        </div>
    ) : (
            <button className="nav-btn"> <Link to="/login">Sign In</Link> </button>
        );

    return (
        <div className="right-nav"> 
            {/* <div className="upload-cntr"> */}
                <img className="upload-icon" src="/assets/upload.png" alt="Upload a video" />
            {/* </div> */}
            
            {display}
        </div>


    );
};

export default NavBar;
