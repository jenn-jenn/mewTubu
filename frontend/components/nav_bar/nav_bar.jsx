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
            
            <div className="search-bar-container">        
                <div className="search-input-div">
                    <form className="search-form">
                        <input type="search" placeholder="Search" />
                        <input className="search-icon" type="submit" value=""/>
                    </form>
                </div>
            </div>
            <div className="right-nav"> 
                <Link to="/selectFiles">
                    <div className="upload-icon"></div>  
                </Link>
                {display}
            </div>
        </nav>
    );
};

export default NavBar;
