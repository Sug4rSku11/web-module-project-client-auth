import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import Friends from './components/Friends';
import Nav from './components/Nav';
import UserSection from './components/UserSection';


function App() {
  let isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Nav />
        {isLoggedIn && <Link to="/protected">Protected Page</Link>}
        {isLoggedIn && <UserSection />}
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route path="/logout" component={Logout}/>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
