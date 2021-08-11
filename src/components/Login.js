import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    
    state = {
        email: ''
    }

    render() {
        console.log(this.state.email)

        return (
            <div>
                <form className="form-style">
                    <p>
                        <label name="email">Email</label><br/>
                        <input type="text" />
                    </p>
                    <p>
                        <label name="password">Password</label><br/>
                        <input type="password" />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login