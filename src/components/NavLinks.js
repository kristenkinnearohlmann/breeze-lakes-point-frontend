import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <div>
            <NavLink to="/home" exact>Dashboard</NavLink>
            <NavLink to="/registration" exact>Registration</NavLink>
        </div>
    )
}

export default NavLinks