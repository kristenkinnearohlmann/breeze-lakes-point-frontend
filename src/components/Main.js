import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Registration from './Registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Main = () => {
    console.log("Something here?")
    return (
      // <Router>
      //   <div>
      //     {/* <Header /> */}
      //     {/* <Switch>
      //       <Route exact path="/register" component={Registration} />
      //       <Route exact path="/home" component={MainContent} />
      //     </Switch>     */}
          
      //   </div>
      // </Router>
      <div>
        Main stuff
      </div>
    )
}

export default Main