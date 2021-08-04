import React from 'react'
import NavLinks from './NavLinks'
import logoSmall from '../logo-small.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-logo">
                <div>
                    <img src={logoSmall} className="app-logo-small" alt="small logo" />
                </div>
                <div>
                    Breeze Lakes Point
                </div>
            </div>
            <div>
                <NavLinks />
            </div>
            <div>
                Login
            </div>
        </header>
    )
}

export default Header