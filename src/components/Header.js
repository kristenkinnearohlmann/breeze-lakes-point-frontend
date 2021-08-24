import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions/rootActions'
import NavLinks from './NavLinks'
import logoSmall from '../logo-small.png'
import './Header.css'

const Header = props => {
    console.log('Header component')
    console.log(props.currentUserId)
    return (
        <header>
            <div className="header-logo title">
                <div>
                    <NavLink to="/" exact className="remove-underline"><img src={logoSmall} className="app-logo-small" alt="small logo" /></NavLink>
                </div>
                <div>
                    <NavLink to="/" exact className="remove-underline">Breeze Lakes Point</NavLink>
                </div>
            </div>
            <div className="header-nav">
                <NavLinks />
            </div>
            <div className="header-login">
                {props.currentUserId === -1 ? <NavLink to="/login" exact>Login</NavLink> : <NavLink to="/home" onClick={() => props.logoutUser()}exact>Logout</NavLink>}
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)