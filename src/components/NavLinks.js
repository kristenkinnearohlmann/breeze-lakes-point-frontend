import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <div>
            <NavLink to="/home" exact>Dashboard</NavLink>
        </div>
    )
}

export default NavLinks