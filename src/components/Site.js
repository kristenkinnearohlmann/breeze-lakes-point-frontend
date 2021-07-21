import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Splash from './Splash'

const Site = ({ history }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 10000)
      return () => clearTimeout(timer)
    }, [])

    const loadSplashOrMain = history => {
      if (loading === true) {
        return <Splash />
      } else {
        history.push("/home")
      }
    }

    return (
      <Router>
        <div>
          {/* {(loading === true && window.location.pathname === '/') ? <Splash /> : <Main />}       */}
          {/* {loading === true ? <Splash /> : <Redirect to={"/home"} />} */}
          {loadSplashOrMain(history)}
        </div>
      </Router>
    )
}

export default Site