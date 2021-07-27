import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import './Splash.css'

const Main = () => {
    return (
        <div className="app-splash">
          <div className="app-splash-content">
            <img src={logo} className="app-logo" alt="logo" />
            <div>
              <span className="title brand-name">Breeze Lakes Point</span><br/>
              <span className="title">serious fun!</span><br/>
              <Link to="/home">Home</Link>
            </div>
          </div>
      </div>
    )
}

export default Main