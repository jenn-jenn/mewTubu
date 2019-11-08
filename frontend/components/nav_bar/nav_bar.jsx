import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

    const display = currentUser ? (
        
        <div className="welcome">
            
            <div>Welcome, {currentUser.username}</div>
            
            <button onClick={logout} className="nav-btn">Logout</button>
        </div>
    ) : (
            <button className="nav-btn"> <Link to="/login">Sign In</Link> </button>
        );

    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <div className="logo-img"></div>                   
                    <h1 className="logo-name">MEWTUBU</h1>
                </Link>
            </div>
            
            {/*Search Component here later */}
            <form className="search-bar">
                <label>
                    <input type="text" placeholder="Search" ></input>
                </label>
                
            </form>
            
            <div className="right-nav"> 
                <div className="upload-icon"></div>
                {display}
            </div>
        </nav>

    );
};

export default NavBar;
