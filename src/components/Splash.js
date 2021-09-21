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
              {/* TODO: Remove Dashboard button once both Log In and Sign Up are in production */}
              <Link to="/home"><button className="app-button-main">Dashboard</button></Link><button className="app-button-main" id="splash-login">Log In</button><Link to="/registration"><button className="app-button-main" id="splash-signup">Sign Up</button></Link>
            </div>
          </div>
      </div>
    )
}

export default Main