import Header from './components/Header'
import Site from './components/Site'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Site} />
            <Route exact path="/home" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
