import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Login } from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        <Switch>
          <Route exact path="/">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
