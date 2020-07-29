import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import NavBar from './cmps/NavBar.jsx'
import BreachDetails from '../src/cmps/BreachDetails'

function App() {

  return (
    <div className="app-container flex column align-center">
      {/* <NavBar /> */}
        <Switch>
          <Route component={BreachDetails} path="/breach-details" />
          <Route component={Home} path="/" />
        </Switch>
    </div>
  );
}

export default App;
