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
                    <img src={logoSmall} className="app-logo-small" alt="small logo" />
                </div>
                <div>
                    Breeze Lakes Point
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