import React from 'react'
import logoSmall from '../logo-small.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src={logoSmall} className="app-logo-small" alt="small logo" />
                Breeze Lakes Point
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