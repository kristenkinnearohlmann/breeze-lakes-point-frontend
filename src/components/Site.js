import React, { useEffect, useState } from 'react'
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
        <div>
          {(loading === true && window.location.pathname === '/') ? <Splash /> : <Main />}         
        </div>
    )
}

export default Site