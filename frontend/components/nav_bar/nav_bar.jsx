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
        <nav>
            <div className="logo">
                <Link to="/">
                    <img className="logo-img" src="/assets/mew.png" alt="Home" />
                    <h1 className="logo-name">MEWTUBU</h1>
                </Link>
            </div>
            <div className="right-nav"> 
                <img className="upload-icon" src="/assets/upload.png" alt="Upload a video" />            
                {display}
            </div>
        </nav>

    );
};

export default NavBar;
