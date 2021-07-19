import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Main = () => {

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContent} />
            {/* <MainContent /> */}
          </Switch>    
        </div>
      </Router>
    )
}

export default Main