import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import { BrowserRouter as Router, Route, Swith } from 'react-router-dom'

const Main = () => {

    return (
      <Router>
        <div>
          <Header />
          <MainContent />       
        </div>
      </Router>
    )
}

export default Main