import React from 'react'
import logo from '../logo.png';

const Main = () => {
    return (
        <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div>
            <span className="title brand-name">Breeze Lakes Point</span><br/>
            <span className="title">serious fun!</span>
          </div>
        </header>
      </div>
    )
}

export default Main