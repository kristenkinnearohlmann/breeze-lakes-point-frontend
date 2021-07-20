import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
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
          {loading === true ? <Splash /> : <Redirect to={'/home'} />}
        </div>
      </Router>
    )
}

export default Site