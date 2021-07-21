import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Splash from './Splash'
import Main from './Main'

const Site = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 10000)
      return () => clearTimeout(timer)
    }, [])

    return (
      <Router>
        <div>
          {/* {(loading === true && window.location.pathname === '/') ? <Splash /> : <Main />}       */}
          {loading === true ? <Splash /> : <Redirect to={Main} />}
        </div>
      </Router>
    )
}

export default Site