import React, { Component } from 'react'
import {connect } from 'react-redux'
import { loginUser } from '../actions/rootActions'
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

        const loginVals = {
            ...this.state,
            currentUserId: this.props.currentUserId
        }

        this.props.loginUser(loginVals)
    }

    render() {
        console.log('Login component')

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

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: loginParms => dispatch(loginUser(loginParms))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)