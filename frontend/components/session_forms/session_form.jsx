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
        });
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
                    <ul>
                        <li>
                            <label>Email:</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </li>
                        <li>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </li>
                    </ul>
                </div>   
                <div className="form-links">
                    {/* <input
                        className="form-btn"
                        type="submit"
                        value={this.props.formType}
                    /> */}
                    <button className="form-btn">{this.props.formType}</button>
                    <Link to="/signup">Create an Account</Link>
                </div>
                {this.renderErrors()}
            </form>
        );

        const signup = () => (
            <form onSubmit={this.handleSubmit} className="session-form">
                <div className="input-group">
                    <ul>
                        <li>
                            <label>Email:</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </li>
                        <li>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </li>
                        <li>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </li>

                    </ul>
                </div>
                <div className="form-links">
                    {/* <input
                        className="form-btn"
                        type="submit"
                        value={this.props.formType}
                    /> */}
                    <button className="form-btn">{this.props.formType}</button>
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
            link = <a style={{visibility: 'hidden'}}>dummy</a>
        }

        return (
            <div className="entry-pg">
                <div className="logo">
                    <Link to="/">
                        <div className="logo-img"></div>
                        <h1 className="logo-name">MEWTUBU</h1>
                    </Link>
                </div>
                <div className="form-container-inner">
                    {display()}
                    <div className="demo">
                        {link}
                    </div>
                </div>
            </div>

        )
    }
};

export default SessionForm;