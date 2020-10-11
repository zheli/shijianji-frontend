import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { history } from './_helpers';
import { Login } from './containers/Login';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO add something here
    history.listen(() => {
      // TODO add something here
      console.log('listen to history here');
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Homepage</Link>
              </li>
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
            <PrivateRoute exact path="/protected" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
