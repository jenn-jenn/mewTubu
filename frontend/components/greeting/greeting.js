import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentUser = this.props.currentUser;
        // debugger
        const session = () => (

            <nav className="login-signup">
                <Link to="/login">Login</Link>
                &nbsp;&nbsp;
                <Link to="/signup">Sign Up</Link>
            </nav>
        );

        const homepage = () => (
            <div className='header'>
                <h2 className="header-name">Welcome, {currentUser.username}</h2>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </div>
        );
       
        return currentUser ? homepage() : session();
    };
};

export default Greeting;