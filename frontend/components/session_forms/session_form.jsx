import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => {
            this.props.history.push("/");
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // debugger
        const login = () => (
            <form onSubmit={this.handleSubmit} className="session-form">
                <div className="input-group">
                    <label>Email:</label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    <label>Password:</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                </div>   
                    <div className="form-links">
                        <input
                            className="form-btn"
                            type="submit"
                            value={this.props.formType}
                        />
                        <Link to="/signup">Create an Account</Link>
                    </div>
                 
            </form>
        );

        const signup = () => (
            <form onSubmit={this.handleSubmit} className="session-form">
                <div className="input-group">
                    <label>Email:</label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    <label>Username:</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    <label>Password:</label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                </div>
                    <div className="form-links">
                        <input
                            className="form-btn"
                            type="submit"
                            value={this.props.formType}
                        />
                        <Link to="/login">Have an Account?</Link>
                    </div>
                
            </form>
        );

        let display = () => (
            <div>

            </div>
        );
        if(this.props.formType === "Login"){
            display = login;
        } else {
            display = signup;
        }

        return (
            <div className="form-container-inner">
                {this.renderErrors()}
                {display()}
            </div>
        )
    }
};

export default SessionForm;