import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        if (props.location.state){
            this.state = {
                email: 'demo',
                password: '123456'
            };
        } else {
            this.state = {
                email: '',
                password: ''
            };
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    demo() {
        return(e) => {
            this.setState({
                ['email']: 'demo',
                ['password']: '123456'
            })
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
        let link = null;

        const demo = {
            pathname: "/login",
            state: true
        }

        if(this.props.formType === "Login"){
            display = login;
            link = <Link to="/login" onClick={this.demo()}>Demo Login</Link>
        } else {
            display = signup;
            link = <Link to={demo}>Demo Login</Link>
        }

  

        return (
            <div className="form-container-inner">
                {this.renderErrors()}
                {display()}
                <div className="demo">
                    {link}
                </div>
                
            </div>
        )
    }
};

export default SessionForm;