import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './component/about/about'
import Detail from './component/detail/detail'
import CardList from './component/cardList/cardList'
import { createBrowserHistory } from 'history'
import './App.css'
const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/">home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={CardList} exact />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
