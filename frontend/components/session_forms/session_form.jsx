import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

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
    componentDidMount(){ 
        this.props.clearErrors();
    }

    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    demo() {
        return(e) => {
            this.props.clearErrors();
            this.setState({
                ['email']: 'demo',
                ['password']: '123456'
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user)
        .then( () => {
            this.props.history.push("/");
        })
    }

    renderErrors() {
        return (
            <ul className="errors">
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
                {this.renderErrors()}
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
                {this.renderErrors()}
            </form>
        );

        let display = () => (
            <div>
            </div>
        );
        let link = null;

        if(this.props.formType === "Login"){
            display = login;
            link = <Link to="/login" onClick={this.demo()}>Demo Login</Link>
        } else {
            display = signup;
            link = this.props.navLink
        }

        return (
            <div className="form-container-inner">
                {display()}
                <div className="demo">
                    {link}
                </div>
            </div>
        )
    }
};

export default SessionForm;