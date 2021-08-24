import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="link-layout">
            <NavLink to="/home" exact>Dashboard</NavLink>
            <NavLink to="/registration" exact>Registration</NavLink>
        </div>
    )
}

export default NavLinks