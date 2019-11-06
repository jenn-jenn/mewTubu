import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    debugger
    const display = currentUser ? (
        <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={logout} className="nav-btn">Logout</button>
        </div>
    ) : (
            <div>
                <button className="nav-btn"> <Link to="/login">Sign In</Link> </button>
            </div>
        );

    return (
        <div className="right-nav">
            {display}
        </div>


    );
};

export default NavBar;
