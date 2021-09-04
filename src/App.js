import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import Heading from './components/Heading';
import Nav from './components/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';



function App() {
  return (
    <>
      <Heading />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Nav />
            <Home />
          </Route>
          <Route exact path='/starred'>
            <Nav />
            <Starred />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
