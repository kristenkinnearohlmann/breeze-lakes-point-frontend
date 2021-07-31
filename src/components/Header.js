import React from 'react'
import logo from '../logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} className="app-logo-small" alt="logo" />
            </div>
            <div>
                Links
            </div>
            <div>
                Search
            </div>
            <div>
                Login
            </div>
        </header>
    )
}

export default Header