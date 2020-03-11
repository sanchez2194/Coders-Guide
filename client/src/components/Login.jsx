import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: ''

    };



    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        axios({
            url: 'authentication/signin ',
            method: 'POST',
            data: {
                email,
                password
            }
        })
            .then((response) => {
                const isAuthenticated = response.data.isAuthenticated;
                window.localStorage.setItem('isAuthenticated', isAuthenticated);
                this.props.history.push('/profile');

            })
            .catch((error) => {
                this.setState({
                    errorMessage: error.response.data.message
                })
            });
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        const isAuthenticated = window.localStorage.getItem('isAuthenticated');

        if (isAuthenticated) {
            return <Redirect to='/profile' />
        }
        //JSX
        return (
            <>
            <div className = 'header'>
                <h1>Coder's Guide</h1>
                <h2>Every coder's best friend</h2>
            </div>

            <div className="box-container">
                <div className = 'inner-text-box'>
                <h2>Welcome Back</h2>
                <form onSubmit={this.handleSubmit} >
                    <div className='input'>
                        <input type="text" name="email" placeholder = 'email@test.com' onChange={this.handleChange} /> <br /><br />
                        <input type="password" name="password" placeholder = 'password' onChange={this.handleChange} /><br /><br />
                    </div>
                    <div className='button'>
                        <button>Login</button>
                    </div>
                </form>
                <p>{this.state.errorMessage}</p>
                </div>
            </div>
            </>

        );
    }

}