import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

    const button = currentUser ? 
    //     (<button onClick={logout} className="right-nav-btn">Logout</button> ) 
    //   : (<button className="right-nav-btn"> <Link to="/login">Sign In</Link> </button> )
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
