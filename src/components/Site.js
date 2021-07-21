import React, { useEffect, useState } from 'react'
import Splash from './Splash'

const Site = ({ history }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 10000)

      return () => {
        clearTimeout(timer)
      }
    }, [])

    const displayContent = () => {
      if (loading === true) {
        return <Splash />
      } else {
        history.push("/home")
      }
    }

    return (
      <div>
        {/* {(loading === true) ? <Splash /> : loadSplashOrMain(history)} */}
        {displayContent(loading)}
      </div>
    )
}

export default Site