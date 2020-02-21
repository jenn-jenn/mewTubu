import React from 'react';
import { Link } from 'react-router-dom';
import SearchbarContainer from '../searchbar/search_bar_container';

const NavBar = ({ currentUser, logout }) => {

    const button = currentUser ? 
        (<button onClick={logout} className="form-btn">Logout</button> ) 
        : 
        (<Link to="/login"><button className="form-btn"> Sign In</button></Link> )


    const display = currentUser ? (
        <div className="welcome">
            <div className="welcome-header">
                <h2 >Welcome, {currentUser.username}</h2>
            </div>
            <div>
                {button}
            </div>
        </div>
    ) : (
            <div className="welcome">            
            <div className="welcome-header">
                <h2></h2>
            </div>
            <div>
                {button}
            </div>
        </div>
        );

    return (
        <nav className="top-nav">
            <div className="logo">
                {/* <Link to="/">
                    <div className="logo-img"></div>                   
                    <h1 className="logo-name">MEWTUBU</h1>
                </Link> */}
                <a href="/"><div className="logo-img"></div></a>
                <a href="/"><h1 className="logo-name">MEWTUBU</h1></a>

            </div>
            
            <SearchbarContainer />

            <div className="top-right-nav">                 
                <Link to="/selectFiles">
                    <div className="upload-icon"></div>  
                </Link>
                {display}
            </div>
        </nav>
    );
};

export default NavBar;
