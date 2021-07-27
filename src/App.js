import Header from './components/Header'
import Site from './components/Site'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Site} />
            <Route exact path="/home" component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
