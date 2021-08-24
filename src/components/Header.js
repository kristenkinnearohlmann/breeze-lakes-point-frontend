import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import logoSmall from '../logo-small.png'
import './Header.css'

const Header = () => {
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
                <NavLink to="/login" exact>Login</NavLink>
            </div>
        </header>
    )
}

export default Header