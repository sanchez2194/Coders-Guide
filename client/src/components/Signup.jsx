import React, { Component } from 'react'
import axios from 'axios';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        axios({
            url: 'authentication/signup ',
            method: 'POST',
            data: {
                email,
                password
            }
        })
        .then((response) => {
            this.props.history.push('/profile');
            
        })
        .catch((error) => {
            console.log('Error: ', error.response);
            
        });
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        //JSX
        return (
            <div className="box-container">
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit} >
                    <div className='input'>
                        <input type="text" name="email" placeholder = 'email@test.com' onChange={this.handleChange} /> <br /><br />
                        <input type="password" name="password" placeholder = 'password' onChange={this.handleChange} /><br /><br />
                    </div>
                    <div className='button'>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }

}