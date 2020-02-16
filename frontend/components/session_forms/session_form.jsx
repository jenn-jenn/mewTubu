import React from 'react';
import { Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        // if (props.location.state){
        //     this.state = {
        //         email: 'demo',
        //         password: '123456'
        //     };
        // } else {
        //     this.state = {
        //         email: '',
        //         password: ''
        //     };
        // };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    componentDidMount(){ 
        this.props.clearErrors();
        this.submit_btn= document.getElementById("session-submit");
    }

    update(field) {
        return(e) => {
            this.setState( {[field]: e.target.value} )
        }
    }

    demo() { 
        return(e) => {
            this.props.clearErrors();
            const { from } = this.props.location.state || {
              from: { pathname: "/" }
            };
            this.setState({
                ['email']: 'demo',
                ['password']: '123456'
            }, () => {
                const user = Object.assign({}, this.state);
                this.props.processForm(user)
                    .then( () => {
                        this.props.history.push(from);
                    })
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.toggleDisable();
        this.props.processForm(user)
            .then( () => {
                // this.toggleDisable();
                this.props.history.push(from);
            })
    }
    handleEnter(e) {
        if(e.keyCode === 13) {
            this.handleSubmit(e);
        }
    }

    toggleDisable() {
        if (this.submit_btn.disabled === "disabled") {
            this.submit_btn.disabled = ""
        } else {
            this.submit_btn.disabled = "disabled"
        }
    }

    renderErrors() {
        return (
            <ul className="errors" id="session-errors">
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
            <form onSubmit={this.handleSubmit} onKeyDown={this.handleEnter} className="session-form">
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
                    <button className="form-btn" id="session-submit">{this.props.formType}</button>
                    <Link to="/signup">Create an Account</Link>
                </div>
                {this.renderErrors()}
            </form>
        );

        const signup = () => (
            <form onSubmit={this.handleSubmit} onKeyDown={this.handleEnter}className="session-form">
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
                    <button className="form-btn" id="session-submit">{this.props.formType}</button>
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