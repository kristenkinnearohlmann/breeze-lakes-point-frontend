import React from 'react'
import logoSmall from '../logo-small.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <div className="header-logo">
                    <img src={logoSmall} className="app-logo-small" alt="small logo" />
                </div>
                <div>
                    Breeze Lakes Point
                </div>
            </div>
            <div>
                Nav Links
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