import React, { useEffect, useState } from 'react'
import Splash from './Splash'
import MainContent from './MainContent'

const Main = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 20000)
      return () => clearTimeout(timer)
    }, [])



    return (
        <div>
          {loading === true ? <Splash /> : <MainContent />}         
        </div>
    )
}

export default Main