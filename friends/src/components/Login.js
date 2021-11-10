import React from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log(err);
        })
    };
    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}/>
                    <button>Log In</button>
                </form>
            </div>

        );
    }
}
export default Login;
