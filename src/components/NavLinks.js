import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="link-layout">
            <div><NavLink to="/home" exact>Dashboard</NavLink></div>
            <div><NavLink to="/registration" exact>Registration</NavLink></div>
        </div>
    )
}

export default NavLinks