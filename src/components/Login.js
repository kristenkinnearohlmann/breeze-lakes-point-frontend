import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        console.log(this.state.email)

        return (
            <div>
                <form className="form-style" onSubmit={this.handleSubmit}>
                    <p>
                        <label name="email">Email</label><br/>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label name="password">Password</label><br/>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login