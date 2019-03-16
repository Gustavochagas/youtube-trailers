import React, { Component, Fragment } from 'react';

import LoginStyles from './style';

import LogoWhite from './../../assets/img/logo_dark.png';

class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: ''
    }

    handleInputChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;

        if (username) {
            this.setState({
                errorMessage: ''
            })
            
            localStorage.setItem('@Trailers:username', username);
            this.props.history.push('/trailers');
        } else {
            this.setState({
                errorMessage: 'Preencha seu e-mail'
            })
        }

        
    }

  render() {
    return (
        <Fragment>
            <LoginStyles />
            <div className="login-wrapper">
                <div className="overlay"></div>
                <div className="content__login">
                    <img src={LogoWhite} alt="Logo" width="245" />
                    <div className="form__login">
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="email" 
                                className="form__login--email" 
                                placeholder="E-mail"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                            <input 
                                type="password" 
                                className="form__login--password" 
                                placeholder="Password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <p className="form__login--error">{this.state.errorMessage}</p>
                            <button className="form__login--btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default Login;
