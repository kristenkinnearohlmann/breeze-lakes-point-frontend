import Header from './components/Header'
import Splash from './components/Splash'
import Site from './components/Site'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Splash} /> */}
          <Route exact path="/" component={Site} />
          <Route exact path="/home" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
